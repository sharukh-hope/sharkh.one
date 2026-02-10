import { ExperienceCard } from "./components/ExperienceCard";
import { HeroSection } from "./components/HeroSection";
import { experiences } from "./constants/experiences";

const Home = () => {
  return (
    <div className="mainSection flex flex-row gap-8">
      <HeroSection />
      <ul className="flex flex-col">
        {experiences.map((exp, index) => (
          <li key={index} className="my-6 mb-10">
            <ExperienceCard {...exp} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
