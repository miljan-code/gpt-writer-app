import Link from 'next/link';
import {
  RxDashboard,
  RxLetterCaseCapitalize,
  RxPencil2,
  RxReader,
  RxLoop,
} from 'react-icons/rx';

const Navigation = () => {
  return (
    <nav className="shadow-nav mb-5 flex flex-col gap-6 rounded-2xl bg-white py-8 pl-6">
      <Link href="/" className="flex items-center gap-5">
        <RxDashboard className="text-lg" />
        <p className="text-sm font-medium">Dashboard</p>
      </Link>
      <Link href="/grammar-checker" className="flex items-center gap-5">
        <RxLetterCaseCapitalize className="text-lg" />
        <p className="text-sm font-medium">Grammar Checker</p>
      </Link>
      <Link href="/paraphraser" className="flex items-center gap-5">
        <RxLoop className="text-lg" />
        <p className="text-sm font-medium">Paraphraser</p>
      </Link>
      <Link href="/article-writer" className="flex items-center gap-5">
        <RxPencil2 className="text-lg" />
        <p className="text-sm font-medium">Article Writer</p>
      </Link>
      <Link href="/text-summarizer" className="flex items-center gap-5">
        <RxReader className="text-lg" />
        <p className="text-sm font-medium">Text Summarizer</p>
      </Link>
    </nav>
  );
};

export default Navigation;
