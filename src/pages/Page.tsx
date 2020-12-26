import { useState, useContext } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import classnames from 'classnames';
import axios from 'axios';
import { useStorage } from 'reactfire';
import 'firebase/storage';

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
  const { postId, pageIndex } = match.params;

  const [content, setContent] = useState('');
  const storage = useStorage();

  const { data, status, error } = useContext(PostsContext)();

  if (status === 'loading') return <Spinner />;
  if (error) return <Fatal error={error} />;

  const matchedPost = data.find((post) => post.NO_ID_FIELD === postId);
  if (!matchedPost) return <NotFound />;

  const matchedPage = matchedPost.pages[parseInt(pageIndex)];
  if (!matchedPage) return <NotFound />;

  storage
    .ref(matchedPage.path)
    .getDownloadURL()
    .then(axios)
    .then(({ data }) => setContent(data))
    .catch(console.error);

  return (
    <div className='Page'>
      <aside className='Page__aside'>
        <Link className='Page__post-title' to={`/post/${matchedPost.NO_ID_FIELD}`}>
          {matchedPost.title}
        </Link>
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
                <Markdown>{page.title}</Markdown>
              </Link>
            </li>
          ))}
        </ol>
      </aside>
      <section className='Page__section'>
        <PageContent content={content} language={matchedPost.subject} />
      </section>
    </div>
  );
};

export default Page;
