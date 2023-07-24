import {
  FaAngular,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiChakraui,
  SiExpress,
  SiGoland,
  SiMongodb,
  SiNestjs,
  SiReactivex,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

import { SiMaterialui } from 'react-icons/si';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';

type SkillIcon = {
  icon: JSX.Element;
  skillName: string;
  row_span?: string;
  col_span?: string;
  hover_iconColor: string;
  hover_fromColor: string;
  hover_toColor: string;
  hover_viaColor?: string;
  hover_borderColor: string;
  hover_gradient: string;
  height?: string;
  padding?: string;
  getStyle?: () => string;
};

// Define la clase SkillIcon
class SkillIconClass {
  icon: JSX.Element;
  skillName: string;
  row_span?: string;
  col_span?: string;
  height?: string;
  padding?: string;

  hover_iconColor: string;
  hover_fromColor: string;
  hover_toColor: string;
  hover_viaColor?: string;
  hover_borderColor: string;
  hover_gradient: string;

  constructor({
    icon,
    skillName,
    row_span,
    col_span,
    hover_iconColor,
    hover_fromColor,
    hover_toColor,
    hover_viaColor,
    hover_borderColor,
    hover_gradient,
    height,
    padding,
    getStyle,
  }: SkillIcon) {
    this.icon = icon;
    this.skillName = skillName;
    this.row_span = row_span || 'row-span-2 sm:row-span-1';
    this.col_span = col_span;
    this.hover_iconColor = hover_iconColor;
    this.hover_fromColor = hover_fromColor;
    this.hover_toColor = hover_toColor;
    this.hover_viaColor = hover_viaColor;
    this.hover_borderColor = hover_borderColor;
    this.hover_gradient = hover_gradient;
    this.height = height || '';
    this.padding = padding || 'p-2';
  }

  getStyle() {
    return `
      ${this.hover_iconColor} 
      ${this.hover_fromColor}  
      ${this.hover_toColor} 
      ${this.hover_borderColor}
      ${this.hover_gradient}
      ${this.hover_viaColor ? this.hover_viaColor : ''}
      ${this.col_span ? this.col_span : 'col-span-2'} 
      ${this.padding} 
      ${this.row_span ? this.row_span : this.height} 
      
    `;
  }
}
// Crea instancias de la clase SkillIcon para cada habilidad
export const skillIcons: SkillIconClass[] = [
  new SkillIconClass({
    icon: <FaReact className="text-6xl font-bold" />,
    skillName: 'React',
    hover_iconColor: 'hover:text-neutral-100',
    hover_fromColor: 'hover:from-blue-400',
    hover_toColor: 'hover:to-blue-700',
    hover_borderColor: 'hover:border-blue-800',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-4',
  }),

  new SkillIconClass({
    icon: <SiTypescript className="text-6xl font-bold" />,
    skillName: 'Typescript',
    hover_iconColor: 'hover:text-blue-700',
    hover_fromColor: 'hover:from-neutral-300',
    hover_toColor: 'hover:to-neutral-100',
    hover_borderColor: 'hover:border-blue-800',
    hover_gradient: 'bg-gradient-to-tr',
  }),
  new SkillIconClass({
    icon: <SiTailwindcss className="text-6xl font-bold" />,
    skillName: 'Tailwind',
    hover_iconColor: 'hover:text-neutral-100',
    hover_fromColor: 'hover:from-purple-800',
    hover_toColor: 'hover:to-blue-400',
    hover_borderColor: 'hover:border-blue-800',
    hover_gradient: 'bg-gradient-to-tr',
  }),

  new SkillIconClass({
    icon: <SiReactivex className="text-6xl font-bold" />,
    skillName: 'RxJs',
    hover_iconColor: 'hover:text-fuchsia-700',
    hover_fromColor: 'hover:from-fuchsia-400',
    hover_toColor: 'hover:to-fuchsia-400',
    hover_borderColor: 'hover:border-fuchsia-800',
    hover_gradient: 'bg-gradient-to-tr',
  }),
  new SkillIconClass({
    icon: <SiRedux className="text-6xl font-bold" />,
    skillName: 'Redux',
    hover_iconColor: 'hover:text-purple-700',
    hover_fromColor: 'hover:from-purple-400',
    hover_toColor: 'hover:to-purple-400',
    hover_borderColor: 'hover:border-purple-800',
    hover_gradient: 'bg-gradient-to-tr',
  }),
  new SkillIconClass({
    icon: <SiChakraui className="text-6xl font-bold" />,
    skillName: 'ChakraUI',
    hover_iconColor: 'hover:text-teal-100',
    hover_fromColor: 'hover:from-teal-600',
    hover_toColor: 'hover:to-cyan-400',
    hover_borderColor: 'hover:border-cyan-800',
    hover_gradient: 'bg-gradient-to-tr',
  }),
  new SkillIconClass({
    icon: <SiMaterialui className="text-6xl font-bold" />,
    skillName: 'Material UI',
    hover_iconColor: 'hover:text-neutral-100',
    hover_fromColor: 'hover:from-blue-600',
    hover_toColor: 'hover:to-blue-500',
    hover_borderColor: 'hover:border-cyan-800',
    hover_gradient: 'bg-gradient-to-tr',
  }),
  new SkillIconClass({
    icon: <SiReactrouter className="text-6xl font-bold" />,
    skillName: 'React-Router-Dom',
    hover_iconColor: 'hover:text-neutral-900',
    hover_fromColor: 'hover:from-red-500',
    hover_toColor: 'hover:to-neutral-400',
    hover_borderColor: 'hover:border-red-800',
    hover_gradient: 'bg-gradient-to-tr',
  }),

  new SkillIconClass({
    icon: <TbBrandNextjs className="text-6xl font-bold" />,
    skillName: 'NextJs',
    hover_iconColor: 'hover:text-neutral-100',
    hover_fromColor: 'hover:from-neutral-800',
    hover_toColor: 'hover:to-neutral-700',
    hover_borderColor: 'hover:border-neutral-800',
    hover_gradient: 'bg-gradient-to-tr',
  }),
  new SkillIconClass({
    icon: <SiNestjs className="text-6xl font-bold" />,
    skillName: 'NestJs',
    hover_iconColor: 'hover:text-pink-700',
    hover_fromColor: 'hover:from-pink-400',
    hover_toColor: 'hover:to-pink-400',
    hover_borderColor: 'hover:border-pink-800',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-4',
    row_span: 'row-span-2 sm:row-span-1 md:row-span-2',
  }),
  new SkillIconClass({
    icon: <FaNodeJs className="text-6xl font-bold" />,
    skillName: 'NodeJs',
    hover_iconColor: 'hover:text-neutral-100',
    hover_fromColor: 'hover:from-green-400',
    hover_toColor: 'hover:to-green-400',
    hover_borderColor: 'hover:border-green-800',
    hover_gradient: 'bg-gradient-to-tr',
    row_span: 'row-span-4 sm:row-span-2',
    col_span: 'col-span-2 md:col-span-3',
  }),
  new SkillIconClass({
    icon: <SiExpress className="text-6xl font-bold" />,
    skillName: 'Express',
    hover_iconColor: 'hover:text-neutral-100',
    hover_fromColor: 'hover:from-green-400',
    hover_toColor: 'hover:to-green-400',
    hover_borderColor: 'hover:border-green-800',
    hover_gradient: 'bg-gradient-to-tr',
    row_span: 'row-span-4 sm:row-span-2',
    col_span: 'col-span-2 md:col-span-3',
  }),

  new SkillIconClass({
    icon: <SiMongodb className="text-6xl font-bold" />,
    skillName: 'MongoDB',
    hover_iconColor: 'hover:text-green-700',
    hover_fromColor: 'hover:from-orange-600',
    hover_viaColor: 'hover:via-green-400',
    hover_toColor: 'hover:to-green-400',
    hover_borderColor: 'hover:border-blue-800',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-4',
    row_span: 'row-span-2 md:row-span-2',
  }),

  new SkillIconClass({
    icon: <FaJava className="text-6xl font-bold" />,
    skillName: 'Java',
    hover_iconColor: 'hover:text-orange-600',
    hover_fromColor: 'hover:from-neutral-100',
    hover_toColor: 'hover:to-neutral-100',
    hover_borderColor: 'hover:border-blue-800',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-1 ',
    row_span: 'row-span-1 md:row-span-2',
    padding: 'p-3 min-[400px]:p-4   sm:p-2  ',
  }),
  new SkillIconClass({
    icon: <FaAngular className="text-6xl font-bold" />,
    skillName: 'Angular',
    hover_iconColor: 'hover:text-red-600',
    hover_fromColor: 'hover:from-neutral-100',
    hover_toColor: 'hover:to-neutral-100',
    hover_borderColor: 'hover:border-red-500',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-1',
    row_span: 'row-span-1 md:row-span-2',
    padding: 'p-3 min-[400px]:p-4   sm:p-2',
  }),
  new SkillIconClass({
    icon: <FaVuejs className="text-6xl font-bold" />,
    skillName: 'VueJs',
    hover_iconColor: 'hover:text-green-600',
    hover_fromColor: 'hover:from-neutral-100',
    hover_toColor: 'hover:to-neutral-100',
    hover_borderColor: 'hover:border-green-500',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-1',
    row_span: 'row-span-1 md:row-span-2',
    padding: 'p-3 min-[400px]:p-4   sm:p-2',
  }),
  new SkillIconClass({
    icon: <TbBrandReactNative className="text-6xl font-bold" />,
    skillName: 'React Native',
    hover_iconColor: 'hover:text-neutral-700',
    hover_fromColor: 'hover:from-blue-600',
    hover_toColor: 'hover:to-blue-200',
    hover_borderColor: 'hover:border-blue-800',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-1',
    row_span: 'row-span-1 md:row-span-2',
    padding: 'p-3 min-[400px]:p-4   sm:p-2',
  }),
  new SkillIconClass({
    icon: <SiVite className="text-6xl font-bold" />,
    skillName: 'Vite',
    hover_iconColor: 'hover:text-yellow-500',
    hover_fromColor: 'hover:from-cyan-500',
    hover_toColor: 'hover:to-pink-500',
    hover_borderColor: 'hover:border-fuchsia-800',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-1',
    row_span: 'row-span-1 md:row-span-2',
    padding: 'p-3 min-[400px]:p-4   sm:p-2',
  }),
  new SkillIconClass({
    icon: <SiGoland className="text-6xl font-bold" />,
    skillName: 'Golang',
    hover_iconColor: 'hover:text-blue-700',
    hover_fromColor: 'hover:from-neutral-200',
    hover_toColor: 'hover:to-neutral-400',
    hover_borderColor: 'hover:border-blue-800',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-1',
    row_span: 'row-span-1 md:row-span-2',
    padding: 'p-3 min-[400px]:p-4   sm:p-2',
  }),
  new SkillIconClass({
    icon: <FaPython className="text-6xl font-bold" />,
    skillName: 'Python',
    hover_iconColor: 'hover:text-neutral-200',
    hover_fromColor: 'hover:from-yellow-500',
    hover_toColor: 'hover:to-blue-600',
    hover_borderColor: 'hover:border-blue-800',
    hover_gradient: 'bg-gradient-to-tl',
    col_span: 'col-span-1',
    row_span: 'row-span-1 md:row-span-2',
    padding: 'p-3 min-[400px]:p-4   sm:p-2 ',
  }),
  new SkillIconClass({
    icon: <FaWordpress className="text-6xl font-bold" />,
    skillName: 'WordPress',
    hover_iconColor: 'hover:text-blue-700',
    hover_fromColor: 'hover:from-neutral-100',
    hover_toColor: 'hover:to-neutral-100',
    hover_borderColor: 'hover:border-neutral-800',
    hover_gradient: 'bg-gradient-to-tr',
    col_span: 'col-span-1',
    row_span: 'row-span-1 md:row-span-2',
    padding: 'p-3 min-[400px]:p-4   sm:p-2',
  }),
];
// export const skillIcons: SkillIcon[] = [
//   {
//     icon: <SiTailwindcss className="text-6xl  font-bold" />,
//     skillName: 'Tailwind',
//     hover_iconColor: 'hover:text-blue-700',
//     hover_fromColor: 'hover:from-blue-200',
//     hover_toColor: 'hover:to-blue-400',
//     hover_borderColor: 'hover:border-blue-800',
//     hover_gradient: 'bg-gradient-to-tr',
//     getStyle() {
//       return `  ${this?.hover_iconColor}
//                 ${this?.hover_fromColor}
//                 ${this?.hover_toColor}
//                 ${this?.hover_borderColor}
//                 ${this?.hover_gradient}
//                 `;
//     },
//   },
//   {
//     icon: <FaReact className="text-6xl  font-bold" />,
//     skillName: 'React',
//     hover_iconColor: 'hover:text-blue-700',
//     hover_fromColor: 'hover:from-blue-400',
//     hover_toColor: 'hover:to-blue-400',
//     hover_borderColor: 'hover:border-blue-800',
//     hover_gradient: 'bg-gradient-to-tr',
//     getStyle() {
//       return `  ${this?.hover_iconColor}
//                 ${this?.hover_fromColor}
//                 ${this?.hover_toColor}
//                 ${this?.hover_borderColor}
//                 ${this?.hover_gradient}
//                 `;
//     },
//   },
//   {
//     icon: <SiNestjs className="text-6xl  font-bold" />,
//     skillName: 'React',
//     hover_iconColor: 'hover:text-blue-700',
//     hover_fromColor: 'hover:from-blue-400',
//     hover_toColor: 'hover:to-blue-400',
//     hover_borderColor: 'hover:border-blue-800',
//     hover_gradient: 'bg-gradient-to-tr',
//     getStyle() {
//       return `  ${this?.hover_iconColor}
//                 ${this?.hover_fromColor}
//                 ${this?.hover_toColor}
//                 ${this?.hover_borderColor}
//                 ${this?.hover_gradient}
//                 `;
//     },
//   },
//   {
//     icon: <SiTypescript className="text-6xl  font-bold" />,
//     skillName: 'React',
//     hover_iconColor: 'hover:text-blue-700',
//     hover_fromColor: 'hover:from-blue-400',
//     hover_toColor: 'hover:to-blue-400',
//     hover_borderColor: 'hover:border-blue-800',
//     hover_gradient: 'bg-gradient-to-tr',
//     getStyle() {
//       return `  ${this?.hover_iconColor}
//                 ${this?.hover_fromColor}
//                 ${this?.hover_toColor}
//                 ${this?.hover_borderColor}
//                 ${this?.hover_gradient}
//                 `;
//     },
//   },
//   {
//     icon: <FaNodeJs className="text-6xl  font-bold" />,
//     skillName: 'React',
//     hover_iconColor: 'hover:text-blue-700',
//     hover_fromColor: 'hover:from-blue-400',
//     hover_toColor: 'hover:to-blue-400',
//     hover_borderColor: 'hover:border-blue-800',
//     hover_gradient: 'bg-gradient-to-tr',
//     getStyle() {
//       return `  ${this?.hover_iconColor}
//                 ${this?.hover_fromColor}
//                 ${this?.hover_toColor}
//                 ${this?.hover_borderColor}
//                 ${this?.hover_gradient}
//                 `;
//     },
//   },
//   {
//     icon: <SiReactrouter className="text-6xl  font-bold" />,
//     skillName: 'React',
//     hover_iconColor: 'hover:text-blue-700',
//     hover_fromColor: 'hover:from-blue-400',
//     hover_toColor: 'hover:to-blue-400',
//     hover_borderColor: 'hover:border-blue-800',
//     hover_gradient: 'bg-gradient-to-tr',
//     getStyle() {
//       return `  ${this?.hover_iconColor}
//                 ${this?.hover_fromColor}
//                 ${this?.hover_toColor}
//                 ${this?.hover_borderColor}
//                 ${this?.hover_gradient}
//                 `;
//     },
//   },
//   {
//     icon: <SiRedux className="text-6xl  font-bold" />,
//     skillName: 'React',
//     hover_iconColor: 'hover:text-blue-700',
//     hover_fromColor: 'hover:from-blue-400',
//     hover_toColor: 'hover:to-blue-400',
//     hover_borderColor: 'hover:border-blue-800',
//     hover_gradient: 'bg-gradient-to-tr',
//     getStyle() {
//       return `  ${this?.hover_iconColor}
//                 ${this?.hover_fromColor}
//                 ${this?.hover_toColor}
//                 ${this?.hover_borderColor}
//                 ${this?.hover_gradient}
//                 `;
//     },
//   },
//   {
//     icon: <SiReactivex className="text-6xl  font-bold" />,
//     skillName: 'React',
//     hover_iconColor: 'hover:text-blue-700',
//     hover_fromColor: 'hover:from-blue-400',
//     hover_toColor: 'hover:to-blue-400',
//     hover_borderColor: 'hover:border-blue-800',
//     hover_gradient: 'bg-gradient-to-tr',
//     getStyle() {
//       return `  ${this?.hover_iconColor}
//                 ${this?.hover_fromColor}
//                 ${this?.hover_toColor}
//                 ${this?.hover_borderColor}
//                 ${this?.hover_gradient}
//                 `;
//     },
//   },
//   {
//     icon: <SiMongodb className="text-6xl  font-bold" />,
//     skillName: 'React',
//     hover_iconColor: 'hover:text-blue-700',
//     hover_fromColor: 'hover:from-blue-400',
//     hover_toColor: 'hover:to-blue-400',
//     hover_borderColor: 'hover:border-blue-800',
//     hover_gradient: 'bg-gradient-to-tr',
//     getStyle() {
//       return `  ${this?.hover_iconColor}
//                 ${this?.hover_fromColor}
//                 ${this?.hover_toColor}
//                 ${this?.hover_borderColor}
//                 ${this?.hover_gradient}
//                 `;
//     },
//   },
// ];
