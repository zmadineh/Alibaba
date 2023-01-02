import {swappableInputsDetailType} from "../../model/form/swappableInputsDetail.type";
import {internalCities} from "../database/internalCities.data";
import {externalAirports} from "../database/externalAirports.data";
import {createPointList, createPointListByCity} from "../../helper/database/createPointList";
import {getCitiesByCountryId} from "../database/cities.data";
import {filterd_TripData} from "../tickets_data/DataTickets";
import {internalAirports} from "../database/internalAirports.data";

export const internalFlightInputDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر',
        data: createPointList(internalAirports),
        iconName: 'location',
        listDescription: false,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر',
        data: createPointList(internalAirports),
        iconName: 'location',
        listDescription: false,
    }
];

export const internationalFlightInputDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر و فرودگاه',
        data: createPointList(externalAirports),
        iconName: 'location',
        listDescription: true,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر و فرودگاه',
        data: createPointList(externalAirports),
        iconName: 'location',
        listDescription: true,
    }
];

export const busInputsDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر، پایانه',
        data: createPointListByCity(getCitiesByCountryId(1)),
        iconName: 'location',
        listDescription: true,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر، پایانه',
        data: createPointListByCity(getCitiesByCountryId(1)),
        iconName: 'location',
        listDescription: true,
    }
];

export const trainInputsDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر',
        data: createPointListByCity(getCitiesByCountryId(1)),
        iconName: 'location',
        listDescription: false,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر',
        data: createPointListByCity(getCitiesByCountryId(1)),
        iconName: 'location',
        listDescription: false,
    }
];

export const getInputDetailsByType = (type: number) : Promise<swappableInputsDetailType[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(type === 0) resolve(internalFlightInputDetails)
            else if(type === 1) resolve(internationalFlightInputDetails)
            else if(type === 2) resolve(busInputsDetails)
            else if(type === 3) resolve(trainInputsDetails)
            else reject([])
        }, 100);
    })


}
