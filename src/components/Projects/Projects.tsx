import { useState } from 'react';
import { Project } from '../../interfaces/data.interface';
import { projects } from '../../data/projects';
import { BsHexagonFill } from 'react-icons/bs';
type ProjectCardProps = {
  project: Project;
  flexDirectionReverse?: boolean;
};

export const ProjectCard = ({
  project,
  flexDirectionReverse = false,
}: ProjectCardProps) => {
  return (
    <div
      className={`bg-neutral-300 h-60 w-full relative rounded flex justify-between overflow-hidden ${
        flexDirectionReverse ? 'flex-row-reverse' : ''
      }`}
    >
      {
        <>
          <div className="flex flex-col items-center justify-around w-full h-full basis-2/4 p-2 ">
            <h3 className="subtitle text-slate-900 font-bold text-center">
              {project.name}
            </h3>
            <p className="text-center">{project.description}</p>
            {/* <span> Stack utilizado</span>

            <div className="flex justify-around gap-4  w-full">
              {project.stack_used ? (
                <ul>
                  {project.stack_used.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              ) : null}
              {project.stack_used ? (
                <ul>
                  {project.other_used.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              ) : null}
            </div> */}
            {/* <p className="">Deploy: {project.shortName}</p>
            <p className="">Repositorio: {project.shortName}</p> */}
            <p className="font-light">{project.shortName}</p>
            <button className="p-2 border text-lg font-bold w-full border-slate-500 rounded ">
              Ver más
            </button>
          </div>
          <div
            className={`basis-2/4 flex items-start  justify-self-end  ${
              flexDirectionReverse ? 'justify-start' : 'justify-end'
            }`}
          >
            <img
              className="top-0 left-0 object-contain"
              src={project.img_card}
            />
          </div>
        </>
      }
    </div>
  );
};

export const Projects = () => {
  const [allProjects, setAllProjects] = useState<Project[]>(projects);
  return (
    <div className="flex flex-wrap p-6 min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 gap-4 border-b-2 border-gray-400">
      <h3 className="section-title text-neutral-200">Mis proyectos</h3>

      {allProjects
        ? allProjects.map((project, index) => (
            <ProjectCard
              project={project}
              flexDirectionReverse={index % 2 === 0 ? true : false}
            />
          ))
        : null}
    </div>
  );
};
