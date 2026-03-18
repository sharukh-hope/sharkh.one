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
        {experiences.map(({ date, timeline }, index) => (
          <ul className="flex flex-col mb-20" key={index}>
            <li
              className="z-1 mb-1 text-xs font-semibold uppercase text-slate-500 min-w-40 ml-6
          sticky top-22 dark:bg-transparent max-md:dark:backdrop-blur-lg 
          max-md:top-0 max-md:z-10 max-md:min-w-screen max-md:py-4 max-md:px-6 max-md:ml-0 max-md:bg-[#f7f7f2] max-md:dark:bg-transparent"
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
