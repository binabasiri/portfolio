import iminImage from "../assets/images/I'm in.svg";
import chesstaminaImage from '../assets/images/Chesstamina.svg';
import wordleImage from '../assets/images/Wordle.svg';
import BizCardImage from '../assets/images/biz card.svg';
import worldEngineImage from '../assets/images/world engine.svg';

export const projects = [
  {
    id: 1,
    image: iminImage,
    name: "I'm in",
    githubLink: 'https://github.com/binabasiri/imin',

    demoLink: '',

    websiteLink: '',

    description:
      "I'm in is a trip planner application made for travelers to make their trip planning easier and more fun. Travellers can make thier accounts, choose their destinations, choose their faviorit restaurants and tourist attractions among the top suggested restaurants and tourist attractions, specify the date they're wishing to travel and share their card with other users.",
    technologies: [
      'React',
      'SASS',
      'Node',
      'Express',
      'Google API',
      'JSON Web Tokens',
    ],
  },
  {
    id: 2,
    image: BizCardImage,
    name: 'BizCard',
    githubLink: 'https://github.com/binabasiri/BizCard',

    demoLink: '',

    websiteLink: '',

    description:
      "BizCard empowers professionals to integrate their business information to a digital business card. They can make as many business cards as they wanted after they signed up. They can also share their business cards's link with other profesionals.",
    technologies: [
      'React',
      'CSS',
      'Material UI',
      'Redux',
      'MongoDB',
      'Node.js',
      'Express',
    ],
  },
  {
    id: 3,
    image: chesstaminaImage,
    name: 'ChesStamina',
    githubLink: 'https://github.com/binabasiri/ChesStamina',

    demoLink: '',

    websiteLink: 'https://chesstamina.netlify.app/',

    description:
      "ChesStamina is a point tracer for a Chess varient named ChesStamina. ChesStamina born during Play4Tomorrow's hackaton, to encoChesStamina webApp is a point tracker application for a Chess variant named ChesStamina. ChesStamina was born during Play4Tomorrow's hackathon, with the goal of encouraging student to play games that requires calculation and physical activities at the same time. After several rounds of play testing we designed and develop ChesStamina point tracker.",
    technologies: ['React', 'CSS', 'Adobe XD'],
  },
  {
    id: 4,
    image: wordleImage,
    name: 'Wordle',
    githubLink: 'https://github.com/binabasiri/wordle',

    demoLink: '',

    websiteLink: 'https://wordled.netlify.app/',

    description:
      'This project is a fun one! In case you are not familiar with Wordle it is a game in which you should guess a word each day. If the solution contans any letter of your guess it will become green (right order) or yellow (wrong order), otherwise it will turn grey. You can only put legit words.',
    technologies: ['React', 'CSS', 'Material UI', 'Figma'],
  },
  {
    id: 5,
    image: worldEngineImage,
    name: 'World Engine (MVP)',
    githubLink: '',

    demoLink: '',

    websiteLink: 'https://binabasiri.itch.io/worldenginemvp',

    description:
      'World Engine is designed and developed to raise global warming awaireness among the school students. The current version is MVP; The MVP tested with more than 250 school student by Rocketship foundation.',
    technologies: ['Unity', 'C#', 'Itch.io', 'AdobeXD'],
  },
];
