import adminRoutes from '@infra/router/routes/adminRoutes.tsx';
import commonRoutes from '@infra/router/routes/commonRoutes.tsx';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([...adminRoutes, ...commonRoutes], {
  basename: '',
});

export default router;
