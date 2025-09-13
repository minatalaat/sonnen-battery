import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '../../constants/paths.constants';
import { lazy } from 'react';
import AppRoute from '../AppRoute/AppRoute';

const Home = lazy(() => import('../../pages/Home'))

const AppRoutes: React.FC = () => {


    // Add AppRoute to lazy load Components
    return (

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
    );
};
export default AppRoutes;
