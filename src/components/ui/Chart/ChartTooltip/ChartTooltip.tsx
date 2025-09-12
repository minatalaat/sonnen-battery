import type React from 'react';
import { TooltipContainer } from './ChartTooltip.styles';
import Typography from '../../Typography/Typography';

interface ChartTooltipPayloadItem {
    payload: {
        status?: string;
        chargingLevel?: number;
        [key: string]: unknown;
    };
    [key: string]: unknown;
}

interface ChartTooltipProps {
    payload?: ChartTooltipPayloadItem[];
    active?: boolean;
}

const ChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload?.[0]?.payload;
        const STATUS_ICONS = {
            'charging': <span className="icon">🔋</span>,
            'discharging': <span className="icon">⚡️</span>,
            'idle': <span className="icon">📴</span>,
        }
        return (
            <TooltipContainer>
                <div className="content">
                    {STATUS_ICONS[(data.status ?? 'charging') as 'charging' | 'discharging' | 'idle']}
                    <Typography variant="lgText">{`${data?.chargingLevel}%`}</Typography>
                </div>
            </TooltipContainer>
        );
    }
    return null;
};

export default ChartTooltip;
