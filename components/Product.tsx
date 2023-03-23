import Link from 'next/link';
import { RxArrowRight } from 'react-icons/rx';

const Product = () => {
  return (
    <div className="relative mb-8 flex items-center gap-6 overflow-hidden rounded-3xl bg-[#F1F9FF] p-3">
      <div className="absolute -right-10 -top-4 h-20 w-20 rounded-full bg-[#D56C2B] opacity-20" />
      <div className="absolute -left-4 -bottom-8 h-32 w-32 rounded-full bg-[#D56C2B] opacity-20" />
      <div className="relative z-10 shrink-0 rounded-3xl bg-[#f9fffd] p-2">
        <img src="/robot.png" alt="Robot" className="h-16 w-auto 2xl:h-32" />
      </div>
      <div className="relative z-10 flex flex-col gap-1">
        <span className="text-sm text-[#8e9bae]">AI Powered</span>
        <h3 className="mb-3 text-2xl font-extrabold leading-7 text-[#D56C2B]">
          Image
          <br />
          Generator
        </h3>
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-green-800"
        >
          <span>Try now</span>
          <RxArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Product;
