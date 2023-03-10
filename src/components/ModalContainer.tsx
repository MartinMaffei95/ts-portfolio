import { useState, useEffect, useRef, useContext } from 'react';
import { Course, Project } from '../interfaces/data.interface';
import { AiOutlineClose } from 'react-icons/ai';
import CourseContent from './EducationComponent/CoursesContent';
import ModalContext from '../context/Modal/ModalContext';
import ProjectContent from './Projects/ProjectContent';
import { useResize } from '../Hooks/useResize';

export const ModalContainer = () => {
  const { toggleModal, isOpen, type, content } = useContext(ModalContext);

  const { actualWidth } = useResize();

  const closeModal = () => {
    if (toggleModal) {
      toggleModal({ isOpen: false, type: '', content: {} });
    }
  };

  return (
    <div
      style={{ scrollbarWidth: 'thin' }}
      className="bg-neutral-900 bg-opacity-80 fixed top-0 left-0 w-screen h-screen max-h-screen max-w-screen min-h-screen min-w-screen z-50 p-6 overflow-hidden flex justify-center"
    >
      <div
        className={`bg-neutral-200 flex max-h-full max-w-full min-h-full rounded relative overflow-y-scroll overflow-hidden tiny-sb ${
          actualWidth > 768
            ? 'max-w-[65%] min-w-[60%]'
            : 'max-w-[90%] min-w-[90%]'
        }`}
      >
        <button
          className="fixed top-2 right-2 bg-slate-50 bg-opacity-75 h-8 w-8 rounded-full flex justify-center items-center"
          onClick={closeModal}
        >
          <AiOutlineClose className="text-xl font-bold" />
        </button>
        {type === 'COURSE' ? (
          <CourseContent course={content as Course} />
        ) : type === 'PROJECT' ? (
          <ProjectContent project={content as Project} />
        ) : null}
      </div>
    </div>
  );
};
