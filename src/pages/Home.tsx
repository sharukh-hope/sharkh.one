import { ExperienceCard } from "../components/ExperienceCard";
import { HeroSection } from "../components/HeroSection";
import { experiences } from "../constants/experiences";
import { projects } from "../constants/projects";

const Home = () => {
  const renderFooterLink = (link: string, text: string) => {
    return (
      <>
        {" "}
        <a
          className="dark:text-teal-400 text-orangeAccent"
          href={link}
          target="_blank"
        >
          {text}
        </a>
      </>
    );
  };
  return (
    <div className="mainSection flex flex-row gap-30 max-lg:flex-col max-lg:gap-8">
      <HeroSection />
      <div className="flex flex-col">
        <div className="flex flex-col">
          {experiences.map(({ date, timeline }, index) => (
            <ul className="flex flex-col mb-20 last:mb-10" key={index}>
              <li
                className="z-1 mb-1 text-xs font-semibold uppercase text-slate-500 min-w-40 ml-6
          sticky top-22 dark:bg-transparent max-md:dark:backdrop-blur-lg 
          max-md:top-0 max-md:z-10 max-md:min-w-screen max-md:py-4 max-md:px-6 max-md:ml-0 max-md:bg-beige max-md:dark:bg-transparent"
              >
                {date}
              </li>
              <ul key={index} className="my-6 mb-5 max-md:my-0">
                {timeline.map((exp, index) => (
                  <ExperienceCard {...exp} key={index} />
                ))}
              </ul>
            </ul>
          ))}
        </div>
        <a
          href="/Sharukh Babu - resume.pdf"
          target="_blank"
          className="text-orangeAccent dark:text-teal-300 cursor-pointer mb-10 text-right flex justify-end group max-w-200 p-6"
        >
          View full resume here{" "}
          <svg
            className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <h3 className="md:hidden text-slate-500 px-6">Projects</h3>
        <ul className="flex flex-col">
          {projects.map((exp, index) => (
            <li key={index} className="my-2 mb-10">
              <ExperienceCard {...exp} />
            </li>
          ))}
        </ul>
        <footer className="text-slate-500 py-20 px-6 text-sm font-light">
          Inspired from several portfolios from
          {renderFooterLink("https://www.reddit.com/r/webdev", "Reddit")} -
          Built by yours truly with{" "}
          {renderFooterLink("https://nextjs.org/", "Next.js")}
          {", "}Typescript, and
          {renderFooterLink("https://tailwindcss.com/", "Tailwind ")}(learnt on
          the go for this), deployed with
          {renderFooterLink("https://vercel.com/", "Vercel")}.
        </footer>
      </div>
    </div>
  );
};

export default Home;
