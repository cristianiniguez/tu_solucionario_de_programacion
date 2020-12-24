import { RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import 'firebase/firestore';

import PostLink from '../components/PostLink';
import Spinner from '../components/Spinner';
import Fatal from '../components/Fatal';
import NotFound from './NotFound';

import { subjects } from '../data/subjects';
import { Post } from '../data/posts';
import '../styles/pages/Subject.scss';

type TParams = {
  endpoint: string | undefined;
};

const Subject = ({ match }: RouteComponentProps<TParams>) => {
  const matchedSubject = subjects.find((sub) => sub.endpoint === match.params.endpoint);
  const postsRef = useFirestore().collection('posts').where('subject', '==', match.params.endpoint);
  const { data, status, error } = useFirestoreCollectionData<Post>(postsRef);

  if (!matchedSubject) return <NotFound />;
  if (status === 'loading') return <Spinner />;
  if (error) return <Fatal error={error} />;

  const { name, description, icon, endpoint, brandColor } = matchedSubject;
  const matchedPosts = data.filter((post) => post.subject === endpoint);

  return (
    <div className='Subject'>
      <section className='Subject__hero'>
        <div className='container Subject__hero-container'>
          <FontAwesomeIcon className='Subject__icon' icon={icon} />
          <div className='Subject__info'>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </section>
      <section className='Subject__posts'>
        <div className='container Subject__posts-container'>
          {matchedPosts.length > 0 ? (
            <>
              <h2>Posts</h2>
              <div className='Subject__posts-grid'>
                {matchedPosts.map((post) => (
                  <PostLink key={post.NO_ID_FIELD} post={post} firstcolor={brandColor} />
                ))}
              </div>
            </>
          ) : (
            <p className='Subject__message'>Parece que esta materia aún no tiene publicaciones</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Subject;
