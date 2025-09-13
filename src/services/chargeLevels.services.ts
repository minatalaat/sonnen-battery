import { sonnenApi } from '../apis/sonnenApi';
import { endPoints } from '../constants/endpoints.constants';
import type { ChargelevelDTO } from '../dtos/chargeLevels.types';

const checkValidChargeEvent = (chargeLevelEvent: ChargelevelDTO) => {
  const date = new Date(chargeLevelEvent?.date);
  return (
    chargeLevelEvent?.date &&
    chargeLevelEvent?.chargingLevel &&
    date instanceof Date &&
    !isNaN(date?.getTime()) &&
    typeof chargeLevelEvent.chargingLevel === 'number' &&
    chargeLevelEvent.chargingLevel >= 0 &&
    chargeLevelEvent.chargingLevel <= 100 &&
    typeof chargeLevelEvent.internalEventId === 'number'
  );
};
export const getChargeLevels = async () => {
  try {
    //handle Get Request of charging data
    const res = await sonnenApi.get(endPoints.chargeLevels.get);
    if (res?.data?.length === 0) return { status: false, data: [] };
    let chargeLevelsData = res?.data as Array<ChargelevelDTO>;

    //filter not valid events
    chargeLevelsData = chargeLevelsData?.filter(chargeLevelEvent => checkValidChargeEvent(chargeLevelEvent));

    //sort chargeLevelsData by date
    chargeLevelsData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return { status: true, data: chargeLevelsData };
  } catch {
    throw new Error('Failed To Get Charge Levels Events');
  }
};
