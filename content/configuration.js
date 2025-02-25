const icon = ''
const title = 'Data Diary of Olena'
const subTitle = 'What gets measured gets improved'

const blockOpacity = 0.88 // From 0 to 1
const sliderTime = 5 // Time of slider interval in seconds
const arts = [
    'font1.jpg',
    'font2.jpg',
    'font3.jpg',
] // Arts for slider

const sortedPostsCount = 4 // Max number of posts in main page
const postsCount = 3 // Number of posts in blog page
const categories = [
    'power bi',
    'excel',
    'google cert.',
    'tableau',
    'my certificates',
    'r programming',
] // Existed post categories

const mainCategories = [
    { 
        name: 'excel',
        preview: 'exceldash.jpg',
    },
    {
        name: 'power bi',
        preview: 'powerbidash.jpg',
    },
    {
        name: 'google cert.',
        preview: 'googleanalyticsdash.jpg',
    },
] // 3 categories for main page

const quotesLimit = 3 // More than 4 looks terrible
const quotesList = [
    'There were 5 exabytes of information created between the dawn of civilization through 2003, but that much information is now created every two days.',
    'No data is clean, but most is useful.',
    'Errors using inadequate data are much less than those using no data at all.',

] // Quotes for quote block, limited by quotesLimit

const gallery = [
    'collection1.jpg',
    'preparation2.jpg',
    'input3.jpg',
    'processing4.jpg',
    'interpretation5.jpg',
    'storage6.jpg',
] // Pictures for gallery (I recommend 6)

// About:

const aboutCircle = 'mecircle.jpg'

const aboutMain = {
    title: 'about me',
    background: 'me.jpg',
    p: 'I am a data enthusiast with a passion for turning raw numbers into compelling stories. My journey through Italy, Spain, Belgium, and Ukraine has enriched my perspective and sharpened my adaptability. I thrive on automating complex reports and crafting interactive dashboards that make data speak clearly and persuasively. Every project I take on is a new opportunity to dive deep, simplify complexity, and drive smarter decisions through data.'
}

const aboutContent = [
    {
        p: 'Driven by Data. Defined by Persistence.'
    }
]

const aboutImages = [
    'passion.jpg',
    'curiosity.jpg', 
    'hardwork.jpg'
]

// Contacts:

const contacts = [
    // Email:
    {
        background: 'contact1.jpg',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=alenaklimovaaa@gmail.com',
        text: 'Email me',
    }, 
    // Tableau:
    {
        background: 'contact2.jpg',
        link: 'https://public.tableau.com/app/profile/olena.klimova/vizzes',
        text: 'See my vizes',
    }, 
    // Linkedin:
    {
        background: 'contact3.jpg',
        link: 'https://www.linkedin.com/in/klimovaolena/',
        text: 'Connect with me',
    },
    // Facebook:
    {
        background: 'contact4.jpg',
        link: 'https://www.facebook.com/profile.php?id=100022737564198',
        text: 'More of me',
    }
]