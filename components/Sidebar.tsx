import { FaUserTie } from 'react-icons/fa';
import { RxRocket } from 'react-icons/rx';
import { Navigation, Header } from '.';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="hidden flex-col md:flex">
      <Header />
      <div className="mb-14 flex items-center gap-4">
        <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#B347D833]">
          <FaUserTie className="text-2xl font-extrabold text-gray-600" />
        </div>
        <h3 className="text-2xl font-semibold text-dark">Hi, Guest 👋</h3>
      </div>
      <Navigation />
      <div className="shadow-nav mb-12 flex items-center gap-[14px] rounded-2xl bg-white py-5 px-[14px]">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8F12FE]">
          <RxRocket className="text-lg text-white" />
        </div>
        <Link href="/" className="flex flex-col gap-[2px]">
          <p className="text-sm font-medium text-dark">GPT Writer Pro</p>
          <span className="text-xs text-dark opacity-60">Free trial</span>
        </Link>
      </div>
      <div className="relative rounded-3xl bg-[#fdf2ff] pt-6 pl-4 pb-10 xl:mt-auto">
        <h3 className="mb-2 max-w-[101px] text-xl font-extrabold text-[#503094]">
          Upgrade to Pro
        </h3>
        <p className="mb-2 max-w-[110px] text-xs text-[#697382]">
          Get 1 month free on annual subscription
        </p>
        <Link href="" className="text-xs font-semibold text-[#503094]">
          Upgrade now!
        </Link>
        <img
          src="/upgrade-rocket.png"
          alt="Girl with a rocket"
          className="absolute -top-8 right-0"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
