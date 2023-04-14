import { Project } from '../interfaces/data.interface';

export const projects: Project[] = [
  {
    name: 'H&D',
    shortName: '',
    type: 'WEB_DESIGN',
    description: 'Landing page of decoration business',
    stack_used: ['React', 'Typescript', 'Nextjs'],
    other_used: ['Tailwind', 'styled-components'],
    url_repository: 'https://github.com/MartinMaffei95/landing_home_deco',
    url_deploy: 'https://landing-home-deco.vercel.app/',
    img_card: '/projectImg/decoLanding/decoLanding_cardImage.png',
    img_desktop: '/projectImg/decoLanding/decoLanding_desktop.png',
  },
  {
    name: 'ChallengeGD',
    shortName: '',
    type: 'WEB_DESIGN',
    description: 'Challenge de frontend real',
    stack_used: ['React', 'Typescript'],
    other_used: ['Firebase', 'Tailwind', 'React-confetti', 'ReactRouterDom'],
    url_repository: 'https://github.com/MartinMaffei95/challenge-gd',
    url_deploy: 'https://challenge-gd-seven.vercel.app/',
    img_card: '/projectImg/ChallengeGD/cellImage.png',
    img_desktop: '/projectImg/ChallengeGD/1673038130329.png',
  },
  {
    name: 'TakeZoom',
    shortName: 'WEB APP M.E.R.N.',
    type: 'WEB_DESIGN',
    description: 'App para reservar espacios comunes de nuestro edificio',
    stack_used: ['NodeJs', 'Express', 'MongoDB', 'React'],
    other_used: ['JWT', 'Redux', 'ReactRouterDOM'],
    url_deploy: 'https://takezoom.vercel.app/',
    img_card: '/projectImg/takeZoom/TakeZoom_cardImage.png',
    url_repository: 'https://github.com/MartinMaffei95/reservar_web',

    img_desktop: '/projectImg/takeZoom/takeZoom.png',
  },
  {
    name: 'PostWeb',
    shortName: 'WEB APP M.E.R.N.',
    type: 'WEB_DESIGN',
    description: 'Permite crear posts y compartirlos',
    stack_used: ['NodeJs', 'Express', 'MongoDB', 'React'],
    other_used: ['JWT', 'Redux', 'ReactRouterDOM'],
    url_deploy: 'https://post-web-fe.vercel.app/',
    url_repository: 'https://github.com/MartinMaffei95/post_web-fe',
    img_card: '/projectImg/postweb/PostWeb_cardImage.png',
    img_desktop: '/projectImg/postweb/postWeb.jpg',
  },
  {
    name: 'LandingPage Mac Mini',
    shortName: 'Pagina clon',
    type: 'WEB_DESIGN',
    description: 'Copia de landing page de MacMini',
    stack_used: ['HTML', 'CSS', 'JavaScript'],
    other_used: null,
    url_deploy: 'https://mac-mini-landing-edteam.vercel.app/',
    url_repository: 'https://github.com/MartinMaffei95/MacMiniLandingEDTEAM',

    img_card: '/projectImg/macmini/MacMini_cardImage.png',
    img_desktop: '/projectImg/macmini/mcmini.jpg',
  },
  {
    name: 'Password Creator',
    shortName: 'Pass generator',
    type: 'WEB_DESIGN',
    description: 'AppWeb generadora de passwords',
    stack_used: ['HTML', 'CSS', 'JavaScript'],
    other_used: null,
    url_repository: 'https://github.com/MartinMaffei95/passwordCreator',
    url_deploy: 'https://password-creator-silk.vercel.app/',
    img_card: '/projectImg/paswordgenerator/PassGenerator_cardImage.png',
    img_desktop: '/projectImg/paswordgenerator/PasswordGenerator.png',
  },
  {
    name: 'MovieSite',
    shortName: '',
    type: 'WEB_DESIGN',
    description: 'Sitio con informacion de peliculas usando MovieDB',
    stack_used: ['HTML', 'CSS', 'JavaScript', 'React'],
    other_used: null,
    url_repository: 'https://github.com/MartinMaffei95/MovieApp',

    url_deploy: 'https://movie-app-gamma-seven.vercel.app/',
    img_card: '/projectImg/movieSite/MovieSite_cardImage.png',
    img_desktop: '/projectImg/movieSite/MovieSite.png',
  },

  // {
  //   name: 'Go-Scrum',
  //   shortName: '',
  //   type: 'WEB_DESIGN',
  //   description: 'App web para trabajar metodologia SCRUM',
  //   stack_used: ['HTML', 'CSS', 'JavaScript', 'React'],
  //   other_used: ['Redux', 'UUID'],
  //   url_deploy: 'https://go-scrum-kappa.vercel.app/',
  //   img_card: '/projectImg/GoScrum.png',
  // },
];
