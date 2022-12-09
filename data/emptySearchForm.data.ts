import {searchFromValue} from "../model/searchFormValue.type";

export const emptySearchFormData = {
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengerCount: {adult: 1, child: 0, baby: 0},
    formType: 0,
    oneWayRoad: false,
    flightClass: 'economy',
    numOfRoom: 1,

}