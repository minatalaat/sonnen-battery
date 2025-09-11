import moment from 'moment';
import { useAppTheme } from '../contexts';
import type { ChargelevelDTO, ChargeLevelWithStatusDTO } from '../dtos/chargeLevels.types';

export const useFormatChargeEvents = () => {
  const { theme } = useAppTheme();
  const getStrokeColor = (state: string): string => {
    if (state === 'charging') return theme.colors.liteCharing;
    if (state === 'discharging') return theme.colors.liteDisCharing;
    return theme.colors.primary;
  };
  const getFillColor = (state: string): string => {
    if (state === 'charging') return theme.colors.liteCharing;
    if (state === 'discharging') return theme.colors.liteDisCharing;
    return theme.colors.primary;
  };

  const formatChargeLevelAsSegements = (data: Array<ChargelevelDTO>) => {
    if (!data || data.length < 2) return [];

    const chartData: Array<ChargeLevelWithStatusDTO> = [];
    let currentSegment = {
      ...data?.[0],
      date: moment(data[0]?.date).format('HH-mm A'),
      status: 'idle',
      stroke: getStrokeColor('idle'),
      fill: getFillColor('idle'),
    };

    for (let i = 1; i < data.length - 1; i++) {
      const previous = { ...data[i - 1], date: moment(data[i - 1]?.date).format('HH-mm A') };
      const current = { ...data[i], date: moment(data[i]?.date).format('HH-mm A') };

      let newStatus: string = 'idle';
      if (current.chargingLevel > previous.chargingLevel) {
        newStatus = 'charging';
      } else if (current.chargingLevel < previous.chargingLevel) {
        newStatus = 'discharging';
      }

      chartData.push({
        ...current,
        status: newStatus,
        stroke: getStrokeColor(newStatus),
        fill: getFillColor(newStatus),
      });

      currentSegment = {
        ...currentSegment,
        status: newStatus,
        stroke: getStrokeColor(newStatus),
        fill: getFillColor(newStatus),
      };
    }

    chartData.push(currentSegment);

    return chartData;
  };

  return { formatChargeLevelAsSegements };
};
