import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/NotFound.scss';

const NotFound: FunctionComponent = () => {
  return (
    <div className='NotFound'>
      <section>
        <h2>404</h2>
        <p>Lo que estás buscando no se pudo encontrar</p>
        <Link to='/'>Ir al Home</Link>
      </section>
    </div>
  );
};

export default NotFound;
