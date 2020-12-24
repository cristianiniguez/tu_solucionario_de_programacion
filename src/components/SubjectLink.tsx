import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISubject } from '../data/subjects';
import '../styles/components/SubjectLink.scss';

type SubjectLinkContainerProps = {
  borderColor: string;
};

const SubjectLinkContainer = styled.div<SubjectLinkContainerProps>`
  --first-color: ${(props) => props.borderColor};
`;

type SubjectLinkProps = {
  subject: ISubject;
};

const SubjectLink: FunctionComponent<SubjectLinkProps> = ({ subject }) => {
  return (
    <SubjectLinkContainer borderColor={subject.brandColor} className='SubjectLink'>
      <div className='SubjectLink__front'>
        <FontAwesomeIcon className='SubjectLink__icon' icon={subject.icon} />
        <h2 className='SubjectLink__name'>{subject.name}</h2>
      </div>
      <div className='SubjectLink__back'>
        <p className='SubjectLink__description'>{subject.description}</p>
        <Link to={`/subjects/${subject.endpoint}`}>Ver más</Link>
      </div>
    </SubjectLinkContainer>
  );
};

export default SubjectLink;
