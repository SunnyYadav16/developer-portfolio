// import { projectsData } from '@/utils/data/projects-data';
// import ProjectCard from './project-card';
//
// const Projects = () => {
//
//   return (
//     <div id='projects' className="relative z-50  my-12 lg:my-24">
//       <div className="sticky top-10">
//         <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
//         <div className="flex items-center justify-start relative">
//           <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
//             PROJECTS
//           </span>
//           <span className="w-full h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>
//
//       <div className="pt-24">
//         <div className="flex flex-col gap-6">
//           {projectsData.slice(0, 4).map((project, index) => (
//             <div
//               id={`sticky-card-${index + 1}`}
//               key={index}
//               className="sticky-card w-full mx-auto max-w-2xl sticky"
//             >
//               <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
//                 <ProjectCard project={project} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Projects;

// @flow strict
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  return (
      <div id="projects" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>

        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {projectsData.slice(0, 6).map((project, index) => (
              <div key={index}>
                <ProjectCard project={project} />
              </div>
          ))}
        </div>

        {/*<div className="flex justify-center mt-5 lg:mt-12">*/}
        {/*  <Link*/}
        {/*      className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"*/}
        {/*      role="button"*/}
        {/*      href="/projects"*/}
        {/*  >*/}
        {/*    <span>View More</span>*/}
        {/*    <FaArrowRight size={16} />*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
  );
};

export default Projects;