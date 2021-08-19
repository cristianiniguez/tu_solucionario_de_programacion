import { FC } from 'react';
import classNames from 'classnames';

import { TPost } from '@/types/common';
import PostLink from '../PostLink';

import styles from '@/styles/components/sections/SubjectPosts.module.scss';

type SubjectPostsProps = {
  posts: TPost[];
};

const SubjectPosts: FC<SubjectPostsProps> = ({ posts }) => {
  return (
    <section className='Subject__posts'>
      <div className={classNames('container', styles.container)}>
        {posts.length > 0 ? (
          <>
            <h2>Posts</h2>
            <div className={styles.grid}>
              {posts.map((post) => (
                <PostLink key={post.id} {...post} />
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
