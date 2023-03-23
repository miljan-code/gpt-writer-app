'use client';

import { useState, useRef, useContext } from 'react';
import { ArticleContext } from '@/context/ArticleContext';
import { RxSymbol } from 'react-icons/rx';

const MIN_LENGTH = 5;

const ArticleInput = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setArticle } = useContext(ArticleContext);

  const topicRef = useRef<HTMLInputElement>(null);

  const getArticle = async (e: React.FormEvent) => {
    e.preventDefault();

    const topic = topicRef.current!.value;

    if (topic.trim().length < MIN_LENGTH) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: topic }),
      });

      const data = await res.json();

      setArticle(data.response);
    } catch (err) {
      setArticle('Oops, an error occured. Please try again later!');
    }

    setIsLoading(false);
  };

  return (
    <div className="mb-6 rounded-2xl bg-[#ECF9FF] px-4 py-2 text-sm">
      <form
        onSubmit={getArticle}
        className="flex w-full items-center justify-center gap-4 sm:justify-start"
      >
        <input
          ref={topicRef}
          type="text"
          className="w-3/4 rounded-3xl px-2 py-1 pl-5 text-sm focus:outline-none"
          placeholder="RPG Video games"
        />
        <button
          onClick={getArticle}
          className="ml-auto rounded-full bg-[#8F12FE] py-1 px-3 font-semibold text-white"
        >
          Submit
        </button>
        {isLoading && <RxSymbol className="animate-spin" />}
      </form>
    </div>
  );
};

export default ArticleInput;
