'use client';

import { useState, useRef, useEffect, useContext } from 'react';
import { ParaphraseContext } from '@/context/ParaphraseContext';
import { preventRichText } from '@/utils/helpers';
import { paraphrasingModeOptions } from '@/constants/paraphraser-constants';
import { RxSymbol } from 'react-icons/rx';

const ParaphraseInput = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState('');

  const { paraMode, setParaMode, setParaphrased } =
    useContext(ParaphraseContext);

  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current!.spellcheck = false;

    inputRef.current?.addEventListener('paste', preventRichText);

    // TODO: Refactor, its the same code on all pages
    return () =>
      inputRef.current?.removeEventListener('paste', preventRichText);
  }, []);

  const paraphraseIt = async () => {
    if (!inputText.trim().length) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/paraphrase-it', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      const data = await res.json();

      setParaphrased(data.response);
    } catch (err) {
      setParaphrased('Oops, an error occured. Please try again later!');
    }

    setIsLoading(false);
  };

  return (
    <div className="mb-12 rounded-2xl bg-[#ECF9FF] text-sm">
      <div className="flex items-center gap-3 py-2 px-4">
        <span>Choose style:</span>
        <select
          onChange={e => setParaMode(e.target.value as ParaphrasingModeType)}
          name="modes"
          className="bg-transparent"
        >
          {paraphrasingModeOptions.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div
        ref={inputRef}
        className={`break-word custom-scroll ${
          !inputText.length && 'placeholder'
        } relative h-[283px] overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4 focus:outline-none`}
        contentEditable={true}
        onKeyUp={() => setInputText(inputRef.current?.innerText!)}
        placeholder="Write something cool..."
      />
      <div className="flex items-center justify-end gap-4 rounded-b-2xl bg-[#fff7e2] py-2 px-4">
        <button
          onClick={paraphraseIt}
          className="rounded-full bg-[#8F12FE] py-1 px-3 font-semibold text-white"
        >
          Paraphrase
        </button>
        {isLoading && <RxSymbol className="animate-spin" />}
      </div>
    </div>
  );
};

export default ParaphraseInput;
