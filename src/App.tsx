import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppErrorBoundary from './components/ui/AppErrorBoundary';
import AppLayout from './components/ui/AppLayout';
import AppRoutes from './routes/AppRoutes';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
    },
  },
});
function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <ErrorBoundary FallbackComponent={AppErrorBoundary}>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </ErrorBoundary>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
