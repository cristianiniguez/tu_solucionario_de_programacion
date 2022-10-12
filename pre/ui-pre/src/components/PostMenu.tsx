import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { IPost } from '../data/posts';
import { getSubjectByEndpoint } from '../data/subjects';
import '../styles/components/PostMenu.scss';

type PostMenuContainerProps = {
  hovercolor: string | undefined;
};

const PostMenuContainer = styled.ul<PostMenuContainerProps>`
  --hover-color: ${(props) => props.hovercolor || '#000'};
`;

type PostMenuProps = {
  post: IPost;
};

const PostMenu: FunctionComponent<PostMenuProps> = ({ post }) => {
  const matchedSubject = getSubjectByEndpoint(post.subject);

  return (
    <PostMenuContainer hovercolor={matchedSubject?.brandColor} className='PostMenu normalized'>
      {post.pages.map((page, i) => (
        <li key={i}>
          <Link to={`/post/${post.NO_ID_FIELD}/${i}`}>
            <Markdown>{page.title}</Markdown>
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </li>
      ))}
    </PostMenuContainer>
  );
};

export default PostMenu;
