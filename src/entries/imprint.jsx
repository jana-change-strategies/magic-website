import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Imprint } from '../pages/Imprint';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Imprint />
  </StrictMode>,
);
