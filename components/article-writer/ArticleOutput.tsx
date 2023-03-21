'use client';

import { useContext, useRef } from 'react';
import { ArticleContext } from '@/context/ArticleContext';
import { CopyButton } from '..';

const ArticleOutput = () => {
  const { article } = useContext(ArticleContext);

  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-6 rounded-2xl bg-[#ECF9FF] text-sm">
      <div
        ref={outputRef}
        className="custom-scroll h-96 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4"
      >
        {article}
      </div>
      <div className="flex items-center justify-end rounded-b-2xl bg-[#fff7e2] py-2 px-4">
        <CopyButton isDisabled={!article} ref={outputRef} />
      </div>
    </div>
  );
};

export default ArticleOutput;
