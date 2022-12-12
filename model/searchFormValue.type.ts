import {passengersCount} from "./passengerCount.type";

export interface searchFromValue {
    origin: string,
    destination: string,
    oneWayRoad: boolean,
    departureDate: string,
    returnDate: string,
    passengerCount: passengersCount,
    formType: number,
}