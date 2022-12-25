import {searchFromValue} from "../../model/searchFormValue.type";

export const emptySearchFormData = {
    origin: '',
    destination: '',
    oneWayRoad: false,
    departureDate: '',
    returnDate: '',
    passengerCount: {adult: 1, child: 0, baby: 0},
    // formType: 0,
    // flightClass: 'economy',
    // numOfRoom: 1,
}