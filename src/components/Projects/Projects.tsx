import { useState, useContext } from 'react';
import { Project } from '../../interfaces/data.interface';
import { projects } from '../../data/projects';
import ModalContext from '../../context/Modal/ModalContext';
import { useResize } from '../../Hooks/useResize';
import Section from '../Section/Section';
import Title from '../Title/Title';
import { Image } from '@chakra-ui/react';
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
        className="w-full grid grid-cols-2 gap-4
        auto-rows-fr
      border bg-opacity-80
      backdrop-blur
      rounded-lg
      overflow-hidden
      duration-200
      shadow-inner
    shadow-neutral-300
    from-neutral-200
to-neutral-400
text-neutral-600

    

      bg-gradient-to-tr
    
        relative
      "
      >
        {
          <>
            <div className="flex flex-col items-center justify-around w-full h-full  p-2 ">
              <h3 className=" text-slate-900 font-bold text-center">
                {project.name}
              </h3>
              <p className="text-center">{project.description}</p>
              <p className="font-light">{project.shortName}</p>
              <button
                onClick={openModal}
                className=" bg-slate-700 font-bold text-lg mt-2 mb-2"
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
              <Image
                className="top-0 left-0 h-full w-full object-cover"
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
    <Section extraCss="bg-neutral-900 text-neutral-100 flex flex-col gap-4">
      <Title title="Mis proyectos" />
      <div className={`flex flex-wrap gap-4 justify-around `}>
        {allProjects
          ? allProjects.map((project, index) => (
              <ProjectCard
                project={project}
                flexDirectionReverse={index % 2 === 0 ? true : false}
              />
            ))
          : null}
      </div>
    </Section>
  );
};
