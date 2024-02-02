import { AboutData } from "@/core/types";

export default function getAboutData(): Promise<AboutData> {
  return Promise.resolve(about);
}

const about = {
  short: `<p>
  Hello, I'm Minh Le, a web developer from Greenville, SC. I have a B.S. degree in Computer Science, which means I've got a solid grasp of C++, Java, SQL, operating systems, algorithms, data structures, and the usual stuff they cover in a computer science program.

  Web development is really what I love doing. I've been using HTML, CSS, and Javascript to build websites for about seven years. About two years ago, I started using TypeScript and now it's pretty much part of my everyday work. For most of my projects, I use ReactJS, NextJS, and TailwindCSS.
  
  Right now, I'm taking an algorithms course on Coursera to sharpen my coding skills and get ready for job interviews. I'm keeping track of what I learn in a journal, which you can check out on this website. I'm planning to take more courses soon, specifically in functional programming and cloud computing. At the same time, I'm working on my portfolio and creating new web apps, because building great websites is what I really enjoy. 
    </p>
    `,
  medium: `<p>
      I'm Minh Le. First and foremost, I am a web developer. Even though
      during my time at school, I primarily worked with C++ and Java, my
      true passion has always been web development. I hold a Bachelor of
      Science degree in Computer Science from San Jose State University,
      which means I know a little bit of everything. However, all I have
      been doing since graduating is building web apps. I am proficient in
      JavaScript and understand TypeScript well enough for daily use. I use
      ReactJS and NextJS to build most of my applications. I just started
      using TailwindCSS recently but already fall in love with it.
    </p>
    <p>
      Recently, as I have been working on my portfolio and preparing for job
      interviews, I have realized that I have just developed a new hobby:
      LEARNING. Every day, I feel the need to learn something new or find
      something that stimulates my brain. Otherwise, I would feel stagnant.
      This has marked the beginning of my lifelong learning journey. It is
      in these moments that I know I have chosen the right career. Being a
      developer means constantly learning and embracing new things.
    </p>
    <p>
      Another ambition of mine is to become a writer, a goal that I consider
      ambitious because English is not my native language. I have
      extensively been writing in Vietnamese, but it was only two years ago
      that writing in English posed a significant challenge for me. I have
      always dreamed of one day being able to write blog posts in English.
      Fortunately, now, I feel like that dream is almost within reach. The
      only thing left for me to do is to continue writing regularly.
    </p>`,
  long: `<p>
      This is the long version of my about section. This is the long version
      of my about section. This is the long version of my about section. This
      is the long version of my about section. This is the long version of my
      about section. This is the long version of my about section. This is the
      long version of my about section. This is the long version of my about
      section. This is the long version of my about section. This is the long
      version of my about section. This is the long version of my about
      section. This is the long version of my about section. This is the long
      </p>
      `,
};
