import {passengersCount} from "./passengerCount.type";

export interface searchFromValue {
    origin: string,
    destination: string,
    departureDate: string,
    returnDate: string,
    passengerCount: passengersCount,
    formType: number,
}