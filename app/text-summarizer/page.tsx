import { Title } from '@/components';
import { SummarizeInput, SummarizeOutput } from '@/components/text-summarizer';
import { SummarizeProvider } from '@/context/SummarizeContext';

export default function GrammarPage() {
  return (
    <SummarizeProvider>
      <section className="grid-section">
        <div>
          <Title
            label="Text Summarizer"
            sublabel="Don't strangle your readers! Summarize your articles!"
          />
          <SummarizeInput />
          <SummarizeOutput />
        </div>
        <div className="">Hey</div>
      </section>
    </SummarizeProvider>
  );
}
