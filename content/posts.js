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
                p: 'I certainly was curious about where the Data Analyst job market was headed in 2024, so I dug into a Kaggle dataset to find out.'
            },
            {
                h1: 'Power Query',
                p: 'First, I imported and unified the data in Power Query, then created custom columns to classify roles like Data Analyst, Senior Data Analyst, Financial Data Analyst, and Healthcare Data Analyst. With everything cleaned up, I leveraged DAX to calculate estimated max and min salaries—crucial for comparing pay across these roles.',
                image:'powerbiposts/data1.jpg',
            },
            {
                p: 'I dedicated a section of the data preparation process to creating custom columns that capture how often each skill—SQL, BI, Excel, Tableau, Python etc.—appears in the job postings. By parsing the job descriptions and coding presence/absence for each technology, I could quantify demand and quickly see which skills dominate the market. This approach also enabled dynamic filtering, letting me compare skill usage by role, location, and salary range, and ultimately reveal the core competencies that employers value most in a Data Analyst these days.',
                image: 'powerbiposts/data2.jpg',
            },
            ,
            {
                h2: 'Visualization',
                p: 'I visualized the distribution of key skills (SQL, Python, Tableau etc.) with a Treemap, mapped the number of open positions by state (CA, TX, NY) in a Line Chart, and used Clustered Bar Chart to show salary differences among Financial Data Analyst, Senior Data Analyst, and Business Analyst positions. Finally, I added interactive slicers (year, state, job title) so both recruiters and curious job seekers can filter the data in real time, making it easy to spot the most in-demand skills, salary variations, and overall trends in the Data Analyst market.',
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
        title: 'My SQL Achievements',
        cover: 'mycertposts/sql0.jpg',
        preview: 'mycertposts/sqlcertificate.jpg',
        data: '13.10.2023',
        category: 'my certificates',
        author: 'Udemy Academy',
        description: 'I completed “The Complete Oracle SQL Bootcamp” from Oracle Master Training. ',
        content: [
            {
                p: 'I completed “The Complete Oracle SQL Bootcamp” from Oracle Master Training—a comprehensive course covering everything from basic queries to advanced techniques that sharpen my SQL skill set.',
                 image: 'mycertposts/sqlcertificate.jpg'
            },
            {
                p: 'To keep pushing my limits, I regularly tackle SQL challenges on LeetCode, which hones my problem-solving abilities and ensures I stay at the forefront of industry standards. This blend of structured coursework and hands-on practice underscores my commitment to continuous learning and excellence in data management.',
                image: 'mycertposts/sql1.jpg',
            },
        ]
    },
    {
        title: 'Data Cleaning & Organization in R. Behind the Scenes of My Capstone Project',
        cover: 'googlecert/google1.jpg',
        preview: 'googlecert/google1.jpg',
        data: '22.06.2023',
        category: 'google cert.',
        author: 'Olena',
        description: 'Welcome to the first installment of my Capstone Project series! In this post, I am diving into how I cleaned and organized the raw data for my project using R. This interactive walkthrough will give you a glimpse into turning messy datasets into a structured foundation for meaningful insights.',
        content: [
            {
                p: 'Welcome to the first installment of my Capstone Project series! In this post, I am diving into how I cleaned and organized the raw data for my project using R. This interactive walkthrough will give you a glimpse into turning messy datasets into a structured foundation for meaningful insights.'
            },
            {
                h1: '1. Setting the Stage: Reading Data & Loading Libraries',
                p: 'I started by reading in four quarterly datasets (Q1 to Q4 of 2019) using read.csv2(). To manage the process, I loaded essential libraries like dplyr, tidyverse, and lubridate. This initial step ensured that the data was ready to be transformed and analyzed.',
                image: 'googlecert/google1.jpg'
            },
            {
                h1: '2. Getting a Sneak Peek: Data Exploration',
                p: 'Before diving into heavy transformations, I took a closer look at each dataset. Viewing the first 100 rows of each quarter helped identify inconsistencies (like column name mismatches) and provided a solid understanding of the structure.',
                image: 'googlecert/google2.jpg'
            },
            {
                h1: '3. Bringing It All Together: Merging & Data Type Adjustments',
                p: 'Next up, I combined the quarterly tables into a single dataset. This step was crucial for a comprehensive view of the data across the entire year. Alongside, I transformed key variables—such as converting date-time strings into proper date objects and adjusting the trip duration.',
                image: 'googlecert/google3.jpg'
            },
            {
                h1: '4. Adding a Dash of Time & Location: Enhancing the Dataset',
                p: 'To enrich the dataset, I extracted time components like start and stop times, as well as the month and day of the week from the timestamps. I also used the ggmap package to geocode station addresses—transforming names into latitude and longitude coordinates. This allowed for exciting spatial visualizations later on.',
                image: 'googlecert/google4.jpg'
            },
            {
                h1: '5. Final Touches: Merging & Cleaning Up',
                p: 'The final steps involved merging the geocoded data back into the main dataset and ensuring data consistency by removing duplicates and handling missing values. These actions set the stage for creating compelling visualizations in the next post.',
                image: 'googlecert/google5.jpg'
            },
            {
                image: 'googlecert/google6.jpg',
            },
            {
                h1: 'Wrapping Up',
                p: 'Transforming raw data into a clean, organized format is both an art and a science. Through systematic exploration, transformation, and merging, I set the stage for insightful visualizations and compelling narratives in the upcoming posts. Stay tuned for the next installment where I delve into creating interactive visuals from this refined dataset!'
            },
        ]
    },
    {
        title: 'Bringing Bike Trip Data to Life with Tableau',
        cover: 'googlecert/googleanalyticsdash.jpg',
        preview: 'googlecert/googleanalyticsdash.jpg',
        data: '25.07.2023',
        category: 'google cert.',
        author: 'by Olena',
        description: 'Welcome to the second installment of my Capstone Project series! After meticulously cleaning and organizing the data in R, I used Tableau to transform rows of numbers into interactive, dynamic visualizations. In this post, I will walk through the key charts and dashboards I built—without delving too deeply into the findings (I will share my observations in the next post).',
        content: [
            {
                p: 'Welcome to the second installment of my Capstone Project series!'
            },
            {
                h1: '1. Mapping the Ride: Density of Users Trips by State',
                p: 'After meticulously cleaning and organizing the data in R, I used Tableau to transform rows of numbers into interactive, dynamic visualizations. In this post, I will walk through the key charts and dashboards I built—without delving too deeply into the findings (I will share my observations in the next post). A map is one of the most intuitive ways to display where bike trips happen. I created a color-coded map in Tableau that highlights the number of rides per state. You can hover over each state to see a tooltip with exact figures.',
                image: 'googlecert/map1.jpg'
            },
            {
                h1: '2. The Busiest Spots: Top 10 Departure Stations',
                p: 'Next, I designed a bar chart to pinpoint the most frequent departure stations. By ranking these stations in descending order, the chart quickly reveals which locations see the highest volume of bike rentals.',
                image: 'googlecert/map2.jpg',
            },
            {
                h1: '3. Daily & Hourly Patterns: Amount of Trips Over Time',
                p: 'To explore usage patterns throughout the week, I plotted a line or area chart showing total trips per day. A second chart breaks down hourly peaks, helping visualize how trip counts fluctuate from dawn to late evening.',
                image: 'googlecert/map3.jpg',
            },
            {
                h1: '4. Comparing User Types: Average Trip Duration',
                p: 'For a quick look at how different user groups behave, I created a column chart comparing average trip durations between various user categories (e.g., Customers vs. Subscribers). This chart visually contrasts how long each group typically rides.',
                image: 'googlecert/map4.jpg',
            },
            {
                h1: '5. Bringing It All Together: Combined Dashboard',
                p: 'Finally, I compiled these visuals into a single interactive dashboard. With Tableau filtering and highlighting capabilities, it is easy to slice and dice the data on the fly. This integrated view is especially helpful for noticing connections across different charts.',
                image: 'googlecert/map2.jpg',
            },
        ]
    },
    {
        title: 'Key Insights & Recommendations from the Cyclistic Bike Study',
        cover: 'googlecert/bike2.jpg',
        preview: 'googlecert/bike1.jpg',
        data: '30.08.2023',
        category: 'google cert.',
        author: 'by Olena',
        description: 'In the final installment of my Capstone Project series, I am sharing the key insights and strategic recommendations derived from my analysis of bike trip data. These findings highlight distinct behavioral patterns between Customers and Subscribers, and they offer a roadmap for enhancing service and driving subscription growth.',
        content: [
            {
                p: 'In the final installment of my Capstone Project series, I am sharing the key insights and strategic recommendations derived from my analysis of bike trip data. These findings highlight distinct behavioral patterns between Customers and Subscribers, and they offer a roadmap for enhancing service and driving subscription growth.'
            },
            {
                image: 'googlecert/bike3.jpg',
                h1: 'Key Insights',
                p: '- In New Hampshire, customer trips outpaced subscriber trips, potentially due to the nearby White Mountain National Forest attracting vacationers who rent bikes. However, in other zones, customer trips were fewer.'
            },
            {
                p: '- Different preferences are observed in departure stations between customers and subscribers, suggesting unique usage patterns and needs for these two groups.'
            },
            {
                p: '- Peak trip months: June-Sept. Subscriber preference: weekdays. Customers favor weekends. More rides occur at the month start. Two peak hours: 8 AM and a higher peak at 5 PM.'
            }, 
            {
                p: '- Average duration of trip is higher for customers and lower for subscribers. February is the month with the highest duration of trips throughout the year.'
            },
            {
                image: 'googlecert/bike4.jpg',
                h1: 'Strategic Recommendations',
                p: 'Develop enticing annual subscription packages: Customers making occasional trips, for example, to mountainous regions could be targeted with special vacation subscription packages. These packages could provide benefits or discounts specifically tailored to their trip timings or locations.'
            },
            {
                p: 'Enhance services at customer-frequented stations: Run promotions or conduct surveys at stations with high customer traffic. The feedback could reveal user preferences and identify opportunities for making stations more appealing to potential subscribers.'
            }, 
            {
                p: 'Custom Subscription Plans: Offer tailored subscription plans to those customers who exhibit potential subscriber traits, such as high average trip times or preferences for weekday rides. '
            }, 
            {
                p: 'Leverage peak times and days: During peak hours and at the beginning of the month, offer incentives like discounts or bonuses to encourage subscriptions. '
            }, 
            {
                p: 'Educational Campaigns: Implement campaigns to educate occasional users about the cost benefits of a subscription, especially if they use the service regularly during peak months (June - September), or during peak hours (8 AM and 5 PM).'
            }, 
           ,
        ]
    },
    {
        title: 'The Dynamic Scorecard: Turning Survey Data into Instant Insights',
        cover: 'excelposts/card4.jpg',
        preview: 'excelposts/card4.jpg',
        data: '27.10.2024',
        category: 'excel',
        author: 'by Olena',
        description: 'Picture yourself at Serenity Inn, a fictitious hotel I designed to showcase a powerful way of measuring guest satisfaction.',
        content: [
            {
                h1: 'From Raw Data to Color-Coded Insights',
                p: 'Picture yourself at Serenity Inn, a fictitious hotel I designed to showcase a powerful way of measuring guest satisfaction. Using Excel as my creative playground, I combined advanced formulas with VBA macros to automate every step of the process. ',
                image: 'excelposts/card2.jpg'
            },
            {
                image: 'excelposts/card3.jpg',
            },
            {
                p: 'The moment I enter a new survey rating, the Score Card recalculates and updates the category tiles, assigning each a color based on performance. A single click of my custom “Update” button instantly shows if Reception is FAIR or INCREDIBLY GOOD, and whether the hotel’s overall score falls into EXCEEDINGLY POOR or REALLY GOOD territory.',
                image: 'excelposts/card1.jpg',
            },
            {
                h1: 'Why It Matters',
                image: 'excelposts/card4.jpg',
                p: 'Although Serenity Inn is fictional, the impact of this Score Card is anything but imaginary. Hotel managers—or anyone tracking customer feedback—can make data-driven decisions in real time without wrestling with spreadsheets. By keeping a constant pulse on guest sentiment, staff can spot trouble areas fast, celebrate what’s going well, and ultimately create a better experience for everyone who walks through the door.',
            },

            
        ]
    },
    {
        title: 'Exploring Global Injury Fatalities by Gender and Income',
        cover: 'rposts/rplot0.jpeg',
        preview: 'rposts/rplot0.jpeg',
        data: '28.01.2025',
        category: 'r programming',
        author: 'by Olena',
        description: 'I investigated global injury-related fatality rates (ages 15-59) to understand how these rates vary by gender and income level. Here is a brief walkthrough of my process and what I discovered.',
        content: [
            {
                h1: 'Data Wrangling',
                p: 'I investigated global injury-related fatality rates (ages 15–59) to understand how these rates vary by gender and income level. Here is a brief walkthrough of my process and what I discovered.I started by loading the necessary libraries and importing the dataset:',
                image: 'rposts/rplot1.jpg'
            },
            {
                p: 'I then filtered the data to focus on injury-related fatality rates for both genders using specific indicator codes. This step ensured that I was working with the correct subset of data:',
                image: 'rposts/rplot2.jpg',
            },
            {
                p: 'After that, I selected the relevant columns and extracted the gender information from the indicator names using str_extract(). This preparation was crucial for clear comparisons in the later visualization:',
                image: 'rposts/rplot3.jpg',
            },
            {
                h1: 'Visualization',
                p: 'Next, I transformed Country.Name into a factor with a custom order to ensure that the income categories were displayed logically. This helped maintain consistency across the facets:',
                image: 'rposts/rplot4.jpg',
            },
            {
                p: 'I then used ggplot2 to create a faceted bar chart that compares male vs. female fatality rates across income groups:',
                image: 'rposts/rplot5.jpg',
            },
            {
                p: 'This approach not only highlights gender differences but also visually segregates the data by income category, making it easier to spot trends and deviations at a glance.',
            },
            {
                h1: 'Key Findings',
                image: 'rposts/rplot0.jpeg',
            },
            {
                p: '1. Income-Level Comparison: Contrary to a straightforward “lower-income → higher fatalities” pattern, the data reveals a more nuanced reality. Some higher-income groups show comparable or even higher proportions of fatalities.',
            },
            {
                p: '2. Gender Disparity: Males generally register higher fatality percentages than females across various income brackets.',
            },
            {
                p: '3. Complex Factors: The unexpected patterns hint at underlying factors—such as healthcare systems, lifestyle differences, or reporting variations—that may influence these rates, suggesting areas for further exploration.',
            },

            
        ]
    },
    {
        title: 'Startup Insights: Data-Driven Quest for the Perfect Gelato Spot',
        cover: 'excelposts/gelato0.jpg',
        preview: 'excelposts/gelato0.jpg',
        data: '12.06.2024',
        category: 'excel',
        author: 'by Olena',
        description: 'I decided to tackle the question, “Where in Emilia-Romagna should I open a new gelateria?” by diving deep into official tourist and demographic data—because if there is one thing I love, it is turning raw stats into actionable insights. ',
        content: [
            {
                p: 'I decided to tackle the question, “Where in Emilia-Romagna should I open a new gelateria?” by diving deep into official tourist and demographic data—because if there is one thing I love, it is turning raw stats into actionable insights. I pulled the arrivals and presenze data (which hotels provide to show how many tourists are in the city) directly from the regional statistics website. Then I enriched this dataset with the population of each city, the number of gelaterias (courtesy of TripAdvisor), plus a few custom metrics like the average length of stay, tourists-per-gelateria ratio, market saturation index, and a target population (ages 9 to 30) for a loyalty program concept.',
                image: 'excelposts/gelato1.jpg'
            },
            {
                p: 'Once I had all that data I created pivot tables to summarize these metrics by city. ',
                image: 'excelposts/gelato2.jpg',
            },
            {
                p: 'I wanted to rank each city based on specific criteria — e.g.high tourist arrivals were a plus, whereas a high number of existing gelaterias was a minus. Using Excel ranking functions, I assigned the top-scoring city a “1,” all the way down to the least ideal city, which might get a “22.”',
                image: 'excelposts/gelato3.jpg',
            },
            {
                p: 'To make it really pop, I designed bar charts comparing the total scores for each city. I even split the analysis into summer-only months because, let’s face it, a gelateria thrives when the sun’s out. It was fascinating to see how certain coastal cities shot up in rank during the warmer months. Rimini, Cesenatico, and Riccione emerged as real front-runners, confirming my hunch that bustling beach towns might be prime gelato territory.',
                image: 'excelposts/gelato4.jpg',
            },
            {
                p: 'In the end, I had a complete story: a step-by-step funnel that began with raw data and ended with an at-a-glance ranking of the best gelateria spots. The entire process combined advanced Excel data wrangling (formulas, pivot tables, calculated fields) with creative problem-solving (deciding how to weight each metric). It was the perfect blend of number-crunching and strategic thinking—and it showed me just how powerful a well-structured spreadsheet can be in making real-world business decisions.',
            },


            
        ]
    },
    {
        title: 'Uncovering Workforce Insights with a Power BI HR Analytics Dashboard',
        cover: 'powerbiposts/hr5.jpg',
        preview: 'powerbiposts/hr5.jpg',
        data: '22.02.2025',
        category: 'power bi',
        author: 'Olena',
        description: 'I recently embarked on an exciting journey to transform a raw HR dataset into an insightful, interactive dashboard using Power BI. The project was driven by a desire to understand what truly happens behind the scenes of a company’s workforce—from tracking employee tenure and age demographics to quantifying performance and attrition in ways that drive strategic decisions.',
        content: [
            {
                p: 'I recently embarked on an exciting journey to transform a raw HR dataset into an insightful, interactive dashboard using Power BI. The project was driven by a desire to understand what truly happens behind the scenes of a company’s workforce—from tracking employee tenure and age demographics to quantifying performance and attrition in ways that drive strategic decisions.'
            },
            {
                h1: 'Data Preparation and Integration',
                p: 'The process began with getting the data in shape. My dataset was rich with employee details such as demographics, job roles, and performance descriptions, but it needed some refining before analysis. I merged two critical tables: one containing core employee information and another holding performance descriptions. This integration was crucial because performance data, originally recorded in words, had to be converted into measurable scores for accurate analysis. To further refine the dataset, I created custom columns that added valuable dimensions. For example, I calculated “Years in Company” by comparing each employee’s start date with the current date, which made it easy to segment the workforce by tenure. Additionally, I introduced age group categories to break down the employee base into defined ranges, offering insights into the generational diversity within the organization.',
                image: 'powerbiposts/hr1.jpg'
            },
            {
                h1: 'Building DAX Measures',
                p: 'Next, I leveraged Power BI’s DAX to develop key measures that brought the dashboard to life. One measure dynamically counted active and unactive employees providing a real-time snapshot of the workforce. Another calculated the attrition rate by dividing the number of inactive employees by the total employee count, revealing turnover trends over time. Converting textual performance ratings into numeric scores using DAX allowed for a more nuanced analysis, enabling the creation of interactive visuals like gauges and trend lines.',
                image: 'powerbiposts/hr2.jpg'
            },
            {
                image: 'powerbiposts/hr3.jpg'
            },
            {
                image: 'powerbiposts/hr4.jpg'
            },
            {
                h1: 'Visual Storytelling Through Dashboard Design',
                p: 'On this page, I wanted to create a clear snapshot of the entire organization at a glance. You’ll notice that we start with three crucial figures—total employee records, active employees, and inactive employees—culminating in an overall attrition rate of 13.60%. A stacked bar chart shows how these counts have shifted year over year, differentiating between active and terminated staff, which immediately reveals any trends in workforce stability. On the right, a bar chart spotlights the number of employees by department, making it easy to see that Production currently has the largest headcount. Just below, there’s a detailed breakdown of job roles within each department, providing a more granular look at where employees are concentrated. Altogether, this page offers a quick yet comprehensive view of how many people the company employs, how that number has changed over time, and where those employees are distributed.',
                image: 'powerbiposts/hr5.jpg'
            },
            {
                p: 'On this page, I focused on bringing the “human” element of the data to life by highlighting the workforce’s demographic makeup. The top-left bar chart shows how active employees are distributed across various age groups, revealing whether the organization leans younger or older in its staffing. To the right, a donut chart breaks down marital status, offering a glimpse into the personal backgrounds of employees—whether they’re predominantly married, single, divorced, or widowed. Below, you’ll find a bar chart that further refines the age data by splitting each group into male and female categories, helping uncover any gender-based trends within specific age brackets. Finally, the bottom-right chart explores race alongside pay zone, providing a dual perspective on both cultural diversity and compensation patterns. Taken together, these visuals tell a story of who makes up the workforce, offering insights that can guide more inclusive and equitable HR policies.',
                image: 'powerbiposts/hr6.jpg'
            },
            {
                p: 'On this page, you can see a list of job titles on the left and several gauges on the right that quantify key metrics. Currently, the page filter is set to “Data Analyst,” so all performance and satisfaction data are specifically reflecting that role. The Performance gauge (2.98) translates qualitative ratings (Exceeds, Fully Meets, Needs Improvement, PIP) into a numeric scale, offering a quick view of how Data Analysts are performing. An Overall Rating of 5.00 stands out, with a goal of reaching 4 plus an additional 25%. Meanwhile, the Work Life Balance (3.09) and Satisfaction (3.15) gauges capture how Data Analysts feel about their day-to-day experience. This concise page highlights both performance outcomes and the human aspects of work.',
                image: 'powerbiposts/hr7.jpg'
            },
            {
                p: 'This page offers a multifaceted view of attrition across the organization. The bar chart on the left highlights which department types—such as Software Engineering or Production—have the highest turnover. On the right, a donut chart shows how attrition splits between full-time and part-time employees. Below, the line chart tracks the overall attrition trend over several years, indicating whether turnover is rising or falling. Finally, the bar chart on the bottom right examines attrition by tenure, revealing whether employees with fewer or more years at the company are more likely to leave. By combining these insights, this page pinpoints where and when turnover issues arise, helping guide effective retention strategies.',
                image: 'powerbiposts/hr8.jpg'
            },
            {
                h1: 'Conclusion',
                p: 'This Power BI HR Analytics Dashboard project was a blend of technical rigor and creative storytelling. By converting qualitative data into quantitative measures and carefully designing engaging visuals, I was able to uncover patterns that might otherwise have remained hidden in a spreadsheet.'
            },
        ]
    },
    {
        title: 'Excel-Driven Hiring: From Data Disorder to Dynamic Insights',
        cover: 'excelposts/talent2.jpg',
        preview: 'excelposts/talent2.jpg',
        data: '14.08.2023',
        category: 'excel',
        author: 'by Olena',
        description: 'Imagine a tool that transforms disjointed, messy spreadsheets into a coherent, actionable story of your recruitment process.',
        content: [
            {
                p: 'Imagine a tool that transforms disjointed, messy spreadsheets into a coherent, actionable story of your recruitment process. I built a four-page Excel dashboard that redefines hiring analytics. Using pivot tables and smart formulas, this dashboard extracts meaningful insights from raw data, mapping out the entire recruitment pipeline with precision and clarity. It is a game-changing solution that turns data disorder into dynamic, decision-driving insights for a modern Talent Acquisition Manager.',
            },
            {
                h1: 'First Page: The Pipeline at a Glance',
                p: 'On the first page, the Talent Acquisition Manager gets an immediate overview of the entire recruitment pipeline—total candidates, their status (in process, assigned, hired), and which channel they came from. Since the company actively sources talent through university visits abroad, career events, agencies, and direct applications, this page visually groups each acquisition path. By using a clear, bubble-style layout and highlighting totals, the dashboard makes it easy to spot where the bulk of candidates are coming from and how far along they are in the hiring journey. This at-a-glance format saves time and helps prioritize recruiting efforts, ensuring no channel is overlooked.',
                image: 'excelposts/talent1.jpg',
            },
            {
                h1: 'Second Page: Dubai Recruiting in Detail',
                p: 'On this page, the focus narrows to candidates sourced from Dubai-based presentations. The first bar chart compares how many people were hired by position in the current year versus the previous year—shedding light on the roles in highest demand (e.g., housekeeping, restaurant, galley, and bar). Next, two donut charts reveal the percentage of applicants who progressed to interviews, and of those interviewed, how many were ultimately approved. This provides a quick snapshot of conversion rates at each stage of the recruitment funnel. Finally, the bar chart on the right breaks down candidates by nationality, offering an at-a-glance view of the diverse talent pool. While the data here might be limited, it still highlights the reach of these recruiting efforts and underscores potential areas for future focus.',
                image: 'excelposts/talent2.jpg',
            },
            {
                h1: 'Third Page: Role-Specific Hiring Progress',
                p: 'On this page, the dashboard spotlights critical hospitality roles and tracks exactly how many hires have been made versus how many are still needed. Each donut chart displays the status of a specific role (e.g., Waiter, Bartender, Butler), visually illustrating progress toward filling the required positions—such as 100 waiters hired out of 125 needed. A larger donut chart on the right summarizes the overall total, giving a quick reference point for the Talent Acquisition Manager to see where they stand across all high-demand roles. This clear, role-by-role breakdown helps prioritize recruiting efforts and ensures the team can quickly address any gaps in staffing.',
                image: 'excelposts/talent3.jpg',
            },
            {
                h1: 'Fourth Page: New Program Tracking',
                p: 'This final page highlights a recently launched learning initiative designed to develop essential skills within the hospitality team. The pie chart on the left shows the distribution of participants across various roles—like housekeeping, table attendants, galley, and chef—while the bar chart on the right indicates how many learners are based in each city (e.g., Berlin, Barcelona, Lisbon). With a total learner count clearly displayed, this page offers a snapshot of the program’s early adoption, helping leadership understand its reach and effectiveness at a glance.',
                image: 'excelposts/talent4.jpg',
            },
            {
                h1: 'Conclusion',
                p: 'Through a carefully designed four-page Excel dashboard, the Talent Acquisition Manager can now seamlessly track candidates from multiple sources, monitor role-specific hiring progress, analyze the effectiveness of new recruitment programs, and make data-driven decisions. This project highlights how combining technical expertise with thoughtful problem-solving can transform scattered data into clear, actionable insights—ultimately strengthening the talent acquisition process.',
            },


            
        ]
    },
    {
        title: 'How Far Can a Ukrainian’s Wallet Stretch?',
        cover: 'tableau/ua.jpg',
        preview: 'tableau/ua.jpg',
        data: '28.06.2023',
        category: 'tableau',
        author: 'by Olena',
        description: 'I decided to explored data from the Government, State Statistics Service of Ukraine to see how much of certain everyday goods a Ukrainian on the minimum wage could afford over time.',
        content: [
            {
                h1: 'Background & Data',
                p: 'I decided to explored data from the Government, State Statistics Service of Ukraine to see how much of certain everyday goods a Ukrainian on the minimum wage could afford over time. The dataset included details like commodity names, prices, dates, regions, and the annual minimum wage. By combining these, I calculated the “purchasing power” for each product: essentially, how many kilograms (or liters, etc.) a person could buy if they spent their entire monthly minimum wage on that single item.',
            },
            {
                h1: 'Visualization in Tableau',
                p: 'To make the data easier to digest, I created an interactive dashboard in Tableau that unfolds the story of affordability over the years. Imagine a series of elegant line charts that trace the purchasing power of various products, where each line does not just represent numbers but comes to life with distinct product icons placed right on the graphs. These icons serve as immediate visual cues, guiding you effortlessly through the trends. As you move your cursor along the lines, detailed tooltips appear, offering insights such as the specific product, the year in question, the unit of measurement, and the precise quantity that could be bought with the minimum wage. This design not only makes the information more engaging but also brings clarity to how economic shifts affect everyday necessities.',
                image: 'tableau/ua1.jpg',
            },
            {
                h1: 'Explore the Dashboard',
                p: 'For a closer look, visit the interactive dashboard here https://public.tableau.com/app/profile/olena.klimova/viz/PurchasingPowerinUkraine2018-2023/Dashboard1',
                image: 'tableau/ua.jpg',
            },
            {
                h1: 'How to Read the Dashboard',
                p: 'The dashboard invites you to identify products by their icons and follow their journeys over time. By observing the changes along the horizontal timeline and noting the detailed figures presented in the tooltips, you can appreciate the shifts in affordability that reflect broader economic trends.',
                image: 'tableau/ua2.jpg',
            },
            {
                h1: 'Conclusion',
                p: 'This dashboard is a snapshot of how minimum-wage earners’ purchasing power shifts over time. By visualizing the data in an interactive and visually appealing way, we can clearly see which essential items become more accessible and which remain out of reach. Feel free to explore the interactive tooltips in the Tableau dashboard for more details on each product’s trend.',
            },
    
        ]
    },
    {
        title: 'My Microsoft Power BI (PL-300) Certification',
        cover: 'mycertposts/powerbi.jpg',
        preview: 'mycertposts/powerbi.jpg',
        data: '13.02.2025',
        category: 'my certificates',
        author: 'Udemy Academy',
        description: 'I’m thrilled to share that I’ve recently earned the Microsoft Power BI (PL-300) certification.',
        content: [
            {
                p: 'I’m thrilled to share that I’ve recently earned the Microsoft Power BI (PL-300) certification, using the free Power BI Desktop as my primary tool. During my preparation, I dove deep into Power Query to transform raw data, explored DAX to create meaningful measures and optimize data models, and mastered the M language for more complex transformations behind the scenes. This journey allowed me to see firsthand how Power BI can turn fragmented datasets into coherent, actionable insights.',
                 image: 'mycertposts/powerbi.jpg'
            },
            {
                p: 'Now that I’ve passed the exam, I’m continuing to practice by tackling real-world case studies. I’ve been setting up exercises that reflect real business scenarios to keep my skills sharp and uncover fresh insights. This hands-on approach helps me refine everything I’ve learned, ensuring I stay current with best practices in data analytics. If you’re looking to start or advance in this field, Power BI is an excellent place to begin. It’s free, widely adopted in the industry, and offers a user-friendly platform that makes data exploration both accessible and powerful.',
            },
        ]
    },
    {
        title: 'My Google Data Analytics Certificate',
        cover: 'mycertposts/googleanaliticscert.jpg',
        preview: 'mycertposts/googleanaliticscert.jpg',
        data: '13.02.2025',
        category: 'my certificates',
        author: 'Udemy Academy',
        description: 'I am proud to have earned the Google Data Analytics Professional Certificate. This accomplishment represents my deep commitment to mastering the art of data analytics through an eight-course specialization developed by Google.',
        content: [
            {
                p: 'I am proud to have earned the Google Data Analytics Professional Certificate. This accomplishment represents my deep commitment to mastering the art of data analytics through an eight-course specialization developed by Google. In this program, I developed practical skills in preparing, processing, analyzing, and sharing data for thoughtful action, while working with essential tools like spreadsheets, SQL, Tableau, and R.',
                 image: 'mycertposts/googleanaliticscert.jpg'
            },
            {
                p: 'This certificate is more than a milestone—it is a testament to my ongoing journey in transforming raw data into actionable insights. The coursework enriched my understanding of key analytical concepts and equipped me to tackle real-world challenges through projects that mimic actual business scenarios. I continue to build on these skills by working on projects that keep me at the forefront of the dynamic field of data analytics.',
            },
        ]
    }
    
    
]

posts = posts.map((post, index) => {return { ...post, id: index} })
