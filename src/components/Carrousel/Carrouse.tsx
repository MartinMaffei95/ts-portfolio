import { useState, MouseEvent } from 'react';

const imgArr = [
  '../public/educationImg/FormulariosReact.png',
  '../public/educationImg/AjaxYWebSockets.jpg',
  '../public/educationImg/ReactDesdeCero.png',
  '../public/educationImg/UiDesing.png',
  '../public/educationImg/ReactDesdeCero.png',

  '../public/educationImg/UiDesing.png',
  '../public/educationImg/UiDesing.png',
  '../public/educationImg/ReactDesdeCero.png',

  '../public/educationImg/UiDesing.png',
];
export const Carrousel = () => {
  // recibe array ede imgenes y renderiza la priemra en grande y el resto
  // en una cuadricula para selsccionar

  const [visorImage, setVisorImage] = useState(
    '../public/educationImg/FormulariosReact.png'
  );
  const [carrouselImages, setCarrouselImages] = useState(imgArr);
  const [actualStep, setActualStep] = useState(0);
  const selectImage = (e: MouseEvent<HTMLImageElement>): void => {
    console.log(e.currentTarget.src);
    setVisorImage(e.currentTarget.src);
  };
  const handleImage = (moveTo: string) => {
    switch (moveTo) {
      case 'FORWARD':
        if (actualStep < carrouselImages.length - 1) {
          setActualStep(actualStep + 1);
        } else {
          setActualStep(0);
        }
        setVisorImage(carrouselImages[actualStep]);
        break;
      case 'BACKWARD':
        if (actualStep > 0) {
          setActualStep(actualStep - 1);
        } else {
          setActualStep(carrouselImages.length - 1);
        }
        setVisorImage(carrouselImages[actualStep]);
        break;
    }

    setVisorImage(carrouselImages[actualStep]);
  };
  return (
    <div>
      <div>
        <img className="w-36" src={visorImage || ''} />
        <button onClick={() => handleImage('BACKWARD')}>atra</button>
        <button onClick={() => handleImage('FORWARD')}>Sig</button>
      </div>
      <div className="flex">
        {carrouselImages
          ? carrouselImages.map((imgRoute) => (
              <img
                onClick={(e) => selectImage(e)}
                className="w-16"
                src={imgRoute}
              />
            ))
          : null}
      </div>
    </div>
  );
};
