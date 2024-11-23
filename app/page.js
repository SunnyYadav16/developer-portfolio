import {personalData} from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import {parse} from 'rss-to-json';

// async function getData() {
//   // const res = await fetch(`https://dev.to/api/articles?username=${personalData.mediumUsername}`)
//   // const res = await fetch(`https://medium.com/@${personalData.mediumUsername}/latest?format=json`)
//   const res = await fetch(`https://medium.com/@sunny_yadav/latest?format=json`)
//
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//
//   const data = await res.json();
//
//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
//
//   return filtered;
// };

async function getData() {
  try {
    const rss = await parse(
        `https://medium.com/feed/@${personalData.mediumUsername}`);

    // Transform the RSS data to match your existing structure
    const transformed = rss.items.map(item => ({
      title: item.title,
      description: item.description,
      cover_image: item.content.match(/<img[^>]+src="([^">]+)"/)?.[1] || '',
      url: item.link,
      published_at: item.published,
      reading_time_minutes: Math.ceil(item.content.split(' ').length / 200), // Rough estimate
      tag_list: item.category || []
    }));
    console.log(rss)
    console.log(transformed)

    // Filter posts with cover images and randomize
    const filtered = transformed
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);

    return filtered;
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    return [];
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
      <>
        <HeroSection/>
        <AboutSection/>
        <Education/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Blog blogs={blogs}/>
        <ContactSection/>
      </>
  )
};