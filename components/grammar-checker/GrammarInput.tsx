'use client';

import { useState, useRef, useMemo, useEffect, useContext } from 'react';
// import axios from 'axios';
import { GrammarContext } from '@/context/GrammarContext';
import { preventRichText, putCursorAtTheEndOf } from '@/utils/helpers';
import { RxSymbol } from 'react-icons/rx';

const MIN_LENGTH = 5;

const GrammarInput = () => {
  const [inputText, setInputText] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [errors, setErrors] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setOutputText } = useContext(GrammarContext);

  const inputRef = useRef<HTMLDivElement>(null);

  const wordsCount = useMemo(
    () => inputText.split(' ').filter(i => i !== '').length,
    [inputText]
  );

  useEffect(() => {
    inputRef.current!.spellcheck = false;

    inputRef.current?.addEventListener('paste', preventRichText);

    return () =>
      inputRef.current?.removeEventListener('paste', preventRichText);
  }, []);

  useEffect(() => {
    const currentText = inputRef.current!.innerHTML.split(' ');

    // FIXME: <br> appears in the beggining sometimes
    const markedWords = currentText?.map(word => {
      if (errors?.includes(word)) {
        return `<span class="text-red-700 font-bold">${word}</span>`;
      } else {
        return word;
      }
    });

    const editedText = `<p>${markedWords!.join(' ')}</p>`;

    inputRef.current!.innerHTML = editedText;

    // FIXME: preserve cursor position
    putCursorAtTheEndOf(inputRef);
  }, [errors]);

  const checkForErrors = async () => {
    if (inputText.trim().length < MIN_LENGTH) return;

    setIsChecking(true);

    try {
      const res = await fetch('/api/grammar-errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      const data = await res.json();

      setErrors(data.response.words);
    } catch (err) {
      setErrors([]);
    }

    setIsChecking(false);
  };

  const fixErrors = async () => {
    if (inputText.trim().length < MIN_LENGTH) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/correct-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      const data = await res.json();

      // FIXME: output sometimes has quotes ""
      setOutputText(data.response);
    } catch (err) {
      setOutputText('Oops, an error occured. Please try again later.');
    }

    setIsLoading(false);
  };

  const typingHandler = () => {
    if (!inputRef.current?.innerText.length) {
      setErrors([]);
    }
    setInputText(inputRef.current?.innerText!);
    clearTimeout(timer);
    setTimer(setTimeout(() => checkForErrors(), 2000));
  };

  return (
    <div className="mb-12 rounded-2xl bg-[#ECF9FF] text-sm">
      <div
        ref={inputRef}
        className={`break-word custom-scroll ${
          !inputText.length && 'placeholder'
        } relative h-80 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4 focus:outline-none`}
        contentEditable={true}
        onKeyUp={typingHandler}
        placeholder="Write something cool..."
      />
      <div className="flex items-center gap-4 rounded-b-2xl bg-[#fff7e2] py-2 px-4">
        <p>
          <span className="font-bold">{wordsCount}</span> <span>Words</span>
        </p>
        {!isChecking && (
          <p
            className={`
            ${errors.length && inputText.length > MIN_LENGTH && 'text-red-700'}
          `}
          >
            <span className="font-bold">
              {inputText.length > MIN_LENGTH ? errors.length : 0}{' '}
            </span>
            <span>Errors</span>
          </p>
        )}
        {isChecking && (
          <p className="flex items-center gap-2">
            <span>Checking for errors</span>{' '}
            <span>
              <RxSymbol className="animate-spin" />
            </span>
          </p>
        )}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={fixErrors}
            className="rounded-full bg-[#8F12FE] py-1 px-3 font-semibold text-white"
          >
            Fix Me
          </button>
          {isLoading && <RxSymbol className="animate-spin" />}
        </div>
      </div>
    </div>
  );
};

export default GrammarInput;
