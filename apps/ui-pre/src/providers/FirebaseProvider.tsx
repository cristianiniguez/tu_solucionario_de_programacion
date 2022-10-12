import { FC, PropsWithChildren } from 'react';
import { FirebaseAppProvider, FirestoreProvider, StorageProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebaseConfig from '../config/firebase';

const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>{children}</FirebaseAppProvider>
);

const AppServicesProvider: FC<PropsWithChildren> = ({ children }) => {
  const firebaseApp = useFirebaseApp();

  return (
    <FirestoreProvider sdk={getFirestore(firebaseApp)}>
      <StorageProvider sdk={getStorage(firebaseApp)}>{children}</StorageProvider>
    </FirestoreProvider>
  );
};

const FirebaseProvider: FC<PropsWithChildren> = ({ children }) => (
  <AppProvider>
    <AppServicesProvider>{children}</AppServicesProvider>
  </AppProvider>
);

export default FirebaseProvider;
