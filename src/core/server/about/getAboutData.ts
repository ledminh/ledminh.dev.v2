import { AboutData } from "@/core/types";

export default function getAboutData(): Promise<AboutData> {
  return Promise.resolve(about);
}

const about = {
  short: `
  Hello
  `,
  medium: `<p>
    Hello, I'm Minh Le, a web developer from Greenville, SC. I have a B.S. 
    degree in Computer Science from San Jose State University, which means I know a little bit of everything, Java, C++, SQL, operating systems, algorithms, data structures, and you know, the usual stuffs they cover in a computer science program.
  </p>
  <p>
    Web development is really what I love doing. I've been using HTML, CSS, and Javascript to build websites for about seven years. About two years ago, I started using TypeScript and now it's pretty much part of my everyday work. For most of my projects, I use ReactJS, NextJS, and TailwindCSS.
  </p>
  <p>
    Right now, I'm taking an algorithms course on Coursera to sharpen my coding skills and get ready for job interviews. I build an app called Learning Journal, which you can find on this website, to keep track of what I learn. I'm planning to take more courses soon, specifically in functional programming and cloud computing. At the same time, I'm working on my portfolio and creating new web apps, because building 
    beafutiful websites is what I really enjoy.
  </p>
  `,
  long: `<p>
  The story began nearly twenty-five years ago with the arrival of the Internet in Vietnam, and I was struck by it. I would spend countless hours at the computer, browsing through website after website. It was not long before I discovered that many of these sites were hosted on a platform called GeoCities, prompting me to try my hand at creating my own website. Lacking any programming knowledge at that time, I turned to Microsoft FrontPage, which proved to be good enough to get the job done. It felt akin to using Microsoft Word, yet with a unique set of structures. Gradually, as I explored and created more websites, I began to grasp the basics of HTML.
  </p>
  <p>
  After graduating from high school, like many Asian youths looking to fulfill their parents' aspirations, I entered medical school. Amid the rigorous demands of my studies, my fascination with building website never waned. I noticed the absence of online forum platforms catering specifically to medical students. Seizing this opportunity, I set up a forum. Rather, I sourced a free forum script (IBP forum) and managed to install it on a server. It became the first online medical forum in Vietnam, eventually garnering a community of over 8000 users at its peak. The forum was built on PHP and powered by a MySQL database, and I was the only person who had responsibility for all administrative and technical issues. At times, I was the sole defender against DDoS attacks. This role afforded me a basic understanding of PHP and MySQL—not enough to write code, but sufficient to understand its functionalities. This experience sparked a desire within me to learn coding, to be self-reliant in enhancing and keeping the forum without the constant need to scour the internet for plugins, tutorials, and troubleshooting guides. However, I had never had time for that. I moved on, graduated, and became an ultrasonologist.
  </p>
  <p> 
  Due to family reasons, I moved to the U.S. a decade ago. It was then that I decided to pursue my passion and study computer science. I was determined to seize this last opportunity to chase the career I had long dreamt of. Immersing myself in my studies, I faced numerous challenges. Juggling jobs at school and a restaurant to make ends meet consumed much of my time and energy. Additionally, language barriers hindered my comprehension and retention of course material.
  </p>
  <p>
  Despite these hurdles, I dedicated myself to my education and graduated from San Jose State University with a B.S. in Computer Science and a GPA of 3.6. However, my intense focus on studies meant that my speaking and social skills lagged behind. As an introvert majoring in a field that didn't require me to talk much, I spent most of my time in solitude, working on assignments and trying to grasp complex concepts. Consequently, upon graduation, I struggled to form simple English sentences and often found myself unable to engage in basic conversations.
  </p>
  <p>
  My lack of confidence was further worsened by past humiliating experiences, making the thought of job interviews daunting. My fears materialized during an online interview where I was unable to communicate effectively, leading to an awkward encounter. The onset of the Covid-19 pandemic and the later lockdowns seemed to offer a reprieve, as many turned to day trading. I too thought I could make a living from it, attracted by the prospect of working alone with just a laptop.
  </p>
  <p>
  However, day trading turned out to be fraught with emotional ups and downs, stress, and uncertainty. After 18 months of learning and trading, I had earned enough to get by, but my social and speaking skills had deteriorated further. The isolation and relentless focus on trading consumed me to the point of exhaustion. A significant financial loss served as a stark wake-up call, prompting me to re-evaluate my life. I realized that my speaking and social skills had declined alarmingly, hindering even basic communication in both Vietnamese and English.
  </p>
  <p>
  I reminded myself that my goal in moving to the U.S. and spending seven years here wasn't to end up isolated, with an unstable income, and struggling with communication. My aspirations were far different. 
  </p>
  <p>
  Determined to change my circumstances, I enrolled in online English and pronunciation courses offered by platforms like Lingoda and Cambly. I also committed to reading books for at least an hour each day. After a year of consistent practice, I was confidently engaging in short conversations. Six months after that, my English had improved to a point where I felt I had transitioned from learning to maintaining my language skills. With my communication skills secured, I now have the time and confidence to refocus on honing my technical skills in computer science.
  </p>
  <p>
  During my time at school, I learned the fundamentals of computer science, mainly working with Java and C++.  However, I did not forget what I was really passionate about, which is web development. I built web apps on and off with HTML, CSS and JavaScript. I also learned some frameworks and libraries for web development, such as jQuery, D3, SASS, and React, but not enough to build a professional web app. With this come back, I've started using Next.js for most of my projects. I signed up for FrontendMaster and learned TypeScript from their courses. Since then, TypeScript has become the only language I use for programming. TailwindCSS is my latest discovery, and I've quickly grown to love it.
  </p>
  <p>
  Another six months have passed, I am gaining event more confidence in my English skill and web programming starts to click. Developing an app from an idea has become easier. I decided to revisit the core concepts of computer science. I'm currently taking an algorithms course on Coursera to refresh my memory and practicing on Leetcode daily. Despite a slow pace and frequent reliance on solutions, I'm steadfast in my commitment to improve. I'm optimistic that, in time, my programming skills will mirror my English proficiency, enabling me to effortlessly solve complex problems and articulate the underlying algorithms clearly during interviews.
  </p>
  <p>
  I developed an app called Learning Journal, designed to track and document my learning progress. It functioned as a compact blog, dedicated solely to recording new knowledge. Regularly writing in this journal reignited my passion for writing. In fact, I wrote a lot in Vietnamese. During my time at San Jose State University, I co-authored a book discussing vaccines and the anti-vaccine movement, which was published in Vietnam. But I had never thought that one day, I would write in English about programming. But now, I think the dream has become within reach. Currently, I document my learning journey in the Learning Journal and practice articulating these concepts aloud every day. I hope that one day, I would become an English blogger and share programming insights on YouTube, and ultimately, land a job where I can code and talk about code all days. Although I'm currently progressing slowly on Leetcode and finding it challenging to explain complex algorithms, I believe I will get there, eventually.
  </p>
  <p>
  I realize that being open about my background may influence job opportunities, but I believe it's important for potential employers to know my true story. If my past doesn't fit a job, I understand. I prefer honesty over misrepresenting myself. I'm hopeful that if someone sees value in my journey and chooses to work with me, it will be a mutually beneficial relationship. I'm also confident that by continually improving my skills, I'll open up more opportunities in the future.
  </p>  
  `,
};
