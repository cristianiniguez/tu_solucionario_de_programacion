import { FunctionComponent, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Prism from 'prismjs';
import Spinner from './Spinner';
import Fatal from './Fatal';
import usePageContent from '../hooks/usePageContent';
import 'prismjs/themes/prism-tomorrow.css';

type PageContentProps = {
  pagePath: string;
  language: string;
};

const PageContent: FunctionComponent<PageContentProps> = ({ pagePath, language }) => {
  const { content, error, status } = usePageContent(pagePath);

  useEffect(() => {
    if (status === 'success') {
      const $codeElements = document.querySelectorAll('#PageContent code');
      $codeElements.forEach(($codeElement) => {
        $codeElement.classList.add(`language-${language}`);
      });
      Prism.highlightAll();
    }
  }, [status, language]);

  return status === 'loading' ? (
    <Spinner />
  ) : error ? (
    <Fatal error={error} />
  ) : (
    <div className='PageContent' id='PageContent'>
      {content && <Markdown>{content}</Markdown>}
    </div>
  );
};

export default PageContent;
