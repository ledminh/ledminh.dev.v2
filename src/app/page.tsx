export default function Home() {
  return (
    <main className="h-screen flex justify-start items-start flex-col gap-4 p-4">
      <h1 className="text-7xl font-bold border-b-8 border-gray-200 pb-4">
        MINH LE
      </h1>
      <section>
        <h2>ABOUT ME</h2>
        <div className="flex flex-col gap-2">
          <p>
            I'm Minh Le, a web developer based in Greenville, South Carolina. I
            hold a Bachelor of Science degree in Computer Science from San Jose
            State University. During my time in school, I primarily worked with
            C++ and Java for most of my projects, but my true passion has always
            been web development. As a result, I've been consistently building
            web apps since graduating.
          </p>
          <p>
            Unfortunately, upon graduation, the COVID-19 pandemic struck, posing
            challenges in my job search. Consequently, I opted to pursue day
            trading from home, resulting in a three-year gap in my resume. While
            day trading helped me maintain a stable living situation, it did
            impact my English proficiency, particularly in speaking. Just a year
            ago, I struggled to form coherent sentences in English. Recognizing
            this, I dedicated myself to daily practice, involving self-talk,
            pronunciation training, reading, and writing. Now, I can confidently
            say that I speak English fluently and am ready to rejoin the
            workforce.
          </p>
          <p>
            I am proficient in JavaScript and understand TypeScript well enough
            for daily use. I primarily use ReactJS and NextJS to build
            applications. I just started using TailwindCSS recently but already
            fall in love with it. My objective is to continue expanding my
            knowledge in web development. Currently, I am enrolled in AWS
            courses with the hope of one day becoming proficient in full-stack
            development, such that I can build a whole web app without help from
            other services.
          </p>
        </div>
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
