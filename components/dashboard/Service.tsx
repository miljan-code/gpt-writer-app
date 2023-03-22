import Link from 'next/link';
import { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  label: string;
  link: string;
};

const Service = ({ Icon, label, link }: Props) => {
  return (
    <div className="mb-4 flex items-center gap-5 rounded-3xl bg-[#fdf2ff] py-3 px-5">
      <div className="shrink-0 rounded-xl bg-[#D56C2B22] p-2">
        <Icon className="text-3xl" />
      </div>
      <Link href={link} className="text-1xl font-semibold">
        {label}
      </Link>
      <div className="ml-auto">
        <Link href={link} className="text-green-800">
          Try now &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Service;
