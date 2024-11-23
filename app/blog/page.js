// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

// async function getBlogs() {
//   // const res = await fetch(`https://dev.to/api/articles?username=${personalData.mediumUsername}`)
//   const res = await fetch(`https://medium.com/@${personalData.mediumUsername}/latest?format=json`)
//
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//
//   const data = await res.json();
//   return data;
// };

import { parse } from 'rss-to-json';

async function getBlogs() {
  try {
    const rss = await parse(`https://medium.com/feed/@${personalData.mediumUsername}`);

    // Transform the RSS data to match your existing structure
    const transformed = rss.items.map(item => ({
      title: item.title,
      description: item.description,
      cover_image: item.content.match(/<img[^>]+src="([^">]+)"/)?.[1] || '',
      url: item.link,
      published_at: item.published,
      reading_time_minutes: Math.ceil(item.content.split(' ').length / 200),
      tag_list: item.category || []
    }));

    return transformed.filter(item => item.cover_image);
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    return [];
  }
}

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;