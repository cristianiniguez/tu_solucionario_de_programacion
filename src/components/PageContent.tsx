import { FunctionComponent, useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import Prism from 'prismjs';
import axios from 'axios';
import { useStorage } from 'reactfire';
import 'firebase/storage';

import Spinner from '../components/Spinner';
import Fatal from '../components/Fatal';

import 'prismjs/themes/prism-tomorrow.css';

type PageContentProps = {
  pagePath: string;
  language: string;
};

const PageContent: FunctionComponent<PageContentProps> = ({ pagePath, language }) => {
  const [state, setState] = useState<{
    content?: string;
    loading: boolean;
    error?: Error | null;
  }>({ content: '', loading: false, error: null });
  const storage = useStorage();

  useEffect(() => {
    setState({ content: '', loading: true, error: null });
    storage
      .ref(pagePath)
      .getDownloadURL()
      .then(axios)
      .then(({ data }) => setState({ content: data, loading: false }))
      .catch((error) => setState({ error, loading: false }));
  }, [storage, pagePath]);

  useEffect(() => {
    const $codeElements = document.querySelectorAll('#PageContent code');
    $codeElements.forEach(($codeElement) => {
      $codeElement.classList.add(`language-${language}`);
    });
    Prism.highlightAll();
  }, [state, language]);

  return state.loading ? (
    <Spinner />
  ) : state.error ? (
    <Fatal error={state.error} />
  ) : (
    <div className='PageContent' id='PageContent'>
      {state.content && <Markdown>{state.content}</Markdown>}
    </div>
  );
};

export default PageContent;
