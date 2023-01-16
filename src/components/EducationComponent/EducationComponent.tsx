import { useState, useEffect } from 'react';
import { Carrousel } from '../Carrousel/Carrouse';
import { education } from '../../data/education';
import { categories } from '../../data/categories';
import { Course } from '../../interfaces/data.interface';
const EducationComponent = () => {
  // bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700
  // console.log(education, categories);

  const [category, setCategory] = useState<string>();
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
    <div className="flex flex-col p-6 min-h-full bg-slate-800">
      <div className="flex flex-wrap gap-4 justify-center mt-8 mb-8">
        {categories.map((cat) => (
          <div
            className={`overflow-hidden flex flex-col justify-center items-center  ${
              category === cat.name ? 'border-white-2 border' : ''
            }`}
            onClick={() => {
              setCategory(cat.name);
            }}
          >
            <span className="text-xl text-gray-300 font-semibold">
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
