import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'KryptoStream',
    description: 'My team and I developed an interactive multimedia platform that utilizes blockchain technology to provide rewards. I utilized Express, TypeScript, AWS, and MongoDB to create an API for managing video content and quiz systems. User authentication was implemented through Google and Facebook. A dynamic leaderboard system was constructed for real-time competition tracking. The platform incorporates an API-driven video player that seamlessly integrates with content-based quizzes. Users are rewarded with blockchain-based tokens for their engagement and quiz performance. The system provides real-time updates for user rankings and reward distribution, thereby enhancing the overall interactive experience.',
    shortDescription: 'Developed an interactive multimedia platform with blockchain rewards, featuring video content, quizzes, and social authentication.',
    tools: ['React', 'JavaScript', 'Node.js', 'Express', 'Stacks', 'Hiro',
      'Groq Cloud'],
    role: 'Backend Developer',
    code: '',
    demo: '',
    image: crefin,
  },
  {
    id: 2,
    name: 'Disruptive Connections',
    description: 'In my professional experience, I have designed and implemented high-performance middleware solutions utilizing Golang. My expertise encompasses the development of robust data validation mechanisms and asynchronous processing systems. I have successfully optimized inter-service data transfer by implementing enhanced error handling and streamlined workflow efficiency through the integration of Celery task management. Furthermore, I have specialized in developing reliable backend architectures specifically designed for order processing and ensuring data integrity across multiple services.',
    shortDescription: 'Developed high-performance Golang middleware solutions with asynchronous processing and data validation.',
    tools: ['Go', 'Gin', "PostgreSQL", "Google Cloud Services", "Celery"],
    role: 'Backend Developer',
    code: '',
    demo: '',
    image: travel,
  },
  {
    id: 3,
    name: 'Dev World Collaboration',
    description: 'I developed a collaborative web platform utilizing Python and Django, implementing a comprehensive Model-View-Template (MVT) architecture for technical professionals to share projects and expertise. I constructed robust user authentication systems and CRUD operations, ensuring efficient database management with PostgreSQL. The platform facilitates seamless profile management and project-sharing capabilities.',
    shortDescription: 'Built a Django-based collaborative platform for technical professionals to share projects and expertise, featuring robust authentication and PostgreSQL database management.',
    tools: ['Python', 'Django', 'PostgreSQL'],
    code: '',
    role: 'Full Stack Developer',
    demo: '',
    image: realEstate,
  },
  {
    id: 4,
    name: 'Fitness Application',
    description: 'I designed an iOS-based fitness application that incorporates healthcare communication capabilities. This comprehensive platform facilitates wellness tracking and patient care. I developed an intuitive user interface that facilitates direct communication between patients and healthcare teams, providing real-time feedback. The platform simplifies fitness tracking while enabling meaningful interactions between patients and healthcare providers, thereby improving the overall quality of health monitoring and care delivery.',
    shortDescription: 'Designed an iOS fitness application with integrated healthcare communication capabilities, enabling real-time patient-provider interactions.',
    tools: ['Python', 'Fast API', 'AWS', 'Docker', 'Redis', 'SendGrid',
      'PostgreSQL'],
    code: '',
    demo: '',
    image: ayla,
    role: 'Backend Developer',
  }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },