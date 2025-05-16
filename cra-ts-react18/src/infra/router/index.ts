import { createBrowserRouter } from 'react-router-dom';
import adminRoutes from './routes/adminRoutes';
import commonRoutes from './routes/commonRoutes';

const router = createBrowserRouter([...adminRoutes, ...commonRoutes], {
  basename: '',
});

export default router;
