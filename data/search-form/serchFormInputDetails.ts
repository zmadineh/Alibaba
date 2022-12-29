import {swappableInputsDetailType} from "../../model/swappableInputsDetail.type";
import {internalCities} from "../database/internalCities.data";
import {externalAirports} from "../database/externalAirports.data";

export const internalFlightInputDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر',
        data: internalCities,
        iconName: 'location',
        listDescription: false,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر',
        data: internalCities,
        iconName: 'location',
        listDescription: false,
    }
];

export const internationalFlightInputDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر و فرودگاه',
        data: externalAirports,
        iconName: 'location',
        listDescription: true,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر و فرودگاه',
        data: externalAirports,
        iconName: 'location',
        listDescription: true,
    }
];

export const busInputsDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر، پایانه',
        data: internalCities,
        iconName: 'location',
        listDescription: true,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر، پایانه',
        data: internalCities,
        iconName: 'location',
        listDescription: true,
    }
];

export const trainInputsDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر',
        data: internalCities,
        iconName: 'location',
        listDescription: false,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر',
        data: internalCities,
        iconName: 'location',
        listDescription: false,
    }
];

export const getInputDetailsByType = (type: number) => {
    if(type === 0) return internalFlightInputDetails
    else if(type === 1) return internationalFlightInputDetails
    else if(type === 2) return busInputsDetails
    else if(type === 3) return trainInputsDetails
    else return []
}
