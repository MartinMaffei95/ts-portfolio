import { useState, useEffect } from 'react';
import { Carrousel } from '../Carrousel/Carrouse';
import { education } from '../../data/education';
import { categories } from '../../data/categories';
import { Course } from '../../interfaces/data.interface';
const EducationComponent = () => {
  // bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700
  // console.log(education, categories);

  const [category, setCategory] = useState<string>('Javascript');
  const [coursesToRender, setCouresesToRender] = useState<
    Course[] | undefined
  >();
  useEffect(() => {
    if (category) {
      const courses = education.filter((course) =>
        course.tags.includes(category)
      );
      setCouresesToRender(courses);
    }
  }, [category]);
  return (
    <div className="flex flex-col p-6 min-h-full bg-slate-800 border-b-2 border-gray-400">
      <h3 className="section-title text-neutral-200">Formación</h3>

      <div className="flex flex-wrap gap-4 justify-center mt-8 mb-8">
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
      <Carrousel mobile coursesToRender={coursesToRender} />
    </div>
  );
};

export default EducationComponent;
