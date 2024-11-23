// @flow strict
import { personalData } from "@/utils/data/personal-data";
import { parse } from 'rss-to-json';

async function getBlog(slug) {
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
      tag_list: item.category || [],
      content: item.content
    }));

    // Find the specific blog post by matching the slug
    return transformed.find(post => post.url.includes(slug));
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    return null;
  }
}

async function BlogDetails({params}) {
  const slug = params.slug;
  const blog = await getBlog(slug);
 
  return (
    <div>
    </div>
  );
};

export default BlogDetails;