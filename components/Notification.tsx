import { TbAlertTriangle } from 'react-icons/tb';

const Notification = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3 rounded-3xl bg-[#fdf2ff] py-3 px-5">
      <TbAlertTriangle className="text-3xl text-red-600" />
      <p className="-mt-1">{text}</p>
    </div>
  );
};

export default Notification;
