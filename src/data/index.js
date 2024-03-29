import { Github, Linkedin } from 'styled-icons/boxicons-logos';
import { Angellist } from 'styled-icons/fa-brands';
import { Mail } from 'styled-icons/feather';

/* Links */
const RESUME_URL = 'https://sj-portfolio.s3.us-west-1.amazonaws.com/scott-jason-resume-2023.pdf';
const CONTACT_URL =
  'mailto:scottleejason@gmail.com?subject=Hi Scott, reaching out from your portfolio site';

/* Colors */
export const ORANGE_PRIMARY = '#FD845C';
export const FROM_COLOR = ORANGE_PRIMARY;
export const TO_COLOR = 'white';
export const ALT_FROM_COLOR = 'rgb(143, 1, 1)';
export const ALT_TO_COLOR = 'rgb(195, 1, 3)';

/* Animation Timing */
export const OVERLAY_ANIMATION_TIME = 275;
export const SWITCH_ANIMATION_TIME = 275 + 330;

/* App Min & Max Width */
export const APP_MIN_WIDTH = '320px';
export const APP_MAX_WIDTH = '1440px';

/* Media Query Breakpoints */
export const BREAKPOINT_SIZES = {
  portrait: {
    small: '450px',
    medium: '800px',
    large: '1050px',
  },
  landscape: {
    small: '568px',
    medium: '667px',
  },
};

/**
 *
 * Navbar
 *
 */

export const NAVBAR_DATA = [
  { displayName: 'about', method: 'onClickTab', componentName: 'About' },
  { displayName: 'experience', method: 'onClickTab', componentName: 'Experience' },
  { displayName: 'projects', method: 'onClickTab', componentName: 'Projects' },
  { displayName: 'resume', method: 'openLink', url: RESUME_URL },
  { displayName: 'contact', method: 'openLink', url: CONTACT_URL },
];

/**
 *
 * Content
 *
 */

export const LANDING_DATA = {
  buttonData: {
    componentName: 'Button',
    displayName: 'DOWNLOAD RESUME',
    url: RESUME_URL,
  },
  headerData: {
    text: 'hello, my name is scott jason',
    subtext: {
      preHighlight: 'an experienced and product-oriented senior',
      highlighted: ' software ',
      postHighlight: 'engineer',
    },
    mobileText: 'hello,',
    mobileSubtext: 'my name is scott jason',
  },
};

/**
 *
 * Social
 *
 */

export const SOCIAL_DATA = [
  {
    type: 'social',
    component: Github,
    method: 'openLink',
    url: 'https://www.github.com/scottjason',
  },
  {
    type: 'social',
    component: Linkedin,
    method: 'openLink',
    url: 'https://www.linkedin.com/in/scottleejason',
  },
  { type: 'social', component: Angellist, method: 'openLink', url: 'https://angel.co/scottjason' },
  { type: 'social', component: Mail, method: 'openLink', url: CONTACT_URL },
];

/**
 *
 * Experience
 *
 */

export const EXPERIENCE_DATA = [
  {
    company: 'Gap Inc.',
    location: 'San Francisco, CA',
    website: 'https://www.gap.com',
    slogan: "For every generation there's a Gap",
    role: 'Senior Software Engineer',
    startedAt: 'February 2019',
    endedAt: 'October 2021',
    stack: 'React, Redux, Node, Testcafe, Playwright, Typescript, Jenkins, Azure',
    description: [
      'Helping the effort in Gap’s transition to micro frontends built with React, Redux and Node as well as a new, more polished UI/UX. I work on the architecture of both React and Node as well as build features and perform code reviews. I also build Jenkins pipelines and work with Azure.',
      'Write unit, integration and end to end tests that run in a Jenkins CI/CD pipeline and coordinate with multiple teams as well as help drive the effort in managing tasks and completing sprints in an Agile environment.',
    ],
    promotions: [
      {
        role: 'Staff Software Engineer, Technical Lead',
        startedAt: 'January 2022',
        endedAt: 'Present',
        description: [
          'Technical Lead of a team of ~20 Software Engineers working in squads on parallel efforts.',
          'I work with Engineering, Architecture, Infosec, Product and Design teams and help map the scope of projects and break down tasks to simplify large epics.',
          'I interview and mentor developers and help layout the foundation for large features. I also perform code reviews as well as handle and teach release management.',
          'I help lead the development for Gap’s new authentication-related features and work within the critical buy path.',
        ],
      },
      {
        role: 'Staff Software Engineer',
        startedAt: 'October 2021',
        endedAt: 'January 2022',
        description: [
          'Help lead large company initiatives with technical planning, sizing, architecture, scalable design patterns, testing and implementation.',
        ],
      },
    ],
  },
  {
    company: 'throtl - freelance',
    location: 'Remote',
    website: 'https://www.throtl.com',
    slogan: 'The one-stop-shop for auto enthusiasts',
    role: 'Senior Frontend Engineer',
    startedAt: 'November 2018',
    endedAt: 'February 2019',
    stack: 'Ruby on Rails, Angular',
    description: [
      "Collaborated with some very talented designers to revamp from the ground up the UI / UX / JS architecture. The first project's goal was to help give the brand a more polished presence to enable more user sign-ups.",
      'The company has since seen a 650% jump in customer growth.',
    ],
  },
  {
    company: 'Instacart',
    location: 'San Francisco, CA',
    website: 'https://www.instacart.com',
    slogan: 'Groceries delivered in as little as 1 hour',
    role: 'Full-Stack Engineer, Frontend Focus',
    startedAt: 'April 2017',
    endedAt: 'October 2018',
    stack: 'React, Redux, Ruby on Rails, Redis, ElasticSearch',
    description: [
      'Built and maintained various features including an autocomplete system for personalized search results, the low stock experience as well as the replacements flow.',
      'Rebuilt from the ground-up the existing autocomplete implementation which was using a third-party static javascript library to generate suggestions to one where the suggestions are specific to the user and their prior behavior.',
      'Helped build and manage the low stock experience, an important part of the shopping experience for the end-user.',
      "Lead and wrote the API development for Instacart's replacements flow which serves all platforms (ios, android, web) as well built the frontend for web & mobile web for this feature. Created test documentation for the various developers and was responsible for making sure everyone had what they needed to ensure each milestone was met, the project was completed on time and worked as expected.",
      'Balanced sprints and backlog tasks and successfully planned for and implemented features to meet quarterly goals while leading the coordination of group efforts when multiple teams were involved.',
    ],
  },
  {
    company: 'Savvy',
    location: 'San Francisco, CA',
    website: 'https://www.savvy.is',
    slogan: 'Enables learners to book 1-1 video sessions with teachers.',
    role: 'Senior Frontend Engineer',
    startedAt: 'July 2016',
    endedAt: 'April 2017',
    stack: 'React, Redux, Ruby on Rails, Webpack, OpenTok, AWS',
    description: [
      "Worked with a talented designer to rebuild Savvy's frontend ui/ux for a presence more inline with the domain and built countless marketing pages targeted at new user signups.",
      "Lead Savvy's frontend efforts, refactored state management patterns in the app and built the analytics platform along with various other aspects of the WebRTC-based app.",
      'Lead the effort to integrate webpack and frontend testing using mocha and chai.',
    ],
  },
  {
    company: 'Oak Labs, Inc.',
    location: 'San Francisco, CA & New York, NY',
    website: 'https://www.oaklabs.is',
    slogan: 'Bringing tech to retail.',
    role: 'Full-Stack Engineer, Frontend Focus',
    startedAt: 'October 2015',
    endedAt: 'July 2016',
    stack: 'React, Redux, Angular, Node, Express, Electron, Mongo, Redis, AWS',
    description: [
      'Built the iPad app (iOS web view) used by retail associates at Polo Ralph Lauren (NYC & Dallas). The iPad app was built with Node and Angular (v1) and was used by the retail associates to be aware of requests originating from the mirrors in the dressing rooms- requests made by customers trying on clothes in the fitting room.',
      'Built the mirror event log import using AWS Redshift, AWS Lambda, AWS Firehose and Node.js. This mirror t-log data was collected, stored and then used to serve a real-time analytics dashboard built with Angular and Highcharts.',
      "Built and maintained Oak's website. and wrote Oak's Frontend tests for interview candidates.",
    ],
  },
  {
    company: 'Stanza',
    location: 'San Francisco, CA',
    website: 'https://www.stanza.co',
    slogan: 'Do more with your time.',
    role: 'Full-Stack Engineer, Frontend Focus',
    startedAt: 'March 2015',
    endedAt: 'October 2015',
    stack: 'Angular, Node, Express, Mongo, Redis',
    description: [
      "Responsible for a significant portion of Stanza's frontend, built primarily with Angular.",
      "Built Stanza's analytics dashboard and data visualizations with Highcharts along with an automated calendar-based mailer to enable clients to send custom, recurring email templates with their upcoming events.",
      "Built internal tools for the business development team to help streamline the sales process as well as the referral program at the time of Stanza's Button 2.0 launch. Helped contribute to the documentation of and overall frontend architecture of Stanza's codebase.",
    ],
  },
];

/**
 *
 * About
 *
 */

const about = {
  data: [
    {
      text: 'I have somewhat of an unusual background; a very creative background rooted in music, software and aesthetics.',
      highlightByString: [],
      highlightByIdx: [],
      isHeading: true,
      links: [],
    },
    {
      text: 'I built and deployed my first website in 1999. I had started a band in college and needed to develop an online presence.',
      highlightByString: ['band'],
      highlightByIdx: [],
      links: ['//en.wikipedia.org/wiki/Thriving_Ivory'],
    },
    {
      text: "I've always been a tinkerer at heart but it wasn't until midway through my sophomore year of college where I found myself actually needing a more robust solution- the first single started taking off at radio all over the world.",
      highlightByString: ['tinkerer', 'band'],
      highlightByIdx: [],
      links: [
        '//78.media.tumblr.com/53384a082b1a862cf90a008f787c803f/tumblr_p2kxakxhQZ1wufp1qo8_500.gif',
        '//en.wikipedia.org/wiki/Thriving_Ivory',
      ],
    },
    {
      text: 'Moving forward, I taught myself the fundamentals of basic web development while simultaneously working as a professional musician. I used an old PHP framework to build a fan community and collected and stored the fan data in a MSQL database. Years later, the band was signed and I handed the technical aspect off to the "new media" department of the label. The first single went RIAA Certifed Gold and won Apple\'s vote for top 10 most influential songs of the 21st century\'s first decade.',
      highlightByString: ["top 10 most influential songs of the 21st century's first decade."],
      highlightByIdx: [],
      links: ['//www.youtube.com/watch?v=S38-mjy5NtA'],
    },
    {
      text: "I was continuously updating and revamping the site, mostly focusing on frontend as the backend didn't change much once it was set up.",
      highlightByString: [],
      highlightByIdx: [],
      links: [],
    },
    {
      text: 'A few years later I left the music industry and continued my other passion for software. I moved to San Francisco, attended a bootcamp and eventually got my first real job as an actual software engineer.',
      highlightByString: ['passion for software.'],
      highlightByIdx: [],
      links: [
        'https://hackernoon.com/understanding-functional-programming-with-javascript-41eb3fa8c2a',
      ],
    },
    {
      text: "Fast-forward to 2023 and I have almost ten years of professional experience. I'm a product and design-oriented senior software engineer and have worked on everything from intelligent mirrors to grocery delivery apps and throughout all this I've developed a whole new passion for all things frontend.",
      highlightByString: ['all things frontend.'],
      highlightByIdx: [],
      links: ['//reactjs.org/'],
    },
    {
      text: 'As for music, I still release the occasional song and peform one or two shows a year for charitable causes.',
      highlightByString: ['charitable'],
      highlightByIdx: [],
      links: ['//angelsonthemoon.net'],
    },
  ],
};

/**
 *
 * Projects
 *
 */
export const PROJECT_DATA = [
  {
    projectName: 'Full Stack Boilerplate with JWT Authentication, MongoDB',
    createdAt: 'January 2022',
    projectUrl: 'https://ts-boilerplate-graphql-mongodb-production.up.railway.app/',
    sourceCodeUrl: 'https://github.com/scottjason/ts-boilerplate-graphql-mongodb',
    description: [
      'Full Stack boilerplate with JWT authentication using MongoDB for the database. Uses custom hooks and code splitting optimization via route-based component lazy loading with the Suspense component.',
      'Unexpired tokens on sign-out are stored in a Mongo collection and checked against on all authentication attempts.',
      'Built with React, Typescript, Node, Express, GraphQL, MongoDB, Mongoose, and Webpack.',
    ],
  },
  {
    projectName: 'Full Stack Boilerplate with JWT Authentication, PostgreSQL & Redis',
    createdAt: 'May 2022',
    projectUrl: 'https://ts-boilerplate-graphql-postgres-production.up.railway.app/',
    sourceCodeUrl: 'https://github.com/scottjason/ts-boilerplate-graphql-postgres',
    description: [
      'Full Stack boilerplate with JWT authentication using PostgreSQL for the database and Redis for quick token queries. Uses custom hooks and code splitting optimization via route-based component lazy loading with the Suspense component',
      'Unexpired tokens on sign-out are stored in a Redis list and checked against on all authentication attempts.',
      'Built with React, Typescript, Node, Express, GraphQL, PostgreSQL, Redis, and Webpack.',
    ],
  },
  {
    projectName: 'Real-time Search',
    createdAt: 'November 2018',
    projectUrl: 'https://react-real-time-search.netlify.app/',
    sourceCodeUrl: 'https://github.com/scottjason/real-time-search',
    description: [
      'Real-time Search is a project app built with React that fetches images and image details from the Unsplash api and renders a responsive card grid. The search input field fetches and renders results as the user is typing, slightly debounced to prevent excessive calls.',
      'The app contains its own cache logic to prevent requests that have already been made for a given term or partial term. Analytics of roundtrip request time and request type - api or cache fetch - at top right.',
      'Built with React, es6, styled components',
    ],
  },
];

/**
 *
 * Attaches an array of arrays containing start and end position indices of the highlghted text in each line
 *
 */

export const ABOUT_DATA = about.data.map(line => {
  let { text, highlightByString } = line;
  for (let i = 0; i < highlightByString.length; i++) {
    let highlightedStr = highlightByString[i];
    let startIdx = text.indexOf(highlightedStr);
    let endIdx = startIdx + highlightedStr.length;
    line.highlightByIdx.push([startIdx, endIdx]);
  }
  return line;
});
