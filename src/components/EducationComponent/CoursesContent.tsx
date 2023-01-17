import { useState, useEffect } from 'react';
import { Course } from '../../interfaces/data.interface';
import { AiOutlineCheckCircle } from 'react-icons/ai';

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
            <p>Cursado en: {propCourse.coursed_in}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CourseContent;
