import { useState, useEffect } from 'react';
import { Carrousel } from '../Carrousel/Carrouse';
import { education } from '../../data/education';
import { categories } from '../../data/categories';
import { Course } from '../../interfaces/data.interface';
import { useResize } from '../../Hooks/useResize';
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
    <div
      className={`section-bg bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 `}
    >
      <h3 id="formation" className="section-title text-neutral-200">
        Formación
      </h3>
      <div
        className={`flex ${
          actualWidth > 768 ? 'flex-row-reverse' : 'flex-col'
        } `}
      >
        <div className="flex flex-wrap gap-4 justify-center items-center h-2/3 w-2/5 m-auto  ">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`overflow-hidden flex flex-col justify-center items-center h-24 w-24 rounded transition ${
                category === cat.name
                  ? 'bg-slate-700 shadow-md shadow-slate-600/50 drop-shadow-md'
                  : ''
              }`}
              onClick={() => {
                setCategory(cat.name);
              }}
            >
              <span className="text-xl text-gray-300 font-semibold w-full text-center">
                {cat.name}
              </span>
              <img className="h-16 w-16 " src={cat.src} />
            </div>
          ))}
        </div>
        <div className="w-3/5">
          {actualWidth && actualWidth > 768 ? (
            <Carrousel coursesToRender={coursesToRender} />
          ) : (
            <Carrousel mobile coursesToRender={coursesToRender} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
