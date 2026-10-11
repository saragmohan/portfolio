import os

class PDFBuilder:
    def generate(self, name, subtitle, contact, summary, skills_dict, exps, edu):
        page_width, page_height = 612, 792
        margin = 44
        content_width = page_width - (margin * 2)
        
        ops = []
        
        def escape(s):
            # Replace unicode dashes/bullets with standard ASCII / PDF octal
            s = s.replace('\u2014', '-').replace('\u2013', '-').replace('\u2022', '-')
            return s.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')

        y = 745
        
        # Header: Name
        ops.append('0.06 0.09 0.16 rg') # dark slate
        ops.append(f'BT /F2 22 Tf {margin} {y} Td ({escape(name)}) Tj ET')
        y -= 22
        
        # Subtitle
        ops.append('0.31 0.27 0.90 rg') # indigo
        ops.append(f'BT /F2 11.5 Tf {margin} {y} Td ({escape(subtitle)}) Tj ET')
        y -= 17
        
        # Contact line
        ops.append('0.30 0.35 0.42 rg') # muted
        ops.append(f'BT /F1 8.5 Tf {margin} {y} Td ({escape(contact)}) Tj ET')
        y -= 14
        
        # Horizontal rule
        ops.append(f'0.85 0.88 0.92 RG 1 w {margin} {y} m {margin + content_width} {y} l S')
        y -= 18
        
        def add_section_header(sec_title):
            nonlocal y
            ops.append('0.31 0.27 0.90 rg')
            ops.append(f'BT /F2 10.5 Tf {margin} {y} Td ({escape(sec_title.upper())}) Tj ET')
            y -= 4
            ops.append(f'0.31 0.27 0.90 RG 1.5 w {margin} {y} m {margin + 36} {y} l S')
            y -= 14

        # Summary
        add_section_header('Professional Summary')
        ops.append('0.15 0.20 0.26 rg')
        for line in summary:
            ops.append(f'BT /F1 8.5 Tf {margin} {y} Td ({escape(line)}) Tj ET')
            y -= 12
        y -= 6

        # Technical Skills
        add_section_header('Technical Skills & AI Toolkit')
        for cat, sks in skills_dict.items():
            ops.append('0.06 0.09 0.16 rg')
            ops.append(f'BT /F2 8.5 Tf {margin} {y} Td ({escape(cat)}: ) Tj ET')
            offset = len(cat) * 5.0 + 14
            ops.append('0.25 0.30 0.36 rg')
            ops.append(f'BT /F1 8.5 Tf {margin + offset} {y} Td ({escape(sks)}) Tj ET')
            y -= 13
        y -= 6

        # Experience
        add_section_header('Professional Experience')
        for exp in exps:
            ops.append('0.06 0.09 0.16 rg')
            header_left = f"{exp['role']} - {exp['company']}"
            ops.append(f'BT /F2 9.5 Tf {margin} {y} Td ({escape(header_left)}) Tj ET')
            
            ops.append('0.40 0.45 0.52 rg')
            date_str = f"{exp['duration']} | {exp['location']}"
            date_x = margin + content_width - int(len(date_str) * 4.6)
            ops.append(f'BT /F1 8.5 Tf {date_x} {y} Td ({escape(date_str)}) Tj ET')
            y -= 13
            
            for bullet in exp['bullets']:
                ops.append('0.31 0.27 0.90 rg')
                ops.append(f'BT /F2 9 Tf {margin + 4} {y} Td (-) Tj ET')
                ops.append('0.20 0.25 0.32 rg')
                ops.append(f'BT /F1 8.2 Tf {margin + 16} {y} Td ({escape(bullet)}) Tj ET')
                y -= 12
            y -= 6

        # Education & Certifications
        add_section_header('Education & Certifications')
        for ed in edu:
            ops.append('0.06 0.09 0.16 rg')
            t_str = escape(ed['title'])
            ops.append(f'BT /F2 9 Tf {margin} {y} Td ({t_str}) Tj ET')
            if 'date' in ed:
                ops.append('0.40 0.45 0.52 rg')
                d_str = escape(ed['date'])
                date_x = margin + content_width - int(len(d_str) * 4.6)
                ops.append(f'BT /F1 8.5 Tf {date_x} {y} Td ({d_str}) Tj ET')
            y -= 12
            ops.append('0.30 0.35 0.42 rg')
            sub_str = escape(ed['subtitle'])
            ops.append(f'BT /F1 8.2 Tf {margin} {y} Td ({sub_str}) Tj ET')
            y -= 14

        stream_bytes = '\n'.join(ops).encode('latin1')
        
        pdf = bytearray()
        pdf.extend(b'%PDF-1.4\n')
        
        offsets = {}
        
        def write_obj(num, body):
            offsets[num] = len(pdf)
            pdf.extend(f'{num} 0 obj\n'.encode('latin1'))
            pdf.extend(body)
            pdf.extend(b'\nendobj\n')
            
        write_obj(1, b'<< /Type /Catalog /Pages 2 0 R >>')
        write_obj(2, b'<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
        write_obj(3, b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>')
        write_obj(4, b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
        write_obj(5, b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')
        
        stream_obj = f'<< /Length {len(stream_bytes)} >>\nstream\n'.encode('latin1') + stream_bytes + b'\nendstream'
        write_obj(6, stream_obj)
        
        xref_offset = len(pdf)
        pdf.extend(b'xref\n0 7\n0000000000 65535 f \n')
        for i in range(1, 7):
            pdf.extend(f'{offsets[i]:010d} 00000 n \n'.encode('latin1'))
            
        pdf.extend(f'trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n'.encode('latin1'))
        return bytes(pdf)

if __name__ == '__main__':
    builder = PDFBuilder()
    data = builder.generate(
        name='Sarag Mohan P',
        subtitle='Senior Software Engineer | 5+ Years Experience',
        contact='Bengaluru, India   |   saragmohan.parammal@gmail.com   |   linkedin.com/in/saragmohanp   |   github.com/saragmohan',
        summary=[
            'Results-driven Senior Software Engineer with over 5+ years of experience designing and delivering enterprise-scale, full-stack web applications.',
            'Proven expertise in architecting modular React.js frontends, resilient Java Spring Boot microservices, and GraphQL APIs.',
            'Demonstrated track record of cutting application load times by 40%, mentoring teams, and leveraging cutting-edge AI dev workflows.'
        ],
        skills_dict={
            'Frontend Development': 'React.js, JavaScript (ES6+), Redux, HTML5, CSS3, Responsive UI Design',
            'Backend & Architecture': 'Java, Spring Boot, Microservices, Node.js, REST APIs, GraphQL, JSON',
            'AI & Productivity Tools': 'GitHub Copilot, ChatGPT, Gemini, Cursor, Claude (Claw), Rovo Dev CLI, Google Antigravity',
            'DevOps & Methodology': 'Git, GitHub, Bitbucket, CI/CD Pipelines, Jest, JUnit, Agile / Scrum, Code Reviews'
        },
        exps=[
            {
                'role': 'Senior Software Engineer',
                'company': 'IBS Software',
                'location': 'Bengaluru, India',
                'duration': '02/2022 - Present',
                'bullets': [
                    'Built and integrated Spring Boot microservice APIs with modern React.js interfaces for mission-critical enterprise workflows.',
                    'Spearheaded performance tuning and reusable component architecture, resulting in a documented 40% reduction in load times.',
                    'Migrated legacy REST services to GraphQL, optimizing network payload efficiency and simplifying client-side data state.',
                    'Partnered with tier-1 international airlines (China Airlines, Qantas, Air Arabia) to deliver reliable, high-availability solutions.',
                    'Championed AI-assisted development (GitHub Copilot, Jira AI) and established automated UI testing with Jest and CI/CD.'
                ]
            },
            {
                'role': 'Market Research Executive',
                'company': 'Silicon Media Technologies',
                'location': 'Bangalore, India',
                'duration': '10/2019 - 10/2021',
                'bullets': [
                    'Managed and deployed time-sensitive digital content updates, web banner placements, and interactive portal listings.',
                    'Collaborated with cross-functional media and development teams to ensure high reliability in live production environments.'
                ]
            }
        ],
        edu=[
            {
                'title': 'B.Tech in Mechanical Engineering',
                'subtitle': 'Achariya College of Engineering Technology | Pondicherry, India',
                'date': '08/2014 - 05/2018'
            },
            {
                'title': 'Professional Certifications',
                'subtitle': 'React.js Essential Training   |   Building RESTful APIs with Node.js and Express   |   JavaScript Challenges',
                'date': 'Verified'
            }
        ]
    )

    os.makedirs('public', exist_ok=True)
    with open('public/Sarag_Mohan_Portfolio.pdf', 'wb') as f:
        f.write(data)
    print('PDF generated successfully, size:', len(data))
