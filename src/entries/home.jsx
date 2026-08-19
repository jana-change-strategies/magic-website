import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from '../pages/Home';
import { scrollToHashOnLoad } from '../lib/scrollToHash';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);

scrollToHashOnLoad();
