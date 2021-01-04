import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { IPost } from '../data/posts';
import '../styles/components/PostMenu.scss';

type PostMenuProps = {
  post: IPost;
};

const PostMenu: FunctionComponent<PostMenuProps> = ({ post }) => {
  return (
    <ul className='PostMenu'>
      {post.pages.map((page, i) => (
        <li key={i}>
          <Link to={`/post/${post.NO_ID_FIELD}/${i}`}>
            <Markdown>{page.title}</Markdown>
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostMenu;
