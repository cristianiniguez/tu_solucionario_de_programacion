import { useEffect, useState } from 'react';
import { useStorage, useStorageDownloadURL } from 'reactfire';
import { ref } from 'firebase/storage';
import axios from 'axios';

const usePageContent = (pagePath: string) => {
  const storage = useStorage();
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading');
  const [error, setError] = useState<Error | null>(null);

  const { data: pageURL, status: pageURLStatus } = useStorageDownloadURL(ref(storage, pagePath));

  useEffect(() => {
    setContent('');
    setStatus('loading');
    setError(null);
  }, [pagePath]);

  useEffect(() => {
    if (pageURLStatus === 'success' && pageURL) {
      axios
        .get(pageURL)
        .then(({ data }) => {
          setContent(data);
          setStatus('success');
        })
        .catch(({ error }) => {
          setError(error);
          setStatus('error');
        });
    }
  }, [pageURLStatus, pageURL]);

  return { content, error, status };
};

export default usePageContent;
