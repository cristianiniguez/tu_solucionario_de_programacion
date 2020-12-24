import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISubject } from '../data/subjects';

import '../styles/components/HomeSubject.scss';

type HomeSubjectContainerProps = {
  bgcolor: string;
  textcolor: string;
};

const HomeSubjectContainer = styled(Link)<HomeSubjectContainerProps>`
  &:hover {
    background-color: ${(props) => props.bgcolor};
    color: ${(props) => props.textcolor};
    border-color: ${(props) => props.bgcolor};
  }
`;

type HomeSubjectProps = {
  subject: ISubject;
};

const HomeSubject: FunctionComponent<HomeSubjectProps> = ({ subject }) => {
  return (
    <HomeSubjectContainer
      bgcolor={subject.brandColor}
      textcolor={subject.textColor}
      className='HomeSubject'
      to={`/subjects/${subject.endpoint}`}
    >
      <FontAwesomeIcon className='HomeSubject__icon' icon={subject.icon} />
      <h4 className='HomeSubject__label'>{subject.name}</h4>
    </HomeSubjectContainer>
  );
};

export default HomeSubject;
