import { createContext } from 'react';

import { TSubject } from '@/types/common';

const SubjectContext = createContext<TSubject | null>(null);

export default SubjectContext;
