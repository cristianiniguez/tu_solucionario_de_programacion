import { createContext } from 'react';

import { TPost } from '@/types/common';

const PostContext = createContext<TPost | null>(null);

export default PostContext;
