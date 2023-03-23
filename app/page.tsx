import { Title, Aside } from '@/components';
import { Service } from '@/components/dashboard';
import {
  RxLetterCaseCapitalize,
  RxLoop,
  RxReader,
  RxPencil2,
} from 'react-icons/rx';

export default function Home() {
  return (
    <>
      <section className="grid-section h-full">
        <div className="mb-12">
          <Title
            label="Our Services"
            sublabel="Tired of writing articles? We got your back!"
          />
          <Service
            Icon={RxLetterCaseCapitalize}
            label="Grammar Checker"
            link="/grammar-checker"
          />
          <p className="mb-8">
            The AI-powered grammar checker is a tool that uses machine learning
            to identify and correct grammar mistakes in written text. It's
            user-friendly and suitable for anyone looking to improve the quality
            of their writing.
          </p>
          <Service Icon={RxLoop} label="Paraphraser" link="/paraphraser" />
          <p className="mb-8">
            The paraphrasing application utilizes advanced algorithms to
            rephrase text and convey the same meaning using different words and
            sentence structures. It's a valuable tool for writers and students
            who want to avoid plagiarism and improve the clarity and readability
            of their writing.
          </p>
          <Service
            Icon={RxReader}
            label="Text Summarizer"
            link="/text-summarizer"
          />
          <p className="mb-8">
            The summarization application uses machine learning algorithms to
            condense large blocks of text into shorter, more concise summaries
            while preserving the key ideas and concepts. It's a powerful tool
            for anyone who needs to quickly extract the essential information
            from long documents, articles, or reports.
          </p>
          <Service
            Icon={RxPencil2}
            label="Article Writer"
            link="/article-writer"
          />
          <p className="mb-12 md:mb-0">
            The AI-powered article writing application generates high-quality,
            original content on any given topic, using advanced natural language
            processing algorithms. It's a valuable tool for content creators,
            marketers, and businesses who need to produce engaging and
            informative articles quickly and efficiently.
          </p>
        </div>
        <Aside />
      </section>
    </>
  );
}
