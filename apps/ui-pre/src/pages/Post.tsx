import { Link, useParams } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import Seo from '../components/Seo';
import PostMenu from '../components/PostMenu';
import Spinner from '../components/Spinner';
import Fatal from '../components/Fatal';
import NotFound from './NotFound';
import '../styles/pages/Post.scss';

const Post = () => {
  const { id: postId } = useParams();
  const { data: posts, status, error } = usePosts();

  if (status === 'loading') return <Spinner />;
  if (error) return <Fatal error={error} />;

  const matchedPost = posts.find((post) => post.NO_ID_FIELD === postId);
  if (!matchedPost) return <NotFound />;

  return (
    <>
      <Seo title={matchedPost.title} description={matchedPost.description} />
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
            <PostMenu post={matchedPost} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Post;
