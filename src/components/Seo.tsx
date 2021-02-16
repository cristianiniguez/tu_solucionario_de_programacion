import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

type SeoProps = {
  title?: string;
  description?: string;
};

const Seo: FunctionComponent<SeoProps> = ({ title, description }) => {
  console.log(description);

  const siteTitle: string = 'Tu Solucionario de Programación';
  const displayTitle: string = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{displayTitle}</title>
      <meta name='description' content={description || 'Posts de programación para tí'} />
    </Helmet>
  );
};

export default Seo;
