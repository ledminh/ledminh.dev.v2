import Menu from "@/ui/landing_page/Menu";

export default function AboutPage() {
  return (
    <section>
      <Menu currentPage="ABOUT" />
      <div className="text-content px-2 md:max-h-[496px] md:overflow-y-scroll md:px-4">
        <p>
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
        </p>
      </div>
    </section>
  );
}
