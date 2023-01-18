export type category = {
  name: string;
  src: string;
};

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  skills_learned: string[];
  professor: string;
  hours: number;
  image: string;
  tags: string[];
  certification: string;
  url_certification: string;
  coursed_in: string;
};

export type Project = {
  name: string;
  shortName: string;
  type: string;
  description: string;
  stack_used: string[];
  other_used: string[] | null;
  url_deploy: string;
  url_repository: string;
  img_card: string;
  img_desktop?: string;
  img_responsiveMobile?: string;
  img_responsiveTablet?: string;
};
//  nombre = 'takeZoom';
//  shortName = 'WEB APP';
//  type = 'WEB_DESIGN';
//  descr = 'App para reservar espacios comunes de nuestro edificio';
//  tecUtil = 'NodeJs,Express,JWT,MongoDB,React,Redux,ReactRouterDOM';
//  url = 'https://takezoom.vercel.app/';
//  img_card = '/designImages/takeZoom.png';
//  img_responsiveMobile = '';
//  img_responsiveTablet = '';
//  img_responsiveDesktop = '';
