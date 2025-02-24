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
        preview: 'mycertposts/sql1.jpg',
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
                h1: '1. Mapping the Ride: Density of Users Trips by State',
                p: 'A map is one of the most intuitive ways to display where bike trips happen. I created a color-coded map in Tableau that highlights the number of rides per state. You can hover over each state to see a tooltip with exact figures.',
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
        cover: 'googlecert/bike1.jpg',
        preview: 'googlecert/bike3.jpg',
        data: '30.08.2023',
        category: 'google cert.',
        author: 'by Olena',
        description: 'In the final installment of my Capstone Project series, I am sharing the key insights and strategic recommendations derived from my analysis of bike trip data. These findings highlight distinct behavioral patterns between Customers and Subscribers, and they offer a roadmap for enhancing service and driving subscription growth.',
        content: [
            {
                image: 'googlecert/bike2.jpg',
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
    
    
]

posts = posts.map((post, index) => {return { ...post, id: index} })
