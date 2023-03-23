'use client';

import { useContext, useRef } from 'react';
import { GrammarContext } from '@/context/GrammarContext';
import { CopyButton } from '..';

const GrammarOutput = () => {
  const { outputText } = useContext(GrammarContext);

  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div className="rounded-2xl bg-[#ECF9FF] text-sm">
      <div
        ref={outputRef}
        className="custom-scroll h-80 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4"
      >
        {outputText}
      </div>
      <div className="mb-12 flex items-center justify-end rounded-b-2xl bg-[#fff7e2] py-2 px-4 md:mb-0">
        <CopyButton isDisabled={!outputText} ref={outputRef} />
      </div>
    </div>
  );
};

export default GrammarOutput;
