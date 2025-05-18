import React from 'react';
import { RouterProvider } from 'react-router';
import router from './infra/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
