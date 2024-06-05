import fs from 'fs';
import path from 'path';
import Head from 'next/head';

export default async function Blog() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(jsonData);

  return (
    <main>
      <Head>
        <title>Blog Page</title>
        <meta name="blog nfactorial" content="Blog about live in nfactorial school" />
        <meta name="blog tips" content="Blog tips from mentor in incubator" />
        <meta name="blog list" content="Blog list in project and making it" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Blog Page</h1>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 border rounded shadow">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-500">{blog.date} by {blog.author}</p>
              <p className="mt-2">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
