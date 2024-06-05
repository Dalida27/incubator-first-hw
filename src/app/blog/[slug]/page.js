import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(jsonData);

  return blogs.map((blog) => ({
    slug: blog.title.toLowerCase().replace(/ /g, '-'),
  }));
}

export default async function BlogPost({ params }) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(jsonData);

  const blog = blogs.find((blog) => blog.title.toLowerCase().replace(/ /g, '-') === params.slug);

  if (!blog) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500">{blog.date} by {blog.author}</p>
      <p className="mt-2">{blog.description}</p>
    </div>
  );
}
