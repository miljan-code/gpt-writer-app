'use client';

import { useContext, useRef } from 'react';
import { SummarizeContext } from '@/context/SummarizeContext';
import { CopyButton } from '..';

const SummarizeOutput = () => {
  const { summarized } = useContext(SummarizeContext);

  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-6 rounded-2xl bg-[#ECF9FF] text-sm">
      <div
        ref={outputRef}
        className="custom-scroll h-80 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4"
      >
        {summarized}
      </div>
      <div className="flex items-center justify-end rounded-b-2xl bg-[#fff7e2] py-2 px-4">
        <CopyButton isDisabled={!summarized} ref={outputRef} />
      </div>
    </div>
  );
};

export default SummarizeOutput;
