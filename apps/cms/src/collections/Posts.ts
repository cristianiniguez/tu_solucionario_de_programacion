import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', required: true, type: 'text' },
    { name: 'description', required: true, type: 'textarea' },
    { name: 'subject', type: 'relationship', relationTo: 'subjects' },
    {
      name: 'papers',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'content', required: true, type: 'richText' },
      ],
    },
  ],
  slug: 'posts',
};

export default Posts;
