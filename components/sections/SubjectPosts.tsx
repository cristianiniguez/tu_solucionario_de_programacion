import { FC, useContext } from 'react';
import classNames from 'classnames';

import PostLink from '../PostLink';
import { TPost } from '@/types/common';
import SubjectContext from '@/context/SubjectContext';

import styles from '@/styles/components/sections/SubjectPosts.module.scss';

type SubjectPostsProps = {
  posts: TPost[];
};

const SubjectPosts: FC<SubjectPostsProps> = ({ posts }) => {
  const { brandColor } = useContext(SubjectContext);

  return (
    <section className='Subject__posts'>
      <div className={classNames('container', styles.container)}>
        {posts.length > 0 ? (
          <>
            <h2>Posts</h2>
            <div className={styles.grid}>
              {posts.map((post) => (
                <PostLink key={post.id} {...post} color={brandColor} />
              ))}
            </div>
          </>
        ) : (
          <p className={styles.message}>Parece que esta materia aún no tiene publicaciones</p>
        )}
      </div>
    </section>
  );
};

export default SubjectPosts;
