import { useState, useEffect } from 'react';
import { Carrousel } from '../Carrousel/Carrouse';
import { education } from '../../data/education';
import { categories } from '../../data/categories';
import { Course } from '../../interfaces/data.interface';
import { useResize } from '../../Hooks/useResize';
import { Heading } from '@chakra-ui/react';
import Section from '../Section/Section';
import Title from '../Title/Title';
const EducationComponent = () => {
  // bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700
  // console.log(education, categories);

  const [category, setCategory] = useState<string>('Javascript');
  const [coursesToRender, setCouresesToRender] = useState<
    Course[] | undefined
  >();

  const { actualWidth } = useResize();
  useEffect(() => {
    if (category) {
      const courses = education.filter((course) =>
        course.tags.includes(category)
      );
      setCouresesToRender(courses);
    }
  }, [category]);
  return (
    <Section extraCss="pt-0 bg-neutral-300 flex flex-col gap-4">
      <div className="flex  items-baseline gap-4">
        <Title title="Formacion" />
        <span className="font-shoulders text-4xl">&</span>
        <Title title="Skills" />
      </div>

      <div className={`flex flex-col`}>
        <div className="bg-green-800 gap-2 grid grid-cols-2 ">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="bg-red-500 "
              onClick={() => {
                setCategory(cat.name);
              }}
            >
              <span>{cat.name}</span>
              <img className="h-16 w-16 " src={cat.src} />
            </button>
          ))}
        </div>
        <div className={` ${actualWidth > 768 ? 'w-3/5' : ' w-full mt-4'} `}>
          {actualWidth && actualWidth > 768 ? (
            <Carrousel coursesToRender={coursesToRender} />
          ) : (
            <Carrousel mobile coursesToRender={coursesToRender} />
          )}
        </div>
      </div>
    </Section>
  );
};

export default EducationComponent;
