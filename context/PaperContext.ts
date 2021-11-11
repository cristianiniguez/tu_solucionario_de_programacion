import { createContext } from 'react';

import { TPaper, TPaperWithContent, TPost } from '@/types/common';

type TPaperContext = {
  post: TPost;
  paper: TPaperWithContent;
  papers: TPaper[];
} | null;

const PaperContext = createContext<TPaperContext>(null);

export default PaperContext;
