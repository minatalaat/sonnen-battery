import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ChargeLevelWithStatusDTO } from '../../../dtos/chargeLevels.types';
import { useAppTheme } from '../../../contexts';
import { ChartTooltip } from './ChartTooltip';

interface ChartProps {
    data: Array<ChargeLevelWithStatusDTO> | null;
    xKey: string;
    yKey: string;
    domain?: Array<number>
}

const Chart: React.FC<ChartProps> = ({ data, xKey, yKey, domain }) => {
    const { theme } = useAppTheme();
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data ?? []} barGap={0} margin={{ top: theme.chart.spacing.sm, right: theme.chart.spacing.sm, left: theme.chart.spacing.sm, bottom: theme.chart.spacing.m }}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.background} />
                <XAxis dataKey={xKey} stroke={theme.colors.primary} interval={0} angle={-45} tick={{ textAnchor: 'end', fontFamily: 'sans-serif' }} />
                <YAxis dataKey={yKey} stroke={theme.colors.primary} domain={domain ?? [0, 100]} tick={{ fontFamily: 'sans-serif' }} />
                <Tooltip contentStyle={{ width: 20, height: 20 }} viewBox={{ x: 0, y: 0, width: 20, height: 20 }} content={<ChartTooltip />} shared={false} />

                <Bar
                    barSize={theme.chart.barSize.s1}
                    type="monotone"
                    dataKey={yKey}
                    radius={[theme.chart.barSize.s1, theme.chart.barSize.s1, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;
