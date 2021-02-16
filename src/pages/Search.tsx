import { useContext, useMemo } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import { PostsContext } from '../context/PostsContext';
import Seo from '../components/Seo';
import Spinner from '../components/Spinner';
import Fatal from '../components/Fatal';
import PostLink from '../components/PostLink';
import '../styles/pages/Search.scss';
import { getSubjectByEndpoint } from '../data/subjects';

type TParams = {
  input: string;
};

const Search = ({ match }: RouteComponentProps<TParams>) => {
  const { input } = match.params;

  const { data: postsData, status, error } = useContext(PostsContext)();

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
