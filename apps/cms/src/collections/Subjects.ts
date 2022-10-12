import { CollectionConfig } from 'payload/types';

const Subjects: CollectionConfig = {
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', required: true, type: 'text' },
    { name: 'description', required: true, type: 'textarea' },
    { name: 'slug', index: true, required: true, type: 'text', unique: true },
    { name: 'icon', required: true, type: 'text' },
    { name: 'brandColor', required: true, type: 'text' },
    { name: 'textColor', required: true, type: 'text' },
  ],
  slug: 'subjects',
};

export default Subjects;
