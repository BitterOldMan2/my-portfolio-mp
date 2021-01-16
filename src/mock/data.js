import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael Pattas || Full Stack Developer',
  lang: '',
  description: 'welcome to my page',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Michael Pattas',
  subtitle: `I'm a full-stack web developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm Michael Pattas i'm  a full-stuck developer based in Cardiff , Wales.
  I've always had a passion for technology and i've always wanted to find a way to express this passion .I've finally found it  `,
  paragraphTwo: `I love working with JavaScript and its  framewors like React Expresss and Gatsby`,
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'emeraldDream.png',
    title: 'Emerald Dream Luxury',
    info:
      'Emerald dream  is my first professional project i developed the project using HTML5, Sass and javaScript',
    info2: 'I was responsible for the design  and the development of the project  ',
    url: 'https://www.emeraldreamluxury.com/',
    repo: 'https://github.com/BitterOldMan2/Emerald-Dream-3.git',
  },
  {
    id: nanoid(),
    img: 'quizGame.png',
    title: 'React-Redux quiz game',
    info: 'A simple and fun  quiz game  made with  React , Redux and quizApi ',
    info2: 'I was responsible for the design  and the development of the project',
    url: 'https://react-redux-quizz.herokuapp.com/',
    repo: 'https://github.com/BitterOldMan2/react-redux-quiz',
  },
];

//SKILLS

export const skillsData = [
  {
    title: 'FRONT-END',
    skill1: 'HTML5 , CSS , JavaScript ,TypeScript',
    skill2: 'React , React-Native , Redux , Gatsby',
    skill3: 'Sass , Bootstrap , React-Bootstrap',
    skill4: 'Axios , Fetch',
    skill5: 'Responsive design',
  },
  {
    title: 'BACK-END',
    skill1: 'Nodejs , Express , ',
    skill2: 'Mongo , Mongoose',
    skill3: 'Rest-API , MVC Architecture',
    skill4: 'Authorization , Json Web Token',
    skill5: 'stripe',
  },
  {
    title: 'MORE-SKILLS',
    skill1: 'Docker , Kubernetes , ',
    skill2: 'Git version control , Git Bash',
    skill3: 'Adobe XD, affinity designer',
    skill4: 'Postman, Mongo Compass',
    skill5: 'Amazon Web Services, Netify, heroku',
  },
];

// CONTACT DATA
export const contactData = [
  {
    icon: 'fa fa-map-marker fa-3x',
    title: 'E-mail',
    details: 'mikepattas211@gmail.com',
  },
  {
    icon: 'fa fa-phone fa-3x',
    title: 'Phone',
    details: '07413280954',
  },
  {
    icon: 'fa fa-envelope fa-3x',
    title: 'Adress',
    details: 'Cardiff,Wales',
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/mike.patt.7545',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
