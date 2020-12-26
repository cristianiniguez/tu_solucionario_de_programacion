import { FunctionComponent, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

type PageContentProps = {
  content: string;
  language: string;
};

const PageContent: FunctionComponent<PageContentProps> = ({ content, language }) => {
  useEffect(() => {
    const $codeElements = document.querySelectorAll('#PageContent code');
    $codeElements.forEach(($codeElement) => {
      $codeElement.classList.add(`language-${language}`);
    });
    Prism.highlightAll();
  }, [content, language]);

  return (
    <div className='PageContent' id='PageContent'>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default PageContent;
