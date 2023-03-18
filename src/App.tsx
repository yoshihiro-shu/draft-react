import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {
  RecoilRoot
} from 'recoil';

import './App.css';

import router from './router';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
