import { useContext } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Markdown from 'markdown-to-jsx';

import { PostsContext } from '../context/PostsContext';
import Spinner from '../components/Spinner';
import Fatal from '../components/Fatal';
import NotFound from './NotFound';
import '../styles/pages/Post.scss';

type TParams = {
  id: string;
};

const Post = ({ match }: RouteComponentProps<TParams>) => {
  const postId = match.params.id;
  const { data, status, error } = useContext(PostsContext)();

  if (status === 'loading') return <Spinner />;
  if (error) return <Fatal error={error} />;

  const matchedPost = data.find((post) => post.NO_ID_FIELD === postId);
  if (!matchedPost) return <NotFound />;

  return (
    <div className='Post'>
      <section className='Post__hero'>
        <div className='container'>
          <p className='Post__path'>
            <Link className='Post__subject' to={`/subjects/${matchedPost.subject}`}>
              <code>{matchedPost.subject.toUpperCase()}</code>
            </Link>
            {' > '}
            <code className='Post__title'>{matchedPost.title}</code>
          </p>
          <p>{matchedPost.description}</p>
          <ul className='Post__pages'>
            {matchedPost.pages.map((page, i) => (
              <li key={i}>
                <Link to={`/post/${postId}/${i}`}>
                  <Markdown>{page.title}</Markdown>
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Post;
