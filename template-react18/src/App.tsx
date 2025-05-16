import { RouterProvider } from 'react-router';
import router from '@infra/router';
import useAxiosInterceptor from '@infra/api/useAxiosInterceptor.ts';

function App() {
  useAxiosInterceptor();
  return <RouterProvider router={router} />;
}

export default App;
