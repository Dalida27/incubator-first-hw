import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About NFactorial School</title>
        <meta name="about nfactorial" content="About NFactorial School life and tips" />
        <meta name="about incubator" content="About incubator life and achievments" />
        <meta name="about proccess of blog" content="About making blog project for incubator" />
      </Head>
      <main>
        <div className="md:flex md:flex-col lg:w-8/12 lg:m-auto">
          <div className="lg:w-full m-auto pt-5 md:w-full md:p-6 lg:p-8">
            <h1 className='text-4xl text-center pb-3 font-semibold md:text-5xl lg:text-4xl'>About us</h1>
            <img src="https://www.lyfemarketing.com/blog/wp-content/uploads/2018/01/what-is-a-blog-website.png" alt="main page" className="md:w-1/2 lg:w-2/4 mx-auto"/>
            <p className="text-2xl font-semibold pt-3 md:text-3xl lg:text-2xl lg:text-center">Our blog is aiming to share and collect helpful information in our Incubator life!</p>
          </div>
          <div className="w-10/12 m-auto py-10 md:w-full md:p-6 lg:p-8">
            <p className="text-lg md:text-xl lg:text-xl lg:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus. At tellus at urna condimentum mattis pellentesque id nibh. Sed vulputate mi sit amet mauris. Amet tellus cras adipiscing enim. Gravida quis blandit turpis cursus in hac habitasse platea. Eu mi bibendum neque egestas congue quisque egestas diam in. Pharetra pharetra massa massa ultricies mi quis hendrerit. Mi in nulla posuere sollicitudin aliquam ultrices. Ac turpis egestas sed tempus urna et pharetra pharetra. Leo vel orci porta non pulvinar neque. Arcu non odio euismod lacinia at quis risus sed vulputate. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ipsum nunc aliquet bibendum enim facilisis gravida. Mauris nunc congue nisi vitae suscipit tellus mauris. Adipiscing enim eu turpis egestas pretium aenean. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Cras sed felis eget velit aliquet. Massa tempor nec feugiat nisl pretium fusce id. Lectus sit amet est placerat in egestas erat imperdiet. Varius vel pharetra vel turpis nunc eget lorem dolor. Fusce id velit ut tortor pretium viverra suspendisse potenti. At lectus urna duis convallis convallis tellus id interdum velit. Sem nulla pharetra diam sit amet nisl suscipit. Metus dictum at tempor commodo ullamcorper a. Elit ut aliquam purus sit. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Volutpat odio facilisis mauris sit. Morbi quis commodo odio aenean sed. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Ut placerat orci nulla pellentesque dignissim enim sit amet. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Ac turpis egestas integer eget aliquet nibh. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Dignissim enim sit amet venenatis urna cursus. Sed viverra tellus in hac habitasse platea dictumst.</p>
            <Link href="/blog">
              <button className='text-xl text-[#fff] bg-gray-900 px-2 py-3 rounded-lg mt-7 md:text-2xl lg:text-2xl'>Go to Blogs!</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}