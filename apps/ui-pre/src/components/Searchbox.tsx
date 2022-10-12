import { useState, useEffect, useMemo, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import usePosts from '../hooks/usePosts';

import { IPost } from '../data/posts';
import '../styles/components/Searchbox.scss';

const Searchbox = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<IPost[]>([]);
  const { data: postsData, status, error } = usePosts();
  const navigate = useNavigate();

  const filteredPosts = useMemo(() => {
    return postsData?.filter((post) => post.title.match(new RegExp(input, 'i'))) || [];
  }, [input, postsData]);

  useEffect(() => {
    setResults(input ? filteredPosts : []);
  }, [input, filteredPosts]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${input}`);
    setInput('');
  };

  return (
    <form className='Searchbox' onSubmit={handleSubmit}>
      <div className='Searchbox__input'>
        <input
          type='text'
          placeholder='Buscar publicaciones'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={status === 'loading' || !!error}
        />
        {input && (
          <button className='Searchbox__clear' onClick={() => setInput('')}>
            &times;
          </button>
        )}
      </div>
      <button
        type='submit'
        disabled={status === 'loading' || !!error || !input}
        className='Searchbox__button'
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      {results.length > 0 && (
        <div className='Searchbox__results'>
          {results.map((res) => (
            <Link
              key={res.NO_ID_FIELD}
              className='Searchbox__res'
              to={`/post/${res.NO_ID_FIELD}`}
              onClick={() => setInput('')}
            >
              <p>
                <strong>{res.title}</strong>
                <br />
                <span>{res.description}</span>
              </p>
            </Link>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbox;
