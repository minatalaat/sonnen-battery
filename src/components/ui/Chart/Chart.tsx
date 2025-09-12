import React from 'react';
import { Bar, BarChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ChargeLevelWithStatusDTO } from '../../../dtos/chargeLevels.types';
import { useAppTheme } from '../../../contexts';
import { ChartTooltip } from './ChartTooltip';
import { ChartLegend } from './ChartLegend';
import useBreakpointCheck from '../../../hooks/useBreakPointCheck';

interface ChartProps {
    data: Array<ChargeLevelWithStatusDTO> | null;
    xData: { key: string; label?: string };
    yData: { key: string; label?: string; domain?: Array<number> };
}

const Chart: React.FC<ChartProps> = ({ data, xData, yData }) => {
    const { theme } = useAppTheme();
    const isMobile = useBreakpointCheck(768)
    return (
        <ResponsiveContainer width="100%" height={'100%'}>
            <BarChart
                data={data ?? []}
                margin={{
                    top: isMobile ? theme.chart.spacing.s : theme.chart.spacing.sm,
                    right: isMobile ? theme.chart.spacing.s : undefined,
                    bottom: theme.chart.spacing.xl,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.background} />
                <XAxis
                    dataKey={xData.key}
                    stroke={theme.colors.primary}
                    angle={-45}
                    tick={{ textAnchor: 'end', fontFamily: theme.fonts.family, color: theme.colors.primary, fontSize: theme.typoGraphy.fontSize.s3 }}
                >
                    <Label
                        value={xData.label}
                        position="bottom"
                        angle={0}
                        dy={theme.chart.spacing.sm}
                        fontFamily={theme.fonts.family}
                        fontSize={theme.typoGraphy.fontSize.s4}
                        fill={theme.colors.primary}
                    />
                </XAxis>
                <YAxis
                    dataKey={yData.key}
                    stroke={theme.colors.primary}
                    domain={yData?.domain ?? [0, 100]}
                    tick={{ fontFamily: theme.fonts.family, fontSize: theme.typoGraphy.fontSize.s3 }}
                    color={theme.colors.primary}

                >
                    <Label
                        value={yData.label}
                        position="center"
                        angle={-90}
                        fontFamily={theme.fonts.family}
                        fontSize={theme.typoGraphy.fontSize.s4}
                        fill={theme.colors.primary}
                    />
                </YAxis>
                <Tooltip content={<ChartTooltip />} shared={false} />
                <Legend
                    layout="vertical"
                    verticalAlign="top"
                    align={"center"}
                    content={
                        <ChartLegend
                            data={[
                                { label: 'Charging', color: theme.colors.liteCharing },
                                { label: 'Discharging', color: theme.colors.liteDisCharing },
                                { label: 'idle', color: theme.colors.idle },

                            ]}
                        />
                    }
                    wrapperStyle={{
                        paddingBottom: isMobile ? theme.spacing.sm : undefined,
                    }}
                />
                <Bar
                    barSize={theme.chart.barSize.s1}
                    type="monotone"
                    dataKey={yData.key}
                    radius={[theme.chart.barSize.s1, theme.chart.barSize.s1, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer >
    );
};

export default Chart;
