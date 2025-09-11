import { sonnenApi } from '../apis/sonnenApi';
import { endPoints } from '../constants/endpoints';
import type { ChargelevelDTO } from '../dtos/chargeLevels.types';

const checkValidChargeEvent = (chargeLevel: ChargelevelDTO) => {
  const date = new Date(chargeLevel?.date);
  return (
    chargeLevel?.date &&
    chargeLevel?.chargingLevel &&
    date instanceof Date &&
    !isNaN(date?.getTime()) &&
    typeof chargeLevel.chargingLevel === 'number' &&
    typeof chargeLevel.internalEventId === 'number'
  );
};
export const getChargeLevels = async () => {
  try {
    const res = await sonnenApi.get(endPoints.chargeLevels.get);
    if (res?.data?.length === 0) return { status: false, data: [] };
    let chargeLevelsData = res?.data as Array<ChargelevelDTO>;

    //filter not valid events
    chargeLevelsData = chargeLevelsData?.filter(chargeLevel => checkValidChargeEvent(chargeLevel));

    //sort chargeLevelsData by date
    chargeLevelsData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return { status: true, data: chargeLevelsData };
  } catch {
    throw new Error('Failed To Get Charge Levels Events');
  }
};
