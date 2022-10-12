import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Subjects from './collections/Subjects';
import Posts from './collections/Posts';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [Users, Subjects, Posts],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
