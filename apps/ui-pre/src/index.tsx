import { createRoot } from 'react-dom/client';
import FirebaseProvider from './providers/FirebaseProvider';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
