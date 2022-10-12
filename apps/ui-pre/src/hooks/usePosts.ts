import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { IPost } from '../data/posts';

const usePosts = () => {
  const firestore = useFirestore();
  const postsRef = collection(firestore, 'posts');
  const { data, ...rest } = useFirestoreCollectionData(postsRef);
  return { ...rest, data: data as IPost[] };
};

export default usePosts;
