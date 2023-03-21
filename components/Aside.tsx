import { Title, HowToItem, Product } from '.';

const Aside = () => {
  return (
    <aside className="relative flex flex-col">
      <Title label="How It Works" sublabel="Easy as pie" />
      <div className="mb-12 flex flex-col gap-4">
        <HowToItem
          icon="/write-01.png"
          label="Write or paste your articles or texts"
          i={1}
          color="pink"
        />
        <HowToItem
          icon="/wait-02.png"
          label="Wait for GPT Writer to give you a response"
          i={2}
          color="green"
        />
        <HowToItem
          icon="/enjoy-03.png"
          label="Make engaging posts, grow your audience"
          i={3}
          color="blue"
        />
      </div>
      <Title
        label="Try Our Products"
        sublabel="Does AI generated images sound interesting to you?"
      />
      <Product />
      <img
        src="/illustration.png"
        alt="Illustration"
        className="absolute -bottom-24 right-32 w-32 rotate-90"
      />
    </aside>
  );
};

export default Aside;
