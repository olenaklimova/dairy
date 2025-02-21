const icon = ''
const title = 'Olena\'s Data Diary'
const subTitle = 'What gets measured gets improved'

const blockOpacity = 0.88 // From 0 to 1
const sliderTime = 5 // Time of slider interval in seconds
const arts = [
    'graphblue.jpg',
    'graphcomp.jpg',
    'graphdash.jpg',
] // Arts for slider

const sortedPostsCount = 4 // Max number of posts in main page
const postsCount = 3 // Number of posts in blog page
const categories = [
    'power bi',
    'excel',
    'google certificate capstone project',
    'tableau',
    'my certificates',
    'other projects',
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
        name: 'google certificate capstone project',
        preview: 'googleanalyticsdash.jpg',
    },
] // 3 categories for main page

const quotesLimit = 3 // More than 4 looks terrible
const quotesList = [
    'The first dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The second dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The third dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The fourth dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The fourth dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
] // Quotes for quote block, limited by quotesLimit

const gallery = [
    'gal1.jpg',
    'gal2.jpg',
    'gal3.jpg',
    'gal4.jpg',
    'gal5.jpg',
    'gal6.jpg',
] // Pictures for gallery (I recommend 6)

// About:

const aboutMain = {
    title: 'about me',
    background: 'me.jpg',
    p: 'I am a data enthusiast with a passion for turning raw numbers into compelling stories. My journey through Italy, Spain, Belgium, and Ukraine has enriched my perspective and sharpened my adaptability. I thrive on automating complex reports and crafting interactive dashboards that make data speak clearly and persuasively. Every project I take on is a new opportunity to dive deep, simplify complexity, and drive smarter decisions through data.'
}

const aboutContent = [
    {
        p: 'The third dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.'
    },
    {
        p: 'The third dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.'
    },
    {
        p: 'The third dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.'
    }
]

const aboutImages = [
    'road.jpg',
    'sand.jpg', 
    'water.jpg'
]

// Contacts:

const contacts = [
    // Twitter:
    {
        background: 'mountains.jpg',
        link: 'https://twitter.com/',
        text: 'Klimov',
    }, 
    // Instagram:
    {
        background: 'sky.jpg',
        link: 'https://www.instagram.com/',
        text: '@bodya_klimov',
    }, 
    // Linkedin:
    {
        background: 'food.jpg',
        link: 'https://uk.linkedin.com/',
        text: 'Bogdan Klimov',
    },
    // Facebook:
    {
        background: 'home.jpg',
        link: 'https://www.facebook.com/',
        text: 'Bodya Klimov',
    }
]