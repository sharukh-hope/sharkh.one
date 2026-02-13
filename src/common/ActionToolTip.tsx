import { useEffect, useRef, useState } from "react";

type TooltipAction = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  closeOnClick?: boolean;
};

type ActionTooltipProps = {
  trigger: React.ReactNode; // The button/icon that opens the tooltip
  actions: TooltipAction[];
  alignX?: "left" | "right";
  alignY?: "top" | "bottom";
  menuClassName?: string;
  menuItemClassName?: string;
};

export function ActionTooltip({
  trigger,
  actions,
  alignX = "right",
  alignY = "top",
  menuClassName,
  menuItemClassName,
}: ActionTooltipProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      className="ActionToolTipWrapper relative inline-block"
      ref={containerRef}
    >
      <button type="button" onClick={() => setOpen((prev) => !prev)}>
        {trigger}
      </button>

      {open && (
        <div
          className={`absolute z-50 mt-2 min-w-35 rounded-lg shadow-lg 
            ${alignX === "right" ? "left-0" : "right-0"} ${alignY === "top" ? "bottom-0" : "top-0"} [:where(&)]:bg-white ${menuClassName}
          `}
        >
          <ul>
            {actions.map((action) => (
              <li key={action.id}>
                <button
                  className={`menuButton flex w-full items-center gap-2 px-3 py-2 text-sm [:where(&)]:text-slate-700 [:where(&)]:hover:bg-slate-100 transition ${menuItemClassName}`}
                  onClick={() => {
                    action.onClick();
                    if (action.closeOnClick) setOpen(false);
                  }}
                >
                  {action.icon && (
                    <span className="text-lg">{action.icon}</span>
                  )}
                  <span>{action.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
