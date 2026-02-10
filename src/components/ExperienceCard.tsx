import { Pill } from "../common/Pill";

// components/ExperienceCard.tsx
interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  link?: string;
}

export const ExperienceCard = ({
  date,
  title,
  company,
  description,
  skills,
  link,
}: ExperienceCardProps) => {
  const CardWrapper = link ? "a" : "div";

  return (
    <CardWrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className={`
        group relative flex gap-10 p-6 min-w-140
        transition-all sm:gap-8 md:gap-4 h-fit max-w-200
        rounded-md
      dark:hover:bg-slate-800/50 hover:shadow-lg
      hover:bg-[rgb(228,230,195,.15)]
        ${link ? "cursor-pointer" : ""}
      `}
    >
      {/* Date */}
      <header className="z-1 mb-2 mt-1 text-xs font-semibold uppercase text-slate-500 min-w-50">
        {date}
      </header>

      {/* Content */}
      <div className="z-2">
        <h3 className="font-medium text-slate-800 dark:text-slate-200">
          <div>
            {link ? (
              <span className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 dark:hover:text-teal-300 hover:text-[#F05D23]  focus-visible:text-teal-300 group/link text-base">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span className="flex flex-row">
                  {title} · {company}
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
                </span>
              </span>
            ) : (
              <span>
                {title} · {company}
              </span>
            )}
          </div>
        </h3>

        <p className="mt-2 text-sm text-slate-400 min-w-[100]">{description}</p>

        {/* Skills */}
        {skills.length > 0 && (
          <ul
            className="mt-2 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {skills.map((skill) => (
              <li key={skill}>
                <Pill skill={skill} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </CardWrapper>
  );
};
