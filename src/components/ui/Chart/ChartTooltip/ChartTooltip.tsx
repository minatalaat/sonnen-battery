import type React from 'react';
import { TooltipContainer } from './ChartTooltip.styles';
import Typography from '../../Typography/Typography';


interface ChartTooltipProps {
    payload?: any[];
    active?: boolean
}

const ChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {

        console.log(payload);
        const data = payload?.[0]?.payload;


        return (
            <TooltipContainer >
                <div className="content">
                    {data?.status === 'charging' ? <span className="icon">⚡️</span> : <span className="icon">🔋</span>}
                    <Typography variant='mdText'>{`${data?.chargingLevel}%`}</Typography>
                </div>
            </TooltipContainer>
        );
    }
    return null
};

export default ChartTooltip;
