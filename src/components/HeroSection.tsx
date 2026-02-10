export const HeroSection = () => {
  return (
    <div className="sticky dark:text-slate-200 text-[#261C15] top-22 flex flex-col min-h-[60vh] max-h-[80vh] justify-between">
      <div className="headerSection">
        <h1 className="mb-2 text-4xl">Sharukh Babu</h1>
        <h2 className="mb-6 font-mono">
          Frontend Engineer{" "}
          <span className="dark:text-yellow-600 text-[#F05D23]">|</span>{" "}
          Fullstack Engineer [MERN]
        </h2>
        <p className="dark:text-slate-400 text-slate-500 min-w-con">
          A creative developer building better experiences for the web, and
          learning the art of living.
        </p>
      </div>
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
        />
      </div>
    </div>
  );
};
