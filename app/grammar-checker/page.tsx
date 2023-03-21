import { Title } from '@/components';
import { GrammarInput, GrammarOutput } from '@/components/grammar-checker';
import { GrammarProvider } from '@/context/GrammarContext';

export default function GrammarPage() {
  return (
    <GrammarProvider>
      <section className="grid-section">
        <div>
          <Title
            label="Grammar Checker"
            sublabel="Improve your writing with the power of AI"
          />
          <GrammarInput />
          <GrammarOutput />
        </div>
        <div className="">Hey</div>
      </section>
    </GrammarProvider>
  );
}
