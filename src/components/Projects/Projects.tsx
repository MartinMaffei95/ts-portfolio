import { useState, useContext } from 'react';
import { Project } from '../../interfaces/data.interface';
import { projects } from '../../data/projects';
import { BsHexagonFill } from 'react-icons/bs';
import ModalContext from '../../context/Modal/ModalContext';
import { useResize } from '../../Hooks/useResize';
import Section from '../Section/Section';
import Title from '../Title/Title';
type ProjectCardProps = {
  project: Project;
  flexDirectionReverse?: boolean;
};

export const ProjectCard = ({
  project,
  flexDirectionReverse = false,
}: ProjectCardProps) => {
  const { toggleModal, isOpen, type, content } = useContext(ModalContext);
  const { actualWidth } = useResize();
  const openModal = () => {
    console.log(project);
    if (toggleModal) {
      toggleModal({ isOpen: true, type: 'PROJECT', content: project });
    }
  };

  if (actualWidth <= 768) {
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
  } else {
    return (
      <div
        className={`bg-neutral-300 h-96 w-52 relative rounded flex flex-col justify-between overflow-hidden `}
      >
        <div className={`flex items-start justify-self-end bg-black `}>
          <img
            className="top-0 left-0 w-full h-24 object-cover"
            src={project.img_desktop}
          />
        </div>
        <div className="flex flex-col items-center justify-around w-full h-full  p-2 ">
          <h3 className="subtitle text-slate-900 font-bold text-center">
            {project.name}
          </h3>
          <p className="text-center">{project.description}</p>

          <p className="font-light">{project.shortName}</p>
          <button
            onClick={openModal}
            className="btn-input bg-slate-700 font-bold text-lg mt-2 mb-2"
          >
            Ver más
          </button>
        </div>
      </div>
    );
  }
};

export const Projects = () => {
  const [allProjects, setAllProjects] = useState<Project[]>(projects);
  return (
    <Section extraCss="bg-neutral-900 text-neutral-100">
      <Title title="Mis proyectos" />
      <div className={`flex flex-wrap gap-4 justify-around`}>
        {/* {allProjects
          ? allProjects.map((project, index) => (
              <ProjectCard
                project={project}
                flexDirectionReverse={index % 2 === 0 ? true : false}
              />
            ))
          : null} */}
      </div>
    </Section>
  );
};
