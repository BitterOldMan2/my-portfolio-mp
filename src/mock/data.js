/* eslint-disable prettier/prettier */
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
  paragraphOne: `

  I'm Michael Pattas a full-stack developer based in Cardiff, Wales.
  I love designing and  developing web and mobile apps using various JavaScript Technologies such as React, React native for the front-end, and NodeJS with SQL and NoSQL databases like MongoDB and PostgreSQL on the back-end 
   `,
  paragraphTwo: `I would love to join and evolve into a friendly and professional team `,
  paragraphThree: '',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'emeraldDream.jpg',
    title: 'Emerald Dream Luxury',
    info:
      'Emerald dream is my first professional project. I developed the project using HTML5, Sass, and JavaScript',
    info2: 'I was responsible for the design  and the development of the project  ',
    url: 'https://www.emeraldreamluxury.com/',
    repo: 'https://github.com/BitterOldMan2/Emerald-Dream-3.git',
  },
  {
    id: nanoid(),
    img: 'quizGame.png',
    title: 'Quizy',
    info: 'A simple and fun  quiz game  made with  React , Redux and quizApi ',
    info2: 'I was responsible for the design  and the development of the project',
    url: 'https://react-redux-quizz.herokuapp.com/',
    repo: 'https://github.com/BitterOldMan2/react-redux-quiz',
  },
];

// SKILLS

export const skillsData = [
  {
    title: 'FRONT-END',
    skill1: 'HTML5 , CSS , JavaScript ,TypeScript',
    skill2: 'React , React-Native , Redux',
    skill3: 'Sass , Bootstrap , React-Bootstrap',
  },
  {
    title: 'BACK-END',
    skill1: 'NodeJS , ExpressJS',
    skill2: 'MongoDB , Mongoose',
    skill3: 'Rest-API , MVC Architecture',
  },
  {
    title: 'MORE-SKILLS',
    skill1: 'Git version control , Git Bash',
    skill2: 'Postman, Mongo Compass',
    skill3: 'Netify, Heroku',
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
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michael-pattas-9b9082203/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MichaelPattas',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
