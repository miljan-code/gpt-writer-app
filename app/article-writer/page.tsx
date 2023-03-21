import { ArticleProvider } from '@/context/ArticleContext';
import { Title, Aside } from '@/components';
import { ArticleInput, ArticleOutput } from '@/components/article-writer';

export default function GrammarPage() {
  return (
    <ArticleProvider>
      <section className="grid-section h-full">
        <div>
          <Title
            label="Article Writer"
            sublabel="Tired of writing articles? We got your back!"
          />
          <ArticleInput />
          <ArticleOutput />
        </div>
        <Aside />
      </section>
    </ArticleProvider>
  );
}
