import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Spinner from '../components/Spinner';
import Fatal from '../components/Fatal';
import PostLink from '../components/PostLink';
import '../styles/pages/Search.scss';
import { getSubjectByEndpoint } from '../data/subjects';
import usePosts from '../hooks/usePosts';

const Search = () => {
  const { input = '' } = useParams();
  const { data: postsData, status, error } = usePosts();

  const filteredPosts = useMemo(() => {
    return postsData?.filter((post) => post.title.match(new RegExp(input, 'i'))) || [];
  }, [input, postsData]);

  if (status === 'loading') return <Spinner />;
  if (error) return <Fatal error={error} />;

  return (
    <>
      <Seo title={`Resultados para "${input}"`} />
      <div className='Search'>
        <div className='container'>
          {filteredPosts.length > 0 ? (
            <>
              <h1>
                Resultados para <span className='text--red'>{input}</span>
              </h1>
              <div className='Search__posts'>
                {filteredPosts.map((post) => (
                  <PostLink
                    key={post.NO_ID_FIELD}
                    post={post}
                    firstcolor={getSubjectByEndpoint(post.subject)?.brandColor || '#000'}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <h1>No hay resultados</h1>
              <Link to='/'>Ir al Home</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
