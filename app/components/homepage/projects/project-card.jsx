// // @flow strict
//
// import * as React from 'react';
//
// function ProjectCard({ project }) {
//
//   return (
//     <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
//       <div className="flex flex-row">
//         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//         <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//       </div>
//       <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
//         <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
//         </div>
//         <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
//           {project.name}
//         </p>
//       </div>
//       <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
//         <code className="font-mono text-xs md:text-sm lg:text-base">
//           <div className="blink">
//             <span className="mr-2 text-white">project</span>
//             <span className="mr-2 text-pink-500">=</span>
//             <span className="mr-2 text-pink-500">Project</span>
//             <span className="text-gray-400">{'('}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
//             <span className="text-gray-400">{`'`}</span>
//             <span className="text-amber-300">{project.name}</span>
//             <span className="text-gray-400">{`',`}</span>
//           </div>
//
//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className=" text-white">tools:</span>
//             <span className="text-gray-400">{` ['`}</span>
//             {
//               project.tools.map((tag, i) => (
//                 <React.Fragment key={i}>
//                   <span className="text-amber-300">{tag}</span>
//                   {
//                     project.tools.length - 1 !== i &&
//                     <span className="text-gray-400">{`', '`}</span>
//                   }
//                 </React.Fragment>
//               ))
//             }
//             <span className="text-gray-400">{"],"}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">my_role:</span>
//             <span className="text-orange-400">{project.role}</span>
//             <span className="text-gray-400">,</span>
//           </div>
//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className="text-white">description:</span>
//             <span className="text-cyan-400">{' ' + project.description}</span>
//             <span className="text-gray-400">,</span>
//           </div>
//           <div><span className="text-gray-400">{`)`}</span></div>
//         </code>
//       </div>
//     </div>
//   );
// };
//
// export default ProjectCard;

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