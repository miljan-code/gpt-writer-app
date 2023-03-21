'use client';

import { useContext, useRef } from 'react';
import { ParaphraseContext } from '@/context/ParaphraseContext';
import { CopyButton } from '..';

const ParaphraserOutput = () => {
  const { paraphrased } = useContext(ParaphraseContext);

  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-6 rounded-2xl bg-[#ECF9FF] text-sm">
      <div
        ref={outputRef}
        className="custom-scroll h-80 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4"
      >
        {paraphrased}
      </div>
      <div className="flex items-center justify-end rounded-b-2xl bg-[#fff7e2] py-2 px-4">
        <CopyButton isDisabled={!paraphrased} ref={outputRef} />
      </div>
    </div>
  );
};

export default ParaphraserOutput;
