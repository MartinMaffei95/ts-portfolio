import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Course } from '../../interfaces/data.interface';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ImageGroup, Image } from 'react-fullscreen-image';
type CoursesModalProps = {
  course: Course | undefined;
  handleOpen: Function;
};
export const CoursesModal = ({ handleOpen, course }: CoursesModalProps) => {
  const [propCourse, setPropCourse] = useState<Course | undefined>(course);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const cert = useRef();

  useEffect(() => {
    setPropCourse(course);
  }, [course]);

  return (
    <div className="bg-neutral-900 bg-opacity-80 fixed top-0 left-0 w-screen h-screen max-h-screen max-w-screen min-h-screen min-w-screen z-50 p-6">
      <div className="bg-neutral-200 flex max-h-full max-w-full min-h-full min-w-full rounded relative overflow-y-scroll">
        <button
          className="absolute top-2 right-2"
          onClick={() => handleOpen(false)}
        >
          X
        </button>
        {propCourse ? (
          <div>
            <img src={propCourse.image} />
            <div className="p-2">
              <h3 className="text-2xl font-bold text-center">
                {propCourse.title}
              </h3>
              <p className="text-xl font-light ">{propCourse.subtitle}</p>
              {propCourse?.skills_learned ? (
                <ul className="pl-2 pr-2 mt-2 mb-2">
                  <li className="text-xl font-bold text-center">-Contenido-</li>
                  {propCourse.skills_learned.map((skill) => (
                    <li className="text-xl flex items-center gap-2">
                      <AiOutlineCheckCircle className="text-green-900" />
                      {skill}
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="text-xl  ">
                Profesor:{' '}
                <span className="text-xl font-light ">
                  {propCourse.professor}
                </span>
              </p>
              <p className="text-xl  ">
                Cantidad de horas:{' '}
                <span className="text-xl font-light ">{propCourse.hours}</span>
              </p>
              <p>- CERTIFICACION- </p>
              <div>
                <ImageGroup>
                  <Image
                    src={propCourse.certification}
                    alt="nature"
                    style={{
                      position: 'realtive',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </ImageGroup>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
