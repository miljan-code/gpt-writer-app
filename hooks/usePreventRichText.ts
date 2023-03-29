import { preventRichText } from '@/utils/helpers';
import { RefObject, useEffect } from 'react';

export const usePreventRichText = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    ref.current!.spellcheck = false;

    ref.current?.addEventListener('paste', preventRichText);

    return () => ref.current?.removeEventListener('paste', preventRichText);
  }, []);
};
