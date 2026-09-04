import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
import pypdf

def build_pdf(filename):
    # Page setup with tight margins for exact 1-page fit
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=30,
        rightMargin=30,
        topMargin=20,
        bottomMargin=20
    )

    styles = getSampleStyleSheet()
    
    style_name = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=16,
        leading=18,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111111')
    )
    
    style_sub = ParagraphStyle(
        'SubHeader',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#222222')
    )
    
    style_section = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=10,
        textTransform='uppercase',
        textColor=colors.HexColor('#000000'),
        spaceBefore=3,
        spaceAfter=1
    )

    style_summary = ParagraphStyle(
        'Summary',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=9.8,
        alignment=TA_JUSTIFY,
        textColor=colors.HexColor('#111111')
    )

    style_highlights = ParagraphStyle(
        'Highlights',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=7.5,
        leading=9.5,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#333333'),
        spaceBefore=1,
        spaceAfter=1
    )

    style_item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=9.8,
        textColor=colors.HexColor('#111111')
    )

    style_item_sub = ParagraphStyle(
        'ItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=7.5,
        leading=9,
        textColor=colors.HexColor('#444444')
    )

    style_bullet = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.2,
        alignment=TA_JUSTIFY,
        textColor=colors.HexColor('#111111'),
        leftIndent=10,
        firstLineIndent=-6,
        spaceBefore=0.5,
        spaceAfter=0.5
    )

    style_body = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.2,
        textColor=colors.HexColor('#111111')
    )

    story = []

    # 1. HEADER
    story.append(Paragraph("BHEEMALINGAPPA", style_name))
    story.append(Spacer(1, 1))
    story.append(Paragraph("Bengaluru, Karnataka, India &nbsp;|&nbsp; +91 7349043057 &nbsp;|&nbsp; bhimubhimu2000@gmail.com", style_sub))
    story.append(Spacer(1, 1))
    links_html = '<a href="http://www.linkedin.com/in/bheema-lingappa" color="#0044cc">http://www.linkedin.com/in/bheema-lingappa</a> &nbsp;|&nbsp; <a href="https://github.com/Bheemalingappa" color="#0044cc">https://github.com/Bheemalingappa</a> &nbsp;|&nbsp; <a href="https://bheemalingappa-ai-data-science-port-nine.vercel.app" color="#0044cc">Portfolio</a> &nbsp;|&nbsp; <a href="https://drive.google.com" color="#0044cc">Certificates</a>'
    story.append(Paragraph(links_html, style_sub))
    story.append(Spacer(1, 2))

    def add_section_header(title):
        story.append(Paragraph(title, style_section))
        story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#222222'), spaceBefore=1, spaceAfter=2))

    # 2. SUMMARY
    add_section_header("SUMMARY")
    summary_text = "Early-career Business Intelligence / Data Analytics professional with hands-on experience in Power BI, DAX, Power Query, SQL, Python, ETL pipelines, data pipelines, KPI dashboards, dashboard development, data visualization, predictive analytics, and reporting & analytics. Skilled in end-to-end BI workflows — from SQL-based data extraction, data transformation, and data preparation to data modeling and interactive dashboards — with project experience in retail and nutrition analytics, forecasting, and cross-functional stakeholder reporting."
    story.append(Paragraph(summary_text, style_summary))
    story.append(Paragraph("260+ menu items analyzed across nutrition metrics &bull; 4 end-to-end analytics projects delivered &bull; 2 data analytics internships/traineeships completed", style_highlights))

    # 3. INTERNSHIP EXPERIENCE
    add_section_header("INTERNSHIP EXPERIENCE")
    
    # Cognifyz
    t1_left = Paragraph("<b>Data Science &amp; Data Analytics Intern &mdash; Cognifyz Technologies</b>", style_item_title)
    t1_right = Paragraph("<para align=right><b>2025</b></para>", style_item_title)
    t1 = Table([[t1_left, t1_right]], colWidths=[410, 142])
    t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(t1)
    story.append(Paragraph("Remote", style_item_sub))
    story.append(Paragraph("&bull; Implemented SQL queries and SQL-based ETL pipelines to extract, transform, and load data across recurring analytics workflows, replacing manual reporting with automated data flows.", style_bullet))
    story.append(Paragraph("&bull; Analyzed 3 end-to-end business datasets using Python, Pandas, and NumPy, applying root cause analysis to surface KPIs and trends that directly informed stakeholder decisions.", style_bullet))
    story.append(Paragraph("&bull; Applied predictive modeling and machine learning (regression and classification) for forecasting, and prepared dashboard-ready BI reports used across cross-functional collaboration and stakeholder reporting.", style_bullet))
    story.append(Spacer(1, 2))

    # Simplilearn
    t2_left = Paragraph("<b>Data Science &amp; Analytics Trainee &mdash; Simplilearn</b>", style_item_title)
    t2_right = Paragraph("<para align=right><b>2025</b></para>", style_item_title)
    t2 = Table([[t2_left, t2_right]], colWidths=[410, 142])
    t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(t2)
    story.append(Paragraph("Remote", style_item_sub))
    story.append(Paragraph("&bull; Developed 4 applied mini-projects using Python, SQL, Power BI, and Tableau, implementing regression, classification, and clustering for business analytics use cases.", style_bullet))
    story.append(Paragraph("&bull; Completed structured training across 5 core BI/ETL domains — ETL, data transformation, data integration, KPI reporting, and business intelligence dashboard development.", style_bullet))
    story.append(Paragraph("&bull; Delivered analytical reports across 4 applied case studies, strengthening stakeholder-focused data storytelling.", style_bullet))
    story.append(Spacer(1, 2))

    # 4. PROJECTS
    add_section_header("PROJECTS")

    # McDonald's
    p1_left = Paragraph("<b>McDonald's Menu Analytics Dashboard &mdash; Power BI</b>", style_item_title)
    p1_right = Paragraph('<para align=right><a href="https://github.com/Bheemalingappa/mcdonalds-menu-analytics-powerbi" color="#0044cc">GitHub Repository</a></para>', style_item_title)
    p1 = Table([[p1_left, p1_right]], colWidths=[390, 162])
    p1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(p1)
    story.append(Paragraph("Power BI, Power Query, DAX, Data Cleaning, Data Visualization, GitHub", style_item_sub))
    story.append(Paragraph("&bull; Designed an interactive Power BI dashboard analyzing McDonald's menu and nutrition dataset across 260+ products, covering category-wise breakdowns and product-level nutrition values.", style_bullet))
    story.append(Paragraph("&bull; Engineered Power Query (ETL) transformations and DAX measures to clean, model, and calculate 5 key nutrition KPIs — calories, protein, sodium, sugar, and fat — across menu categories.", style_bullet))
    story.append(Paragraph("&bull; Published a two-page dashboard (Overview and Menu &amp; Nutrition pages) enabling category-wise and product-wise comparisons, along with the dataset, .pbix file, and a recorded demo on GitHub and LinkedIn.", style_bullet))
    story.append(Spacer(1, 2))

    # DataVision
    p2_left = Paragraph("<b>DataVision &mdash; End-to-End Data Analytics Workflow Platform</b>", style_item_title)
    p2_right = Paragraph('<para align=right><a href="https://github.com/Bheemalingappa/DataVision" color="#0044cc">GitHub Repository</a></para>', style_item_title)
    p2 = Table([[p2_left, p2_right]], colWidths=[390, 162])
    p2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(p2)
    story.append(Paragraph("FastAPI, PostgreSQL, React, TypeScript, Pandas, Scikit-learn", style_item_sub))
    story.append(Paragraph("&bull; Architected a full-stack analytics platform automating a 5-stage ETL and analytics workflow — data collection, data cleansing, data integration, analysis, visualization, and AI-generated insights — across 13 data sources, with a PostgreSQL backend.", style_bullet))
    story.append(Paragraph("&bull; Automated an ETL pipeline and data flows for outlier detection and missing-value imputation to improve data quality and data integrity, paired with a dashboarding frontend for business reporting.", style_bullet))
    story.append(Paragraph("&bull; Deployed role-based dashboards with process automation for report scheduling, reducing weekly reporting turnaround time for analysts.", style_bullet))
    story.append(Spacer(1, 2))

    # Twitter
    p3_left = Paragraph("<b>Twitter Sentiment Analysis Web Application</b>", style_item_title)
    story.append(p3_left)
    story.append(Paragraph("Python, NLP, Streamlit, Twitter API", style_item_sub))
    story.append(Paragraph("&bull; Created a real-time sentiment-analysis dashboard on live social data, visualizing trends for faster business response.", style_bullet))
    story.append(Spacer(1, 2))

    # 5. CERTIFICATIONS
    add_section_header("CERTIFICATIONS")
    story.append(Paragraph("&bull; Cognifyz Technologies: Data Analytics Internship", style_body))
    story.append(Paragraph("&bull; Simplilearn: Data Science &amp; Analytics Program", style_body))
    story.append(Paragraph('&bull; View all certificates: <a href="https://drive.google.com" color="#0044cc">Google Drive Folder</a>', style_body))
    story.append(Spacer(1, 2))

    # 6. SKILLS
    add_section_header("SKILLS")
    skills_data = [
        "&bull; <b>Business Intelligence &amp; Visualization:</b> Power BI, DAX, Power Query, Tableau, Advanced Excel, Data Visualization, KPI Dashboards, Dashboard Development",
        "&bull; <b>Data Engineering:</b> SQL, SQL Queries, ETL, ETL Pipelines, Data Pipelines, Data Transformation, Data Preparation, Data Integration, Data Flows, Process Automation",
        "&bull; <b>Data &amp; Programming:</b> Python, Pandas, NumPy",
        "&bull; <b>Analytics:</b> KPI Analysis, Predictive Analytics, Forecasting, Machine Learning, Root Cause Analysis, Business Analytics, Reporting &amp; Analytics",
        "&bull; <b>Data Architecture:</b> Data Modeling, Data Quality, Data Integrity, Data Governance",
        "&bull; <b>Databases &amp; Tools:</b> MySQL, PostgreSQL, Git, GitHub, Jupyter Notebook, VS Code",
        "&bull; <b>Soft Skills:</b> Stakeholder Reporting, Cross-Functional Collaboration, Stakeholder-Focused Data Storytelling",
        "&bull; <b>Languages:</b> Fluent in English; Native proficiency in Kannada and Telugu"
    ]
    for sk in skills_data:
        story.append(Paragraph(sk, style_body))
        story.append(Spacer(1, 0.5))

    # 7. EDUCATION
    add_section_header("EDUCATION")
    e_left = Paragraph("<b>AMC Engineering College</b>", style_item_title)
    e_right = Paragraph("<para align=right>Bengaluru, India</para>", style_body)
    e1 = Table([[e_left, e_right]], colWidths=[410, 142])
    e1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(e1)
    
    e2_left = Paragraph("Bachelor of Engineering (B.E.), Specialization: Computer Science and Data Science", style_body)
    e2_right = Paragraph("<para align=right>Graduated 2026</para>", style_body)
    e2 = Table([[e2_left, e2_right]], colWidths=[410, 142])
    e2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(e2)
    story.append(Paragraph("Cumulative CGPA: 7.23 / 10", style_body))

    doc.build(story)

if __name__ == "__main__":
    out_pdf = "public/Bheema_Resume.pdf"
    build_pdf(out_pdf)
    
    import shutil
    shutil.copyfile("public/Bheema_Resume.pdf", "public/resume.pdf")

    reader = pypdf.PdfReader("public/Bheema_Resume.pdf")
    print(f"PDF generated successfully! Page count: {len(reader.pages)}")
