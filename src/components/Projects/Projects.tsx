import { useState, useContext } from 'react';
import { Project } from '../../interfaces/data.interface';
import { projects } from '../../data/projects';
import { BsHexagonFill } from 'react-icons/bs';
import ModalContext from '../../context/Modal/ModalContext';
type ProjectCardProps = {
  project: Project;
  flexDirectionReverse?: boolean;
};

export const ProjectCard = ({
  project,
  flexDirectionReverse = false,
}: ProjectCardProps) => {
  const { toggleModal, isOpen, type, content } = useContext(ModalContext);

  const openModal = () => {
    console.log(project);
    if (toggleModal) {
      toggleModal({ isOpen: true, type: 'PROJECT', content: project });
    }
  };
  return (
    <div
      className={`bg-neutral-300 h-60 w-full relative rounded flex justify-between overflow-hidden ${
        flexDirectionReverse ? 'flex-row-reverse' : ''
      }`}
    >
      {
        <>
          {/* basis-2/4 */}
          <div className="flex flex-col items-center justify-around w-full h-full  p-2 ">
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
            <button
              onClick={openModal}
              className="btn-input bg-slate-700 font-bold text-lg mt-2 mb-2"
            >
              Ver más
            </button>
          </div>
          <div
            // basis-2/4
            className={`flex items-start justify-self-end bg-black basis-3/4 ${
              flexDirectionReverse ? 'justify-start' : 'justify-end'
            }`}
          >
            <img
              className="top-0 left-0 h-full w-full object-contain"
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
      <h3 id="projects" className="section-title text-neutral-200">
        Mis proyectos
      </h3>

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
