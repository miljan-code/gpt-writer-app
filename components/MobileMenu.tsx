import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import {
  RxDashboard,
  RxLetterCaseCapitalize,
  RxPencil2,
  RxReader,
  RxLoop,
} from 'react-icons/rx';

type Props = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fdf2ff]">
      <div onClick={onClose} className="absolute top-9 right-8">
        <AiOutlineClose className="text-3xl" />
      </div>
      <nav className="flex flex-col gap-6">
        <Link
          onClick={onClose}
          href="/"
          className="flex items-center gap-5 transition-all hover:text-[#8F12FE]"
        >
          <RxDashboard className="text-3xl" />
          <p className="text-2xl font-medium">Dashboard</p>
        </Link>
        <Link
          onClick={onClose}
          href="/grammar-checker"
          className="flex items-center gap-5 transition-all hover:text-[#8F12FE]"
        >
          <RxLetterCaseCapitalize className="text-3xl" />
          <p className="text-2xl font-medium">Grammar Checker</p>
        </Link>
        <Link
          onClick={onClose}
          href="/paraphraser"
          className="flex items-center gap-5 transition-all hover:text-[#8F12FE]"
        >
          <RxLoop className="text-3xl" />
          <p className="text-2xl font-medium">Paraphraser</p>
        </Link>
        <Link
          onClick={onClose}
          href="/text-summarizer"
          className="flex items-center gap-5 transition-all hover:text-[#8F12FE]"
        >
          <RxReader className="text-3xl" />
          <p className="text-2xl font-medium">Text Summarizer</p>
        </Link>
        <Link
          onClick={onClose}
          href="/article-writer"
          className="flex items-center gap-5 transition-all hover:text-[#8F12FE]"
        >
          <RxPencil2 className="text-3xl" />
          <p className="text-2xl font-medium">Article Writer</p>
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
