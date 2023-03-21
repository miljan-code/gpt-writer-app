import { SummarizeProvider } from '@/context/SummarizeContext';
import { Title, Aside } from '@/components';
import { SummarizeInput, SummarizeOutput } from '@/components/text-summarizer';

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
        <Aside />
      </section>
    </SummarizeProvider>
  );
}
