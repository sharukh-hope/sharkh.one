import { useEffect, useState } from "react";
import { ActionTooltip } from "../common/ActionToolTip";
import { ChatWindow } from "../components/ChatWindow";

const emailSubject =
  "Your portfolio sent me here with a default subject line yay!";
const emailBody = `Hi Shark,

[INSERT TEXT HERE] (Need not be well drafted - don't disturb AI for this, I'm human and I can have a conversation without a formal structure)

regards,
[INSERT NAME HERE]
`;

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyValues = copied
    ? { label: "Copied!", icon: "iconCheck" }
    : { label: "Copy Email", icon: "iconClipboard" };

  useEffect(() => {
    setTimeout(() => setCopied(false), 1000);
  }, [copied]);

  const actions = [
    {
      id: "email",
      label: "Send Email",
      icon: <div className="bg-contain w-5 h-5 menuIcon iconSend" />,
      onClick: () => {
        window.location.href = `mailto:sharukhb98@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      },
      closeOnClick: true,
    },
    {
      id: "copy",
      label: copyValues.label,
      icon: (
        <div className={`bg-contain w-5 h-5 menuIcon ${copyValues.icon}`} />
      ),
      onClick: async () => {
        await navigator.clipboard.writeText("sharukhb98@gmail.com");
        setCopied(true);
      },
    },
  ];
  const renderSocialIcons = () => {
    return (
      <div className="socials flex gap-5">
        <a
          href="https://github.com/sharukh-hope"
          rel="noreferrer"
          target="_blank"
          className="iconSocial cursor-pointer dark:bg-[url('./assets/icons/github.svg')] bg-[url('./assets/icons/github-light.svg')] h-5 w-5 bg-contain"
        />
        <a
          href="https://www.instagram.com/sharukh_babu/"
          rel="noreferrer"
          target="_blank"
          className="iconSocial cursor-pointer dark:bg-[url('./assets/icons/instagram.svg')] bg-[url('./assets/icons/instagram-light.svg')] h-5 w-5 bg-contain"
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sharukh-babu-99649417a/"
          className="iconSocial cursor-pointer dark:bg-[url('./assets/icons/linkedin.svg')] bg-[url('./assets/icons/linkedin-light.svg')] h-5 w-5 bg-contain"
        />{" "}
        <ActionTooltip
          trigger={
            <div className="w-5 h-5 bg-contain bg-no-repeat dark:bg-[url('./assets/icons/mail.svg')] bg-[url('./assets/icons/mail-light.svg')]" />
          }
          actions={actions}
          alignX="right"
          alignY="top"
          menuClassName="dark:bg-oceanDeep bg-beige"
          menuItemClassName="hover:text-teal-400 dark:text-slate-400 text-slate-500 hover:bg-transparent"
        />
      </div>
    );
  };

  return (
    <div
      className="HeroSectionWrapper sticky dark:text-slate-200 text-[#261C15] top-22 flex flex-col max-w-95 min-h-[60vh] max-h-[80vh] justify-between
    max-lg:relative max-lg:justify-start max-lg:gap-8 max-lg:top-[unset] max-lg:min-h-[unset] max-lg:max-w-[90vw]
    max-md:px-6"
    >
      <div className="headerSection">
        <h1 className="mb-2 text-4xl">Sharukh Babu</h1>
        <h2 className="mb-6 font-mono min-w-110 max-sm:min-w-[unset]">
          Frontend Engineer{" "}
          <span className="dark:text-yellow-400 text-orangeAccent">|</span>{" "}
          Fullstack Engineer [MERN]
        </h2>
        <p className="dark:text-slate-400 text-slate-500">
          A creative developer building better experiences for the web, and
          learning the art of living.
        </p>
      </div>
      <div>
        <ChatWindow />

        {renderSocialIcons()}
      </div>
    </div>
  );
};
