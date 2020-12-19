import { faHtml5, faCss3Alt, faJs, IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface Subject {
  id: string;
  endpoint: string;
  name: string;
  description: string;
  icon: IconDefinition;
  brandColor: string;
  textColor: string;
}

export const subjects: Subject[] = [
  {
    id: 'S001',
    endpoint: 'html',
    name: 'HTML',
    description:
      'HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto',
    icon: faHtml5,
    brandColor: '#E96228',
    textColor: 'var(--white)',
  },
  {
    id: 'S002',
    endpoint: 'css',
    name: 'CSS',
    description:
      'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado',
    icon: faCss3Alt,
    brandColor: '#2862E9',
    textColor: 'var(--white)',
  },
  {
    id: 'S003',
    endpoint: 'js',
    name: 'JavaScript',
    description:
      'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.',
    icon: faJs,
    brandColor: '#F7DF1E',
    textColor: 'var(--black)',
  },
];
