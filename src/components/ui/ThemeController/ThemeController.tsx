import type React from 'react';
import Typography from '../Typography/Typography';
import { useAppTheme } from '../../../contexts';
import ToggleButton from '../ToggleButton';

const ThemeController: React.FC = () => {
    const { toggleTheme } = useAppTheme();
    return (
        <>
            <Typography variant="mdText"> Light </Typography>
            <ToggleButton name="toggle" onChange={() => toggleTheme()}></ToggleButton>
            <Typography variant="mdText">Dark </Typography>
        </>
    );
};

export default ThemeController;
