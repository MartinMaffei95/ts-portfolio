import { Work } from '../interfaces/data.interface';

export const works: Work[] = [
  {
    title: 'Betriax App',
    description:
      'Forme parte del equipo de desarrollo de la nueva webapp de Betriax. Un nuevo mercado de cambio de divisas donde los clientes determinan, entre ellos, la tasa de cambio en cada transacción.',
    task_realized: [
      'Implementacion de typescript sobre el proyecto en desarrollo para mejorar la calidad, mantenibilidad, escalabilidad y entendibilidad del codigo',
      'Actualizacion del entorno de desarrollo. Desde CRA hacia Vite mejorando considerablemente la experiencia de desarrollo del quipo',
      'Implementacion gradual de Clean Architecture en el proyecto para mejorar la escalabilidad y mantenibilidad',
      'Desarrollo e implementacion de los diseños generados por el equipo de arte',
      'Desarrollo de componentes genericos que se utilizaron en diversos productos de la empresa.',
      'Integracion con las APIs de la empresa y 3eros',
    ],
    portrait: '',
    images: [''],
  },
  {
    title: 'SocialMedia1989 e-Learning',
    description:
      'Plataforma de e-learning para poder realizar pagos de cursos de la empresa',
    task_realized: [
      'Identificacion e implementacion las necesidades actuales de la empresa hacia el producto',
      'Desarrollo del sitio web de la empresa',
      'Integracion de paypal al sitio',
    ],
    portrait: '',
    images: [''],
  },

  {
    title: 'VagImports WebSite',
    description:
      'Web site completo. Incluye Landing Page con presentacion de la empresa, e-commerce completo, seccion de admin. Que permite realizar control de stock, control de ventas.',
    task_realized: [
      'Desarrollo del sitio web de la mepresa',
      'Desarrollo del e-commerce e integracion la api',
      'Generacion del panel de administrador para realizar control de ventas y stock ',
      'Integracion de la api de Google Maps al proceso de compra ',
      'Integracion de ChartJs para visualizar datos de venta de forma grafica.',
    ],
    portrait: '',
    images: [''],
  },

  {
    title: 'Betriax Landing page (BOL)',
    description:
      'Encargado de desarrollar la landing page orientada al mercado Boliviano',
    task_realized: [],
    portrait: '',
    images: [''],
  },
];
