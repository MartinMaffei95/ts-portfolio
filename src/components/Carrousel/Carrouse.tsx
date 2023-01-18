import { useState, MouseEvent, useEffect, useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ModalContext from '../../context/Modal/ModalContext';
import { Course } from '../../interfaces/data.interface';

type CarrouselProps = {
  mobile: boolean;
  coursesToRender: Course[] | undefined;
  // handleModal: Function;
};

export const Carrousel = ({
  mobile = true,
  coursesToRender,
}: CarrouselProps) => {
  const { toggleModal } = useContext(ModalContext);
  const [courseSelected, setCourseSelected] = useState<Course | undefined>();
  const [carrouselOfCourses, setCarrouselOfCourses] = useState<
    Course[] | undefined
  >(coursesToRender);
  const [actualStep, setActualStep] = useState<number>(0);

  const selectImageCourse = (e: MouseEvent<HTMLImageElement>): void => {
    const course_id = e.currentTarget.id;
    const course = carrouselOfCourses?.find((c) => c.id === course_id);
    setCourseSelected(course);
    if (toggleModal) {
      toggleModal({ isOpen: true, type: 'COURSE', content: course });
    }
  };
  const handleImage = (moveTo: string) => {
    if (!carrouselOfCourses) return;
    switch (moveTo) {
      case 'FORWARD':
        if (actualStep < carrouselOfCourses.length - 1) {
          setActualStep(actualStep + 1);
        } else {
          setActualStep(0);
        }
        setCourseSelected(carrouselOfCourses[actualStep]);
        break;
      case 'BACKWARD':
        if (actualStep > 0) {
          setActualStep(actualStep - 1);
        } else {
          setActualStep(carrouselOfCourses.length - 1);
        }
        setCourseSelected(carrouselOfCourses[actualStep]);
        break;
    }

    setCourseSelected(carrouselOfCourses[actualStep]);
  };
  useEffect(() => {
    setCarrouselOfCourses(coursesToRender);
  }, [coursesToRender]);
  if (mobile) {
    return (
      <div>
        <div className=" snap-x snap-mandatory flex overflow-x-scroll gap-2 rounded">
          {carrouselOfCourses
            ? carrouselOfCourses.map((course) => (
                <img
                  onClick={(e) => selectImageCourse(e)}
                  className="snap-center w-11/12  max-w-full min-w-[91.666667%]"
                  key={course.id}
                  id={course.id}
                  src={course.image}
                />
              ))
            : null}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="relative w-full flex">
          <img className="w-full" src={courseSelected?.image || ''} />
          <button
            className="bg-gray-400 text-3xl p-2 rounded-full absolute  top-1/3  left-0 opacity-90"
            onClick={() => handleImage('BACKWARD')}
          >
            <FaArrowLeft />
          </button>
          <button
            className="bg-gray-400 text-3xl p-2 rounded-full absolute top-1/3 right-0 opacity-90"
            onClick={() => handleImage('FORWARD')}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center p-2">
          {carrouselOfCourses
            ? carrouselOfCourses.map((course) => (
                <img
                  onClick={(e) => selectImageCourse(e)}
                  className="w-20"
                  src={course.image}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
};
