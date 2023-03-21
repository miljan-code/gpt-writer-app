type Props = {
  label: string;
  sublabel: string;
};

const Title = ({ label, sublabel }: Props) => {
  return (
    <div className="mb-10">
      <h2 className="text-[28px] font-extrabold leading-8 text-dark">
        {label}
      </h2>
      <p className="text-xs leading-[18px] text-[#8e98ae]">{sublabel}</p>
    </div>
  );
};

export default Title;
