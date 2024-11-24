// @flow strict
import * as React from 'react';

function ProjectCard({ project }) {
  return (
      <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group h-full">
        <div className="p-4 lg:p-6 flex flex-col h-full">

          <div className="flex-grow">
            <p className="text-xl lg:text-2xl font-semibold text-white mb-4 hover:text-violet-500 transition-colors">
              {project.name}
            </p>
            <p className="text-sm lg:text-base text-[#d3d8e8] line-clamp-4">
              {project.shortDescription}
            </p>
          </div>

          {/*<div className="flex items-center justify-between text-[#16f2b3] text-sm mb-4">*/}
          {/*  /!*<p className="font-medium">{project.role}</p>*!/*/}
          {/*  <div className="flex gap-2">*/}
          {/*    {project.tools.map((tool, index) => (*/}
          {/*        <span*/}
          {/*            key={index}*/}
          {/*            className="px-2 py-1 text-xs rounded-full bg-[#1a1443] text-white"*/}
          {/*        >*/}
          {/*      {tool}*/}
          {/*    </span>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                  <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-[#2d1b69] text-white hover:bg-[#3d2b79] transition-colors duration-300 cursor-default"
                  >
                {tool}
              </span>
              ))}
            </div>
          </div>

          {/*<div className="mt-6">*/}
          {/*  <div className="flex flex-row space-x-2">*/}
          {/*    <div className="h-3 w-3 rounded-full bg-red-400"></div>*/}
          {/*    <div className="h-3 w-3 rounded-full bg-orange-400"></div>*/}
          {/*    <div className="h-3 w-3 rounded-full bg-green-200"></div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
  );
}

export default ProjectCard;