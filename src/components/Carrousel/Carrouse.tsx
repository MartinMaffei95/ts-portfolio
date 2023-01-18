import { useState, MouseEvent, useEffect, useContext, useMemo } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ModalContext from '../../context/Modal/ModalContext';
import { Course } from '../../interfaces/data.interface';

type CarrouselProps = {
  mobile?: boolean;
  coursesToRender: Course[] | undefined;
  // handleModal: Function;
};

export const Carrousel = ({
  mobile = false,
  coursesToRender,
}: CarrouselProps) => {
  const { toggleModal } = useContext(ModalContext);
  const [courseSelected, setCourseSelected] = useState<Course | undefined>();
  const [carrouselOfCourses, setCarrouselOfCourses] = useState<
    Course[] | undefined
  >(coursesToRender);

  const [actualImage, setActualImage] = useState('');
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

        break;

      case 'BACKWARD':
        if (actualStep > 0) {
          setActualStep(actualStep - 1);
        } else {
          setActualStep(carrouselOfCourses.length - 1);
        }

        break;
    }
  };

  const memoVisor = useMemo(() => {
    if (carrouselOfCourses) {
      setCourseSelected(carrouselOfCourses[actualStep]);
      setActualImage(carrouselOfCourses[actualStep].image);
    }
  }, [actualStep]);

  useEffect(() => {
    if (coursesToRender) {
      setCarrouselOfCourses(coursesToRender);
      setActualImage(coursesToRender[0].image);
    }
  }, [coursesToRender]);

  if (mobile) {
    return (
      <div>
        <div className="tiny-sb snap-x snap-mandatory flex overflow-x-scroll gap-2 rounded ">
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
        <div className="relative w-full flex ">
          <img className="w-full" src={actualImage || ''} />
          <button
            className="bg-gray-400 text-3xl p-2 rounded-full absolute  top-2/4  left-0 opacity-90"
            onClick={() => handleImage('BACKWARD')}
          >
            <FaArrowLeft />
          </button>
          <button
            className="bg-gray-400 text-3xl p-2 rounded-full absolute top-2/4 right-0 opacity-90"
            onClick={() => handleImage('FORWARD')}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center p-2">
          {carrouselOfCourses
            ? carrouselOfCourses.map((course, i) => (
                <img
                  onClick={(e) => {
                    setActualStep(i);
                    setCourseSelected(course);
                    setActualImage(course.image);
                  }}
                  className="w-20"
                  src={course.image}
                />
              ))
            : null}
        </div>
        <button
          className="primary-button w-full"
          onClick={(e) => {
            if (toggleModal) {
              toggleModal({
                isOpen: true,
                type: 'COURSE',
                content: courseSelected,
              });
            }
          }}
        >
          Mas información
        </button>
      </div>
    );
  }
};
