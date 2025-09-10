import { AppLayout } from '../../components/ui/AppLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import { Home } from '../../pages/Home';
import { AppRoute } from '../../components/RouteWrapper';

const AppRoutes: React.FC = () => {
    return (
        <AppLayout>
            <Routes>
                <Route
                    path={PATHS['HOME']}
                    element={
                        <AppRoute>
                            <Home />
                        </AppRoute>
                    }
                />
                <Route
                    path='*'
                    element={<Navigate to={PATHS['HOME']} />}
                />
            </Routes>
        </AppLayout>
    );
};
export default AppRoutes;
