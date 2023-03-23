type Props = {
  label: string;
  icon: string;
  i: number;
  color: Colors;
};

type Colors = 'pink' | 'green' | 'blue';

const getColors = (color: Colors) => {
  if (color === 'pink')
    return {
      background: 'bg-[#fdf2ff]',
      border: 'border-[#ff9eff]',
      text: 'text-[#ff9eff]',
    };
  else if (color === 'green')
    return {
      background: 'bg-[#E9FFF7]',
      border: 'border-[#75f0c3]',
      text: 'text-[#75f0c3]',
    };
  else if (color === 'blue')
    return {
      background: 'bg-[#ECF9FF]',
      border: 'border-[#5ccbff]',
      text: 'text-[#5ccbff]',
    };
  else
    return {
      background: 'bg-[#fdf2ff]',
      border: 'border-[#fdf]',
      text: 'text-[#ff9eff]',
    };
};

const HowToItem = ({ label, icon, i, color }: Props) => {
  const colors = getColors(color);

  return (
    <div className="shadow-aside flex items-center gap-4 rounded-lg bg-[#fff7e2] py-3 px-2">
      <div
        className={`rounded-lg border-2 ${colors.border} ${colors.background} shrink-0 p-2`}
      >
        <img src={icon} className="h-10 w-10" />
      </div>
      <h3 className="w-[200px] text-sm font-medium 2xl:w-2/4">{label}</h3>
      <span className={`text-xl font-extrabold 2xl:text-5xl ${colors.text}`}>
        {i}.
      </span>
    </div>
  );
};

export default HowToItem;
