import { QueryClient } from '@tanstack/react-query';

const commonQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnMount: 'always',
    },
  },
});

export default commonQueryClient;
