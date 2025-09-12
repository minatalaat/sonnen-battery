import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppTheme } from '../../../contexts';
const PlaceHolder: React.FC = () => {
    const { theme } = useAppTheme();
    return (
        <SkeletonTheme baseColor={theme.colors.background} highlightColor={theme.colors.hightLightColor}>
            <Skeleton
                style={{
                    height: theme.spacing.xl,
                    width: '100%',
                    marginBottom: theme.spacing.xs,
                }}
                count={6}
            />
        </SkeletonTheme>
    );
};
export default PlaceHolder;
