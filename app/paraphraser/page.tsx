import { Title } from '@/components';
import { ParaphraseInput, ParaphraseOutput } from '@/components/paraphraser';
import { ParaphraseProvider } from '@/context/ParaphraseContext';

export default function GrammarPage() {
  return (
    <ParaphraseProvider>
      <section className="grid-section">
        <div>
          <Title label="Paraphraser" sublabel="Steal like an artist" />
          <ParaphraseInput />
          <ParaphraseOutput />
        </div>
        <div className="">Hey</div>
      </section>
    </ParaphraseProvider>
  );
}
