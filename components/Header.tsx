import Link from 'next/link';

const Header = () => {
  return (
    <header className="grid-header relative z-10 mb-14">
      <div className="flex flex-col gap-1">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="GPT Writer Logo" />
          <h2 className="text-[20px] font-extrabold leading-6 text-dark">
            GPT Writer
          </h2>
        </Link>
        <span className="text-xs leading-[18px] text-[#8E9BAE]">
          AI Powered Writing
        </span>
      </div>
    </header>
  );
};

export default Header;
