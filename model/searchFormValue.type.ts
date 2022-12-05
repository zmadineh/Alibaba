import {passengersCount} from "./passengerCount.type";

export interface searchFromValue {
    originCity: string,
    destinationCity: string,
    departureDate: string,
    returnDate: string,
    passengerCount: passengersCount,
}