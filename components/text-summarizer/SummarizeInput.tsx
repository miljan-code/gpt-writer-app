'use client';

import { useState, useRef, useEffect, useContext } from 'react';
import { SummarizeContext } from '@/context/SummarizeContext';
import { preventRichText } from '@/utils/helpers';
import { RxSymbol } from 'react-icons/rx';

const SummarizeInput = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState('');

  const { setSummarized } = useContext(SummarizeContext);

  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current!.spellcheck = false;

    inputRef.current?.addEventListener('paste', preventRichText);

    return () =>
      inputRef.current?.removeEventListener('paste', preventRichText);
  }, []);

  const summarizeIt = async () => {
    if (inputText.trim().length === 0) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/summarize-it', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      const data = await res.json();

      setSummarized(data.response);
    } catch (err) {
      setSummarized('Oops, an error occured. Please try again later!');
    }

    setIsLoading(false);
  };

  return (
    <div className="mb-12 rounded-2xl bg-[#ECF9FF] text-sm">
      <div
        ref={inputRef}
        className={`break-word custom-scroll ${
          !inputText.length && 'placeholder'
        } relative h-80 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4 focus:outline-none`}
        contentEditable={true}
        onKeyUp={() => setInputText(inputRef.current?.innerText!)}
        placeholder="Write something cool..."
      />
      <div className="flex items-center justify-end gap-4 rounded-b-2xl bg-[#fff7e2] py-2 px-4">
        <button
          onClick={summarizeIt}
          className="rounded-full bg-[#8F12FE] py-1 px-3 font-semibold text-white"
        >
          Summarize
        </button>
        {isLoading && <RxSymbol className="animate-spin" />}
      </div>
    </div>
  );
};

export default SummarizeInput;
