import {
  ElementRef,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import Typed from 'typed.js';

[
  'Maqutación web',
  'Desarrollo de vistas',
  'Desarrollo de PWA',
  'Front-end',
  'Back-end',
  'Creacion API REST',
  'Testing manual',
];

export const TypedText = () => {
  const text = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (text !== null) {
      const typed = new Typed(text.current as Element, {
        strings: [
          'Front-end',
          'Maqutación web',
          'Desarrollo de vistas',
          'Desarrollo de PWA',
          'Back-end',
          'Creacion API REST',
          'QA',
          'Testing manual',
        ],

        startDelay: 100,
        typeSpeed: 70,
        backSpeed: 30,
        backDelay: 1000,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: '_',
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="subtitle">
      <h3>
        {' '}
        Soy desarrollador <span className="title">FullStack</span>{' '}
      </h3>
      <p className="text-xl font-light">Cuento con experiencia en:</p>
      <span className="text-xl font-mono text-green-500" ref={text}></span>
    </div>
  );
};
