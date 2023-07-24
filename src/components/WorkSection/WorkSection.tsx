import React from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import { works } from '../../data/work';
import steps from '../../assets/svg/steps-layered.svg';
import { Hide, Image, Show } from '@chakra-ui/react';

const WorkSection = () => {
  return (
    <Section extraCss="bg-neutral-900 text-neutral-100 flex flex-col gap-4 ">
      <Title title="Ultimos trabajos" />
      <div className="flex flex-col gap-4 md:flex-row md:grid md:grid-cols-2 md:auto-row-auto">
        {works?.slice(0, 3).map((job, index) => (
          <>
            <div className="text-xl bg-neutral-900 md:bg-neutral-700 md:rounded-md md:p-4">
              <h3>{job.title}</h3>
              <p className="text-base font-dosis font-normal">
                {job.description}
              </p>
              <h4 className="font-semibold text-base text-yellow-400">
                Tareas destacadas:
              </h4>
              <ul className="text-sm font-thin tracking-wider list-disc px-4 flex flex-col gap-2">
                {job.task_realized.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </div>
            {index + 1 < works?.slice(0, 3).length ? (
              <Hide above="sm">
                <span className="flex self-stretch w-[50%] h-[2px] rounded bg-yellow-400" />
              </Hide>
            ) : null}
          </>
        ))}
        <Show above="md">
          <div className="text-xl bg-neutral-900 md:bg-neutral-700 md:rounded-md md:p-4">
            Ver Todo
          </div>
        </Show>
      </div>
    </Section>
  );
};

export default WorkSection;
