import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '../../constants/paths.constants';
import { Home } from '../../pages/Home';
import { AppRoute } from '../AppRoute';

const AppRoutes: React.FC = () => {
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
