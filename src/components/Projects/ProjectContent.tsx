import { useState, useEffect } from 'react';
import { Project } from '../../interfaces/data.interface';
import { AiOutlineCheckCircle } from 'react-icons/ai';

type ProjectContentProps = {
  project: Project | undefined;
};

const ProjectContent = ({ project }: ProjectContentProps) => {
  const [propCourse, setPropCourse] = useState<Project | undefined>(project);

  useEffect(() => {
    setPropCourse(project);
  }, [project]);

  return (
    <div>
      {propCourse ? (
        <div>
          <img src={propCourse.img_desktop} />
          <div className="p-2">
            <h3 className="text-2xl font-bold text-center">
              {propCourse.name}
            </h3>
            <p className="text-xl font-light ">{propCourse.description}</p>
            <div className="flex justify-around gap-4  w-full">
              {propCourse.stack_used ? (
                <ul className="pl-2 pr-2 mt-2 mb-2">
                  <li className="text-xl font-bold text-center">
                    Stack utilizado
                  </li>
                  {propCourse.stack_used.map((tech) => (
                    <li className="text-xl flex items-center gap-2">
                      <AiOutlineCheckCircle className="text-green-900" />
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}
              {propCourse.stack_used ? (
                <ul className="pl-2 pr-2 mt-2 mb-2">
                  <li className="text-xl font-bold text-center">Otros</li>
                  {propCourse?.other_used?.map((tech) => (
                    <li className="text-xl flex items-center gap-2">
                      <AiOutlineCheckCircle className="text-green-900" />
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {/* <p className="text-xl  ">
              Profesor:{' '}
              <span className="text-xl font-light ">
                {propCourse.shortName}
              </span>
            </p>
            <p className="text-xl  ">
              Cantidad de horas:{' '}
              <span className="text-xl font-light ">{propCourse.type}</span>
            </p> */}
            <p>Deploy: {propCourse.url_deploy}</p>
            -ENPROGRESO-<p>Repositorio: {propCourse.url_deploy}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectContent;
