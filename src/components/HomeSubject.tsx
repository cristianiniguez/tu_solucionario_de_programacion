import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Subject } from '../data/subjects';

import '../styles/components/HomeSubject.css';

type HomeSubjectContainerProps = {
  bgColor: string;
  textColor: string;
};

const HomeSubjectContainer = styled(Link)<HomeSubjectContainerProps>`
  &:hover {
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
    border-color: ${(props) => props.bgColor};
  }
`;

type HomeSubjectProps = {
  subject: Subject;
};

const HomeSubject: FunctionComponent<HomeSubjectProps> = ({ subject }) => {
  return (
    <HomeSubjectContainer
      bgColor={subject.brandColor}
      textColor={subject.textColor}
      className='HomeSubject'
      to={`/subjects/${subject.endpoint}`}
    >
      <FontAwesomeIcon className='HomeSubject__icon' icon={subject.icon} />
      <h4 className='HomeSubject__label'>{subject.name}</h4>
    </HomeSubjectContainer>
  );
};

export default HomeSubject;
