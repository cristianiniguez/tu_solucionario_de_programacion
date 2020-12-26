import { createContext, FunctionComponent } from 'react';
import { ObservableStatus, useFirestore, useFirestoreCollectionData } from 'reactfire';
import 'firebase/firestore';

import { IPost } from '../data/posts';

const usePostsData = () => {
  const postsRef = useFirestore().collection('posts');
  const information = useFirestoreCollectionData<IPost>(postsRef);
  return information;
};

export const PostsContext = createContext<() => ObservableStatus<IPost[]>>(usePostsData);

const PostsContextProvider: FunctionComponent = ({ children }) => (
  <PostsContext.Provider value={usePostsData}>{children}</PostsContext.Provider>
);

export default PostsContextProvider;
