import { FC } from 'react';

import { TPost } from '@/types/common';
import styles from '@/styles/components/sections/PostHero.module.scss';

type PostHeroProps = TPost;

const PostHero: FC<PostHeroProps> = ({ name, description }) => {
  return (
    <section className={styles.root}>
      <div className='container'>
        <p className={styles.title}>
          <code>{name}</code>
        </p>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default PostHero;
