import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Wholesale } from '../pages/Wholesale';
import { scrollToHashOnLoad } from '../lib/scrollToHash';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wholesale />
  </StrictMode>,
);

scrollToHashOnLoad();
