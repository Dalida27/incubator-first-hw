import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(jsonData);

  const paths = blogs.map((blog) => ({
    params: { slug: blog.title.toLowerCase().replace(/\s+/g, '-') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(jsonData);

  const blog = blogs.find((blog) => blog.title.toLowerCase().replace(/\s+/g, '-') === params.slug);

  return {
    props: {
      blog,
    },
  };
}

export default function BlogPost({ blog }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500">{blog.date} by {blog.author}</p>
      <p className="mt-4">{blog.description}</p>
    </div>
  );
}
