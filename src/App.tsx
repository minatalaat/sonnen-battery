import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { AppErrorBoundary } from './components/ui/AppErrorBoundary';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={AppErrorBoundary}>
        <AppRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
