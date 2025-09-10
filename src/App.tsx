import { useAppTheme } from './contexts/AppTheme'
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { AppErrorBoundary } from './components/ui/AppErrorBoundary';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  const { theme } = useAppTheme();
  console.log(theme);



  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={AppErrorBoundary}>
        <AppRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
