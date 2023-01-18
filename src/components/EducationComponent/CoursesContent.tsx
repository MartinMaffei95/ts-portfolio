import { useState, useEffect } from 'react';
import { Course } from '../../interfaces/data.interface';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Icon } from '../Icon';

type CourseContentProps = {
  course: Course | undefined;
};

const CourseContent = ({ course }: CourseContentProps) => {
  const [propCourse, setPropCourse] = useState<Course | undefined>(course);

  useEffect(() => {
    setPropCourse(course);
  }, [course]);

  return (
    <div>
      {propCourse ? (
        <div>
          <div className="flex justify-center ">
            <img src={propCourse.image} className="" />
          </div>
          <div className="p-2">
            <h3 className="text-2xl font-bold text-center">
              {propCourse.title}
            </h3>
            <p className="text-xl font-light text-center">
              {propCourse.subtitle}
            </p>
            {propCourse?.skills_learned ? (
              <ul className="pl-2 pr-2 mt-2 mb-2 ml-auto mr-auto flex flex-col items-center w-2/4">
                <li className="text-xl font-bold text-center">-Contenido-</li>
                {propCourse.skills_learned.map((skill) => (
                  <li className="text-xl flex flex-row items-center gap-2 w-full ">
                    <AiOutlineCheckCircle className="text-green-900 w-12 justify-self-start" />
                    <span className="">{skill}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {propCourse.professor ? (
              <p className="text-xl  ">
                Profesor:
                <span className="text-xl font-light ">
                  {propCourse.professor}
                </span>
              </p>
            ) : null}
            {propCourse.hours ? (
              <p className="text-xl  ">
                Cantidad de horas:{' '}
                <span className="text-xl font-light ">{propCourse.hours}</span>
              </p>
            ) : null}
            {propCourse.url_certification ? (
              <div className="flex flex-col gap-4">
                <p>
                  <Icon
                    text={`${propCourse.coursed_in} - Certificacion`}
                    iconSrc="/icons/certif.png"
                    link={propCourse.url_certification}
                    containerClassname="text-neutral-100 flex flex-row-reverse justify-center items-center w-full bg-neutral-900 rounded gap-4 p-2"
                    textClassname="font-bold"
                    iconClassname="w-12"
                  />
                </p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CourseContent;
