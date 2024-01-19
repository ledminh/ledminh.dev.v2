import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-start items-start flex-col gap-4 p-4">
      <h1>MINH LE</h1>
      <p className="subtitle">
        A web developer, a life-long learner, a writer-to-be
      </p>
      <Link href="/blog">
        <section className="border border-gray-400 p-4 rounded-lg shadow-md shadow-gray-400 hover:bg-gray-800">
          <h2>ABOUT ME</h2>
          <div className="text-content">
            <p>
              I'm Minh Le. First and foremost, I am a web developer. Even though
              during my time in school, I primarily worked with C++ and Java for
              most of my projects, my true passion has always been web
              development. I hold a Bachelor of Science degree in Computer
              Science from San Jose State University.I constantly building web
              apps. I am proficient in JavaScript and understand TypeScript well
              enough for daily use. I primarily use ReactJS and NextJS to build
              applications. I just started using TailwindCSS recently but
              already fall in love with it.
            </p>
            <p>
              Recently, when I am working myself to build a portfolio to be
              ready for applying for a job, I just got another hobby: learning.
              Everyday, I need to learn something new or at least find something
              to stimulate my brain. Otherwise, I will feel stagnant and being
              wasted of my time. As a result, I just start my journey of
              becomming a life-long learner. At this moment, I know that I
              choose the right job. To be a developer means constantly learning
              new things.
            </p>
            <p>
              Another ambition of mine is to become a writer. I said it is an
              ambition because English is not my mother toungue. I wrote a lot
              in Vietnamese but only 2 years agon, writing in English is still a
              challenge to me. I had always dreammed that one day I can write
              blog posts in English. Fortunately, now I feel like I can almost
              touch my dream. The only thing I need to do now is to keep writing
              regularly.
            </p>
          </div>
        </section>
      </Link>
      <section>
        <h2>SKILLS</h2>
        <ul className="flex gap-4">
          <li className="bg-blue-500 text-black p-2 font-semibold rounded-3xl">
            JavaScript
          </li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>TailwindCSS</li>
        </ul>
      </section>
      <section>
        <h2>PROJECTS</h2>
        <ul className="flex flex-col gap-2">
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>
      <section>
        <h2>CONTACT</h2>
        <ul className="flex flex-col gap-2">
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h2>LEARNING JOURNAL</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </section>
      <section>
        <h2>EDUCATION</h2>
        <ul>
          <li>San Jose State University</li>
          <li>De Anza College</li>
        </ul>
      </section>
    </main>
  );
}
