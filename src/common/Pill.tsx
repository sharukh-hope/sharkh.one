// components/SkillPill.tsx
interface PillProps {
  skill: string;
  className?: string;
}

export const Pill = ({ skill, className = "" }: PillProps) => {
  return (
    <span
      className={`
        inline-flex items-center rounded-full 
        bg-[RGB(197,216,109,.25)] dark:bg-teal-400/10
        px-3 py-1 text-xs font-medium 
        text-[#8AA317] dark:text-teal-300
        ring-1 ring-inset ring-[RGB(197,216,109,.75)] dark:ring-teal-500/20
        ${className}
      `}
    >
      {skill}
    </span>
  );
};
