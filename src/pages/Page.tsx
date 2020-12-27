import { useContext, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Markdown from 'markdown-to-jsx';
import classnames from 'classnames';

import PageContent from '../components/PageContent';
import Spinner from '../components/Spinner';
import Fatal from '../components/Fatal';
import NotFound from './NotFound';

import { PostsContext } from '../context/PostsContext';
import '../styles/pages/Page.scss';

type TParams = {
  postId: string;
  pageIndex: string;
};

const Page = ({ match }: RouteComponentProps<TParams>) => {
  const [shown, setShown] = useState<boolean>(false);

  const { postId, pageIndex } = match.params;
  const { data: postsData, status, error } = useContext(PostsContext)();

  if (status === 'loading') return <Spinner />;
  if (error) return <Fatal error={error} />;

  const matchedPost = postsData?.find((post) => post.NO_ID_FIELD === postId);
  const matchedPage = matchedPost?.pages[parseInt(pageIndex)];

  if (!matchedPost || !matchedPage) return <NotFound />;

  return (
    <div className={classnames({ Page: true, 'Page--shown': shown })}>
      <aside className='Page__aside'>
        <div className='Page__controls'>
          <Link className='Page__post-title' to={`/post/${matchedPost.NO_ID_FIELD}`}>
            {matchedPost.title}
          </Link>
          <FontAwesomeIcon
            className='Page__icon'
            icon={shown ? faArrowLeft : faArrowRight}
            onClick={() => setShown(!shown)}
          />
        </div>
        <ol className='Page__tablist'>
          {matchedPost.pages.map((page, i) => (
            <li
              key={i}
              className={classnames({
                Page__tab: true,
                'Page__tab--active': i === parseInt(pageIndex),
              })}
            >
              <Link to={`/post/${postId}/${i}`}>
                {shown ? <Markdown>{page.title}</Markdown> : <span>{i}</span>}
              </Link>
            </li>
          ))}
        </ol>
      </aside>
      <section className='Page__section'>
        <div className='container'>
          <PageContent pagePath={matchedPage.path} language={matchedPost.subject} />
        </div>
      </section>
    </div>
  );
};

export default Page;
