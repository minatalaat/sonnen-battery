export interface ChargelevelDTO {
  date: string;
  chargingLevel: number;
  internalEventId: number;
}
export interface ChargeLevelWithStatusDTO extends ChargelevelDTO {
  date: string;
  chargingLevel: number;
  internalEventId: number;
  status: string;
  stroke: string;
  fill: string;
}
