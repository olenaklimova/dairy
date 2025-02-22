let posts = [
    {
        title: 'Churn Analysis with Power BI: Key Takeaways',
        cover: 'powerbiposts/churn.jpg',
        preview: 'powerbiposts/churn.jpg',
        data: '03.01.2025',
        category: 'power bi',
        author: 'by Olena',
        description: 'Ever wonder why customers leave? In this telecom churn analysis, I used Power BI to transform raw data into a clear, interactive story.',
        content: [
            {
                h1: 'Ever wonder why customers leave?',
                p: 'In this telecom churn analysis, I used Power BI to transform raw data into a clear, interactive story.'
            },
            {
                h2: '1. Data Preparation & Modeling',
                p: 'First of all, I started by merging multiple data sources in Power Query and set up relationships to link churn categories and churn reasons. This provided a solid foundation for the entire analysis. ',
                image: 'powerbiposts/churn1.jpg',
            },
            {
                h3: '2. DAX-Driven Insights',
                p: 'Next, I built custom measures with CALCULATE and DIVIDE to dynamically track churn rate—currently at 26.5%. Diving deeper, I uncovered top churn drivers such as competitive edge (~33% of churners), unmet expectations (~20%), and unpleasing service experience (~20%).',
                image: 'powerbiposts/churn2.jpg',
            },
            {
                h4: '3. Visual Storytelling',
                p: 'Bar & Pie Charts revealed key churn reasons—poor support lead, speed, and data concerns lead the pack. Maps pinpointed geographic hotspots, confirming that urban areas with fierce competition have higher churn rates. And when it comes to Contract Types, short-term contracts drive significantly higher churn than annual plans—over 8x more churn.',
                image: 'powerbiposts/churn.jpg',
            },
            {
                h5: '4. Actionable Insights',
                p: 'Armed with these findings, I identified three key strategies:',
        
            },
            {
                p: '1) Address the ~10% citing cheaper competitor rates.',
        
            },
            {
                p: '2) Strengthen service bundles and loyalty programs, especially in competitive urban markets.',
        
            },
            {
                p: '3) Encourage longer contracts with attractive benefits to reduce the high churn from short-term plans.',
        
            },
            {
                p: 'This Power BI dashboard highlights the who, why, and where of customer attrition—vital for proactive retention strategies. By focusing on data-driven insights, companies can sharpen their offerings and keep customers from walking away.',
        
            },
            {
                p: 'The dataset for this analysis was sourced from Kaggle. All insights, transformations, and conclusions presented are my own.',
        
            }
        ]
    },
    {
        title: 'Data Analyst Job Market: Power BI Analysis',
        cover: 'powerbiposts/data.jpg',
        preview: 'powerbiposts/data.jpg',
        data: '21.12.2024',
        category: 'power bi',
        author: 'by Olena',
        description: 'I certainly was curious about where the Data Analyst job market was headed in 2024, so I dug into a Kaggle dataset to find out.',
        content: [
            {
                h1: 'Power Query',
                p: 'First, I imported and unified the data in Power Query, then created custom columns to classify roles like Data Analyst, Senior Data Analyst, Financial Data Analyst, and Healthcare Data Analyst. With everything cleaned up, I leveraged DAX to calculate estimated max and min salaries—crucial for comparing pay across these roles.',
                image:'powerbiposts/data1.jpg',
            },
            {
                p: 'I dedicated a section of the data preparation process to creating custom columns that capture how often each skill—SQL, BI, Excel, Tableau, Python—appears in the job postings. By parsing the job descriptions and coding presence/absence for each technology, I could quantify demand and quickly see which skills dominate the market. This approach also enabled dynamic filtering, letting me compare skill usage by role, location, and salary range, and ultimately reveal the core competencies that employers value most in a Data Analyst these days.',
                image: 'powerbiposts/data2.jpg',
            },
            ,
            {
                h2: 'Visualization',
                p: 'I visualized the distribution of key skills (SQL, Python, Tableau) with a Treemap, mapped the number of open positions by state (CA, TX, NY) in a Line Chart, and used Card and Bar Charts to show salary differences among Financial Data Analyst, Senior Data Analyst, and Business Analyst positions. Finally, I added interactive slicers (year, state, job title) so both recruiters and curious job seekers can filter the data in real time, making it easy to spot the most in-demand skills, salary variations, and overall trends in the Data Analyst market.',
                image: 'powerbiposts/data.jpg',
            },
            {
                h3: 'Key Findings',
                p: '1) Financial Data Analysts consistently showed higher salary ranges, reflecting a premium for specialized financial expertise.',
        
            },
            {
                p: '2) California, Texas, and New York emerged as major hotbeds for Data Analyst roles.',
        
            },
            {
                p: '3) PowerBI/Excel/SQL remain must-have core skills.',
        
            },
            {
                p: 'This dynamic dashboard shines a spotlight on the hottest areas in the Data Analyst market, guiding toward the most in-demand skills and the best regions for opportunities.',
        
            },
            {
                p: 'The dataset for this analysis was sourced from Kaggle. All insights, transformations, and conclusions presented are my own.',
        
            }
           
        ]
    },
    {
        title: 'Churn Analysis with Power BI: Key Takeaways',
        cover: 'site/cover.jpg',
        preview: 'site/preview.jpg',
        data: '03.01.2024',
        category: 'google cert.',
        author: 'by Bodya',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.',
        content: [
            {
                h1: 'How did it begin?',
                p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.'
            },
            {
                p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.',
                image: 'site/site.jpg',
            },
        ]
    },
    {
        title: 'Churn Analysis with Power BI: Key Takeaways',
        cover: 'site/cover.jpg',
        preview: 'site/preview.jpg',
        data: '03.01.2024',
        category: 'my certificates',
        author: 'by Bodya',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.',
        content: [
            {
                h1: 'How did it begin?',
                p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.'
            },
            {
                p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.',
                image: 'site/site.jpg',
            },
        ]
    },
    {
        title: 'Churn Analysis with Power BI: Key Takeaways',
        cover: 'site/cover.jpg',
        preview: 'site/preview.jpg',
        data: '03.01.2024',
        category: 'other projects',
        author: 'by Bodya',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.',
        content: [
            {
                h1: 'How did it begin?',
                p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.'
            },
            {
                p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.',
                image: 'site/site.jpg',
            },
        ]
    },
    {
        title: 'Churn Analysis with Power BI: Key Takeaways',
        cover: 'site/cover.jpg',
        preview: 'site/preview.jpg',
        data: '03.01.2024',
        category: 'tableau',
        author: 'by Bodya',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.',
        content: [
            {
                h1: 'How did it begin?',
                p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.'
            },
            {
                p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus sint voluptatum, ducimus mollitia iure obcaecati beatae minima sequi adipisci asperiores blanditiis commodi ut sunt. Delectus ullam hic ducimus maxime.',
                image: 'site/site.jpg',
            },
        ]
    },
    
]

posts = posts.map((post, index) => {return { ...post, id: index} })
