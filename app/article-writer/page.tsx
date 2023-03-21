import { Title } from '@/components';
import { ArticleInput, ArticleOutput } from '@/components/article-writer';
import { ArticleProvider } from '@/context/ArticleContext';

export default function GrammarPage() {
  return (
    <ArticleProvider>
      <section className="grid-section">
        <div>
          <Title
            label="Article Writer"
            sublabel="Tired of writing articles? We got your back!"
          />
          <ArticleInput />
          <ArticleOutput />
        </div>
        <div className="">Hey</div>
      </section>
    </ArticleProvider>
  );
}
