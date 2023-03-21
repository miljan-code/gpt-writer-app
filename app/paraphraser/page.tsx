import { ParaphraseProvider } from '@/context/ParaphraseContext';
import { Title, Aside } from '@/components';
import { ParaphraseInput, ParaphraseOutput } from '@/components/paraphraser';

export default function GrammarPage() {
  return (
    <ParaphraseProvider>
      <section className="grid-section">
        <div>
          <Title label="Paraphraser" sublabel="Steal like an artist" />
          <ParaphraseInput />
          <ParaphraseOutput />
        </div>
        <Aside />
      </section>
    </ParaphraseProvider>
  );
}
