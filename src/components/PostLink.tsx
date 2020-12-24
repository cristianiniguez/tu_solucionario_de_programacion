import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../data/posts';

import '../styles/components/PostLink.scss';

type PostLinkContainerProps = {
  firstcolor: string;
};

const PostLinkContainer = styled(Link)<PostLinkContainerProps>`
  --first-color: ${(props) => props.firstcolor};
`;

type PostLinkProps = {
  post: Post;
  firstcolor: string;
};

const PostLink: FunctionComponent<PostLinkProps> = ({ post, firstcolor }) => {
  return (
    <PostLinkContainer className='PostLink' firstcolor={firstcolor} to='/'>
      <p className='PostLink__title'>{post.title}</p>
      <FontAwesomeIcon className='PostLink__icon' icon={faEye} />
    </PostLinkContainer>
  );
};

export default PostLink;
