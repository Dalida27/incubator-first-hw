import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(jsonData);

  const latestPost = blogs[0];

  return (
    <>
      <Head>
        <title>Blog Project Home</title>
        <meta name="main nfactorial" content="main NFactorial blog" />
        <meta name="main incubator" content="making project in incubator" />
        <meta name="main blog" content="the main page of blog project" />
      </Head>
      <div className="mx-auto p-4 md:p-6 lg:p-8 lg:w-8/12 lg:m-auto">
        <h1 className="text-3xl font-bold mb-4 text-center pt-5 md:text-4xl lg:text-5xl">Welcome to my blog site!</h1>
        <p className="text-center md:text-lg lg:text-xl">This is blog about tips from our mentors</p>
        {latestPost && (
          <div className="mt-12 md:mt-16 lg:mt-20 md:w-1/2 lg:w-8/12 mx-auto">
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl lg:mb-3">Latest Post:</h2>
            <div className="p-4 border border-gray-200 rounded shadow-md md:p-6 lg:p-8">
              <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">{latestPost.title}</h3>
              <p className="text-gray-500 md:text-lg lg:text-xl">{latestPost.date} by {latestPost.author}</p>
              <p className="mt-2 md:mt-4 lg:mt-6">{latestPost.description}</p>
            </div>
            <Link href="/blog">
              <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8 lg:mt-3">
                Go to Blogs!
              </button>
            </Link>
          </div>
        )}
        <div className="w-full md:w-2/3 lg:w-full mx-auto mt-12 md:mt-16 lg:mt-20">
          <img className="mx-auto mb-7 md:mb-10 lg:mb-12" src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png" />
          <p className="mb-10 md:mb-12 lg:mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus. At tellus at urna condimentum mattis pellentesque id nibh. Sed vulputate mi sit amet mauris. Amet tellus cras adipiscing enim. Gravida quis blandit turpis cursus in hac habitasse platea. Eu mi bibendum neque egestas congue quisque</p>
        </div>
      </div>
    </>
  );
}