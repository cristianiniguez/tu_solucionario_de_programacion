import { RouteComponentProps, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Markdown from 'markdown-to-jsx';
import { useFirestore, useFirestoreDocData } from 'reactfire';
import 'firebase/firestore';

import { IPost } from '../data/posts';
import Spinner from '../components/Spinner';
import Fatal from '../components/Fatal';
import '../styles/pages/Post.scss';

type TParams = {
  id: string;
};

const Post = ({ match }: RouteComponentProps<TParams>) => {
  const postId = match.params.id;

  const postRef = useFirestore().collection('posts').doc(postId);
  const { data, status, error } = useFirestoreDocData<IPost>(postRef);

  if (status === 'loading') return <Spinner />;
  if (error) return <Fatal error={error} />;

  return (
    <div className='Post'>
      <section className='Post__hero'>
        <div className='container'>
          <p className='Post__path'>
            <Link className='Post__subject' to={`/subjects/${data.subject}`}>
              <code>{data.subject.toUpperCase()}</code>
            </Link>
            {' > '}
            <code className='Post__title'>{data.title}</code>
          </p>
          <p>{data.description}</p>
          <ul className='Post__pages'>
            {data.pages.map((page, i) => (
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
