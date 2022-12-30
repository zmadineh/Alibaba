import { Trip_type } from "../tickets_data/DataTickets";
import { ReturnTrip_type } from "../tickets_data/DataTickets";
import { filterd_TripData } from "../tickets_data/DataTickets";
import { transport_companies } from "./transportCompanies.data";
import { cities } from "./cities.data";
import { internalAirports } from "./internalAirports.data";
import { externalAirports } from "./externalAirports.data";

export function getCompanies_type(index: number) {
    return new Promise((resolve, reject) => {
        if (index === 5) {
            reject([]);
        }
        setTimeout(() => {
            let arr1 = trips.filter(item => (item.transport_type_id === index));
            let arr2 = return_trips.filter(item => (item.transport_type_id === index));
            resolve(arr1.concat(arr2));
        }, 500);
    })
}

function getCompanies(index: number) {
    let findedIndex = transport_companies.findIndex(item => (item.id === index))
    return transport_companies[findedIndex];
}
function getCities(start: number, des: number, type_id: number) {

    if (type_id === 0 || type_id === 1) {
        const data = (type_id ? externalAirports : internalAirports)
        let finded_start_point = data[data.findIndex(item => (item.id === start))].name;
        let finded_des_point = data[data.findIndex(item => (item.id === des))].name;
        return { start_point: finded_start_point, des_point: finded_des_point };
    }
    else {
        let data = cities
        let finded_start_point = data[data.findIndex(item => (item.id === start))].name;
        let finded_des_point = data[data.findIndex(item => (item.id === des))].name;
        return { start_point: finded_start_point, des_point: finded_des_point };
    }

}

function buildFilteredType(props: { cat: 1, filteredData: Trip_type[], type_id: number } | { cat: 2, filteredData: ReturnTrip_type[], type_id: number }): filterd_TripData[] {
    if (props.cat === 1) {
        let filteredData_fin: filterd_TripData[];
        filteredData_fin = props.filteredData.map(item => {
            let company = getCompanies(item.id);
            let cities = getCities(item.start_point_city_id, item.destination_city_id, props.type_id)
            return {
                transport_company_id: item.transport_company_id,
                company_name: company.name,
                company_Score: company.score,
                company_image: company.image,
                departure_date: item.departure_date,
                receive_date: item.receive_date,
                start_point_city: cities.start_point,
                destination_city: cities.des_point,
                remaining_seats: item.remaining_seats,
                price: item.price,
                shopping_type: item.shopping_type,
                trip_des: item.trip_des,
            }
        })
        return filteredData_fin;
    }
    else {
        let filteredData_fin: filterd_TripData[];
        filteredData_fin = props.filteredData.map(item => {
            let company = getCompanies(item.transport_company_id);
            let return_company = getCompanies(item.return_transport_company_id)
            let cities = getCities(item.start_point_city_id, item.destination_city_id, props.type_id)
            return {
                transport_company_id: item.transport_company_id,
                company_name: company.name,
                company_Score: company.score,
                company_image: company.image,
                departure_date: item.departure_date,
                receive_date: item.receive_date,
                start_point_city: cities.start_point,
                destination_city: cities.des_point,
                remaining_seats: item.remaining_seats,
                price: item.price,
                shopping_type: item.shopping_type,
                trip_des: item.trip_des,
                return_date: item.return_date,
                return_receive_date: item.return_receive_date,
                return_transport_company_name: return_company.name,
                return_transport_company_image: return_company.image,
                return_transport_company_score: return_company.score,
            }
        })
        return filteredData_fin;
    }
}

export function getTicket(startCity: number, desCity: number, type_id: number, travelerCount: number, date: Date, returnDate: Date | undefined = undefined): Promise<filterd_TripData[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (returnDate === undefined) {
                let filteredData: Trip_type[];
                let finded_data: Trip_type[];
                filteredData = trips.filter(item => (item.transport_type_id === type_id))
                finded_data = filteredData.filter(item => (item.destination_city_id === desCity) && (item.start_point_city_id === startCity) && (item.remaining_seats >= travelerCount) && (item.departure_date.getDate() === date.getDate()) && (item.departure_date.getFullYear() === date.getFullYear()) && (item.departure_date.getMonth() === date.getMonth()));
                resolve(buildFilteredType({ cat: 1, filteredData: finded_data, type_id }))
            }
            else if (returnDate != undefined) {
                let finded_data: ReturnTrip_type[];
                let filteredData: ReturnTrip_type[];
                filteredData = return_trips.filter(item => (item.transport_type_id === type_id))
                finded_data = filteredData.filter(item => (item.remaining_seats >= travelerCount) && (item.departure_date.getDate() === date.getDate()) && (item.departure_date.getFullYear() === date.getFullYear()) && (item.departure_date.getMonth() === date.getMonth()) && (item.return_date.getDate() === returnDate.getDate()) && (item.return_date.getFullYear() === returnDate.getFullYear()) && (item.return_date.getMonth() === returnDate.getMonth()));
                resolve(buildFilteredType({ cat: 2, filteredData: finded_data, type_id }))
            }
            else {
                reject([])
            }
        }, 500);

    })



    // switch (category) {
    //     case 'bus':

    //         //filteredData = BusTicket.filter(item => (item.Remaining_seats >= travelerCount) && (item.departure_date.getDate() === date.getDate()) && (item.departure_date.getFullYear() === date.getFullYear()) && (item.departure_date.getMonth() === date.getMonth()));
    //         return filteredData

    //     // case 'train':
    //     //     const filteredData: filterd_TripData[] = BusTicket.filter(item => (item.Remaining_seats >= travelerCount) && (item.departure_date.getDate() === date.getDate()) && (item.departure_date.getFullYear() === date.getFullYear()) && (item.departure_date.getMonth() === date.getMonth()));
    //     //     const tripType = 3;
    //     //     return {filteredData,tripType}
    //     default:
    //         filteredData = [];
    //         return filteredData
    // }
}



export const trips: Trip_type[] = [
    { id: 1, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 10, price: 1230000, round_trip: false, departure_date: new Date(2023, 1, 1, 11, 23, 0), receive_date: new Date(2023, 1, 2, 11, 0, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 2, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 15, price: 177300, round_trip: false, departure_date: new Date(2023, 1, 1, 6, 23, 0), receive_date: new Date(2023, 1, 1, 11, 40, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 3, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 2, destination_city_id: 1, remaining_seats: 1, price: 123600, round_trip: false, departure_date: new Date(2023, 1, 2, 3, 23, 0), receive_date: new Date(2023, 1, 3, 11, 50, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 4, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 2, destination_city_id: 1, remaining_seats: 5, price: 150000, round_trip: false, departure_date: new Date(2023, 1, 3, 18, 23, 0), receive_date: new Date(2023, 1, 4, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 5, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 3, destination_city_id: 2, remaining_seats: 5, price: 250000, round_trip: false, departure_date: new Date(2023, 1, 3, 18, 23, 0), receive_date: new Date(2023, 1, 4, 20, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 6, transport_type_id: 0, transport_company_id: 4, start_point_city_id: 4, destination_city_id: 2, remaining_seats: 5, price: 1350000, round_trip: false, departure_date: new Date(2023, 1, 5, 18, 23, 0), receive_date: new Date(2023, 1, 4, 8, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 7, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 2, destination_city_id: 3, remaining_seats: 5, price: 350000, round_trip: false, departure_date: new Date(2023, 1, 4, 18, 23, 0), receive_date: new Date(2023, 1, 6, 9, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 8, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 5, price: 450000, round_trip: false, departure_date: new Date(2023, 1, 6, 18, 23, 0), receive_date: new Date(2023, 1, 3, 10, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 9, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 4, remaining_seats: 5, price: 150000, round_trip: false, departure_date: new Date(2023, 1, 5, 18, 23, 0), receive_date: new Date(2023, 1, 7, 11, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 10, transport_type_id: 0, transport_company_id: 4, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 5, price: 160000, round_trip: false, departure_date: new Date(2023, 1, 3, 18, 23, 0), receive_date: new Date(2023, 1, 5, 13, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 11, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 5, price: 170000, round_trip: false, departure_date: new Date(2023, 1, 5, 18, 23, 0), receive_date: new Date(2023, 1, 6, 14, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 12, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 4, destination_city_id: 2, remaining_seats: 5, price: 120000, round_trip: false, departure_date: new Date(2023, 1, 2, 18, 23, 0), receive_date: new Date(2023, 1, 4, 15, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 13, transport_type_id: 0, transport_company_id: 4, start_point_city_id: 3, destination_city_id: 2, remaining_seats: 5, price: 180000, round_trip: false, departure_date: new Date(2023, 1, 4, 18, 23, 0), receive_date: new Date(2023, 1, 6, 17, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 14, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 3, destination_city_id: 2, remaining_seats: 5, price: 160000, round_trip: false, departure_date: new Date(2023, 1, 6, 18, 23, 0), receive_date: new Date(2023, 1, 7, 18, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 15, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 5, price: 150000, round_trip: false, departure_date: new Date(2023, 1, 2, 18, 23, 0), receive_date: new Date(2023, 1, 2, 19, 45, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 16, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 2, destination_city_id: 3, remaining_seats: 5, price: 200000, round_trip: false, departure_date: new Date(2023, 1, 1, 18, 23, 0), receive_date: new Date(2023, 1, 1, 21, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 16, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 4, destination_city_id: 3, remaining_seats: 5, price: 300000, round_trip: false, departure_date: new Date(2023, 1, 3, 18, 23, 0), receive_date: new Date(2023, 1, 3, 19, 30, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 18, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 3, destination_city_id: 4, remaining_seats: 5, price: 170000, round_trip: false, departure_date: new Date(2023, 1, 5, 18, 23, 0), receive_date: new Date(2023, 1, 2, 21, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 19, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 2, destination_city_id: 1, remaining_seats: 5, price: 200000, round_trip: false, departure_date: new Date(2023, 1, 4, 18, 23, 0), receive_date: new Date(2023, 1, 4, 22, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 20, transport_type_id: 0, transport_company_id: 4, start_point_city_id: 1, destination_city_id: 4, remaining_seats: 5, price: 1300000, round_trip: false, departure_date: new Date(2023, 1, 6, 18, 23, 0), receive_date: new Date(2023, 1, 3, 10, 50, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 21, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 2, destination_city_id: 2, remaining_seats: 5, price: 160000, round_trip: false, departure_date: new Date(2023, 1, 4, 18, 23, 0), receive_date: new Date(2023, 1, 5, 11, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 22, transport_type_id: 0, transport_company_id: 4, start_point_city_id: 3, destination_city_id: 3, remaining_seats: 5, price: 210000, round_trip: false, departure_date: new Date(2023, 1, 3, 18, 23, 0), receive_date: new Date(2023, 1, 3, 12, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 23, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 5, price: 320000, round_trip: false, departure_date: new Date(2023, 1, 2, 18, 23, 0), receive_date: new Date(2023, 1, 2, 17, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 24, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 2, destination_city_id: 4, remaining_seats: 5, price: 180000, round_trip: false, departure_date: new Date(2023, 1, 1, 18, 23, 0), receive_date: new Date(2023, 1, 1, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 25, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 5, price: 230000, round_trip: false, departure_date: new Date(2023, 1, 5, 18, 23, 0), receive_date: new Date(2023, 1, 2, 21, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 26, transport_type_id: 0, transport_company_id: 4, start_point_city_id: 1, destination_city_id: 4, remaining_seats: 5, price: 1500000, round_trip: false, departure_date: new Date(2023, 1, 6, 18, 23, 0), receive_date: new Date(2023, 1, 3, 18, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 27, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 5, price: 160000, round_trip: false, departure_date: new Date(2023, 1, 7, 18, 23, 0), receive_date: new Date(2023, 1, 4, 16, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 28, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 4, destination_city_id: 3, remaining_seats: 5, price: 210000, round_trip: false, departure_date: new Date(2023, 1, 1, 18, 23, 0), receive_date: new Date(2023, 1, 5, 15, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 29, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 4, destination_city_id: 3, remaining_seats: 5, price: 330000, round_trip: false, departure_date: new Date(2023, 1, 2, 18, 23, 0), receive_date: new Date(2023, 1, 6, 10, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 30, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 3, destination_city_id: 4, remaining_seats: 5, price: 140000, round_trip: false, departure_date: new Date(2023, 1, 3, 18, 23, 0), receive_date: new Date(2023, 1, 3, 13, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 31, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 2, destination_city_id: 1, remaining_seats: 5, price: 220000, round_trip: false, departure_date: new Date(2023, 1, 4, 18, 23, 0), receive_date: new Date(2023, 1, 2, 19, 32, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 32, transport_type_id: 0, transport_company_id: 4, start_point_city_id: 1, destination_city_id: 4, remaining_seats: 5, price: 1500000, round_trip: false, departure_date: new Date(2023, 1, 6, 18, 23, 0), receive_date: new Date(2023, 1, 7, 18, 40, 0), shopping_type: 'systematic', trip_des: [''] },




    { id: 33, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 1, destination_city_id: 5, remaining_seats: 6, price: 1240000, round_trip: false, departure_date: new Date(2023, 1, 1, 11, 23, 0), receive_date: new Date(2023, 1, 2, 11, 0, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 34, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 1, destination_city_id: 5, remaining_seats: 12, price: 1240000, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), receive_date: new Date(2023, 1, 4, 11, 40, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 35, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 1, destination_city_id: 6, remaining_seats: 4, price: 1230000, round_trip: false, departure_date: new Date(2023, 1, 1, 11, 23, 0), receive_date: new Date(2023, 1, 2, 11, 50, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 36, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 6, remaining_seats: 20, price: 1200000, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), receive_date: new Date(2023, 1, 3, 19, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 37, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 7, remaining_seats: 20, price: 1200000, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), receive_date: new Date(2023, 1, 3, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 38, transport_type_id: 1, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 7, remaining_seats: 20, price: 1300000, round_trip: false, departure_date: new Date(2023, 1, 3, 11, 23, 0), receive_date: new Date(2023, 1, 3, 20, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 39, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 1, destination_city_id: 8, remaining_seats: 20, price: 1200000, round_trip: false, departure_date: new Date(2023, 1, 3, 12, 23, 0), receive_date: new Date(2023, 1, 2, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 40, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 1, destination_city_id: 8, remaining_seats: 20, price: 1300000, round_trip: false, departure_date: new Date(2023, 1, 2, 13, 23, 0), receive_date: new Date(2023, 1, 1, 14, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 41, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 5, destination_city_id: 1, remaining_seats: 20, price: 1500000, round_trip: false, departure_date: new Date(2023, 1, 2, 14, 23, 0), receive_date: new Date(2023, 1, 2, 13, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 42, transport_type_id: 1, transport_company_id: 8, start_point_city_id: 5, destination_city_id: 6, remaining_seats: 20, price: 3200000, round_trip: false, departure_date: new Date(2023, 1, 2, 12, 23, 0), receive_date: new Date(2023, 1, 3, 15, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 43, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 5, destination_city_id: 7, remaining_seats: 20, price: 4500000, round_trip: false, departure_date: new Date(2023, 1, 4, 12, 23, 0), receive_date: new Date(2023, 1, 4, 20, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 44, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 5, destination_city_id: 8, remaining_seats: 20, price: 1200000, round_trip: false, departure_date: new Date(2023, 1, 4, 22, 23, 0), receive_date: new Date(2023, 1, 5, 16, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 45, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 5, destination_city_id: 1, remaining_seats: 20, price: 4600000, round_trip: false, departure_date: new Date(2023, 1, 4, 23, 23, 0), receive_date: new Date(2023, 1, 6, 12, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 46, transport_type_id: 1, transport_company_id: 8, start_point_city_id: 6, destination_city_id: 1, remaining_seats: 20, price: 4700000, round_trip: false, departure_date: new Date(2023, 1, 5, 20, 23, 0), receive_date: new Date(2023, 1, 2, 11, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 47, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 6, destination_city_id: 5, remaining_seats: 20, price: 5000000, round_trip: false, departure_date: new Date(2023, 1, 5, 22, 23, 0), receive_date: new Date(2023, 1, 1, 20, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 48, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 6, destination_city_id: 7, remaining_seats: 20, price: 4000000, round_trip: false, departure_date: new Date(2023, 1, 6, 21, 23, 0), receive_date: new Date(2023, 1, 2, 23, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 49, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 6, destination_city_id: 8, remaining_seats: 20, price: 6000000, round_trip: false, departure_date: new Date(2023, 1, 6, 12, 23, 0), receive_date: new Date(2023, 1, 3, 18, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 50, transport_type_id: 1, transport_company_id: 8, start_point_city_id: 7, destination_city_id: 1, remaining_seats: 20, price: 7000000, round_trip: false, departure_date: new Date(2023, 1, 4, 11, 23, 0), receive_date: new Date(2023, 1, 4, 11, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 51, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 7, destination_city_id: 5, remaining_seats: 20, price: 5000000, round_trip: false, departure_date: new Date(2023, 1, 4, 8, 23, 0), receive_date: new Date(2023, 1, 3, 12, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 52, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 7, destination_city_id: 6, remaining_seats: 20, price: 6700000, round_trip: false, departure_date: new Date(2023, 1, 3, 8, 23, 0), receive_date: new Date(2023, 1, 4, 10, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 53, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 7, destination_city_id: 8, remaining_seats: 20, price: 1200000, round_trip: false, departure_date: new Date(2023, 1, 3, 11, 23, 0), receive_date: new Date(2023, 1, 4, 12, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 54, transport_type_id: 1, transport_company_id: 8, start_point_city_id: 8, destination_city_id: 1, remaining_seats: 20, price: 1800000, round_trip: false, departure_date: new Date(2023, 1, 4, 12, 23, 0), receive_date: new Date(2023, 1, 7, 16, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 55, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 8, destination_city_id: 5, remaining_seats: 20, price: 1400000, round_trip: false, departure_date: new Date(2023, 1, 2, 15, 23, 0), receive_date: new Date(2023, 1, 6, 15, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 56, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 8, destination_city_id: 6, remaining_seats: 20, price: 2300000, round_trip: false, departure_date: new Date(2023, 1, 2, 16, 23, 0), receive_date: new Date(2023, 1, 5, 17, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 56, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 8, destination_city_id: 7, remaining_seats: 20, price: 3200000, round_trip: false, departure_date: new Date(2023, 1, 1, 11, 23, 0), receive_date: new Date(2023, 1, 4, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 58, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 1, destination_city_id: 5, remaining_seats: 20, price: 4500000, round_trip: false, departure_date: new Date(2023, 1, 2, 12, 23, 0), receive_date: new Date(2023, 1, 3, 14, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 59, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 1, destination_city_id: 6, remaining_seats: 20, price: 6000000, round_trip: false, departure_date: new Date(2023, 1, 3, 15, 23, 0), receive_date: new Date(2023, 1, 2, 15, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 60, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 7, remaining_seats: 20, price: 8000000, round_trip: false, departure_date: new Date(2023, 1, 4, 15, 23, 0), receive_date: new Date(2023, 1, 1, 13, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 61, transport_type_id: 1, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 8, remaining_seats: 20, price: 5600000, round_trip: false, departure_date: new Date(2023, 1, 4, 17, 23, 0), receive_date: new Date(2023, 1, 5, 10, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 62, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 5, destination_city_id: 6, remaining_seats: 20, price: 3400000, round_trip: false, departure_date: new Date(2023, 1, 2, 16, 23, 0), receive_date: new Date(2023, 1, 4, 17, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 63, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 5, remaining_seats: 20, price: 4900000, round_trip: false, departure_date: new Date(2023, 1, 4, 14, 23, 0), receive_date: new Date(2023, 1, 3, 19, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 64, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 1, destination_city_id: 6, remaining_seats: 20, price: 8000000, round_trip: false, departure_date: new Date(2023, 1, 5, 17, 23, 0), receive_date: new Date(2023, 1, 2, 21, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 65, transport_type_id: 1, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 7, remaining_seats: 20, price: 8000000, round_trip: false, departure_date: new Date(2023, 1, 1, 18, 23, 0), receive_date: new Date(2023, 1, 1, 22, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 66, transport_type_id: 1, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 8, remaining_seats: 20, price: 7000000, round_trip: false, departure_date: new Date(2023, 1, 2, 10, 23, 0), receive_date: new Date(2023, 1, 6, 20, 23, 0), shopping_type: 'systematic', trip_des: [''] },




    { id: 67, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 25, price: 1000000, round_trip: false, departure_date: new Date(2023, 1, 1, 11, 23, 0), receive_date: new Date(2023, 1, 2, 8, 0, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 68, transport_type_id: 2, transport_company_id: 10, start_point_city_id: 2, destination_city_id: 3, remaining_seats: 8, price: 1200230, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), receive_date: new Date(2023, 1, 3, 11, 40, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 69, transport_type_id: 2, transport_company_id: 11, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 10, price: 12300000, round_trip: false, departure_date: new Date(2023, 1, 3, 13, 23, 0), receive_date: new Date(2023, 1, 1, 12, 50, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 70, transport_type_id: 2, transport_company_id: 12, start_point_city_id: 4, destination_city_id: 2, remaining_seats: 18, price: 17000000, round_trip: false, departure_date: new Date(2023, 1, 4, 16, 23, 0), receive_date: new Date(2023, 1, 4, 19, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 71, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 0, price: 10008000, round_trip: false, departure_date: new Date(2023, 1, 3, 11, 21, 0), receive_date: new Date(2023, 1, 3, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },

    { id: 72, transport_type_id: 2, transport_company_id: 10, start_point_city_id: 2, destination_city_id: 1, remaining_seats: 0, price: 18000000, round_trip: false, departure_date: new Date(2023, 1, 1, 12, 23, 0), receive_date: new Date(2023, 1, 2, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 73, transport_type_id: 2, transport_company_id: 11, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 0, price: 18210000, round_trip: false, departure_date: new Date(2023, 1, 2, 14, 23, 0), receive_date: new Date(2023, 1, 4, 19, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 74, transport_type_id: 2, transport_company_id: 12, start_point_city_id: 4, destination_city_id: 1, remaining_seats: 0, price: 2300000, round_trip: false, departure_date: new Date(2023, 1, 3, 13, 23, 0), receive_date: new Date(2023, 1, 5, 17, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 75, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 0, price: 3300000, round_trip: false, departure_date: new Date(2023, 1, 4, 12, 23, 0), receive_date: new Date(2023, 1, 6, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 76, transport_type_id: 2, transport_company_id: 10, start_point_city_id: 2, destination_city_id: 3, remaining_seats: 0, price: 2800000, round_trip: false, departure_date: new Date(2023, 1, 1, 10, 23, 0), receive_date: new Date(2023, 1, 3, 20, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 77, transport_type_id: 2, transport_company_id: 11, start_point_city_id: 3, destination_city_id: 2, remaining_seats: 0, price: 1600000, round_trip: false, departure_date: new Date(2023, 1, 2, 19, 23, 0), receive_date: new Date(2023, 1, 4, 21, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 78, transport_type_id: 2, transport_company_id: 12, start_point_city_id: 4, destination_city_id: 2, remaining_seats: 0, price: 19000000, round_trip: false, departure_date: new Date(2023, 1, 3, 15, 23, 0), receive_date: new Date(2023, 1, 3, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 79, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 0, price: 12300000, round_trip: false, departure_date: new Date(2023, 1, 4, 12, 23, 0), receive_date: new Date(2023, 1, 2, 15, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 80, transport_type_id: 2, transport_company_id: 10, start_point_city_id: 2, destination_city_id: 3, remaining_seats: 0, price: 3200000, round_trip: false, departure_date: new Date(2023, 1, 5, 14, 23, 0), receive_date: new Date(2023, 1, 1, 16, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 81, transport_type_id: 2, transport_company_id: 11, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 0, price: 4500000, round_trip: false, departure_date: new Date(2023, 1, 6, 13, 23, 0), receive_date: new Date(2023, 1, 4, 17, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 82, transport_type_id: 2, transport_company_id: 12, start_point_city_id: 4, destination_city_id: 3, remaining_seats: 0, price: 1408000, round_trip: false, departure_date: new Date(2023, 1, 1, 12, 23, 0), receive_date: new Date(2023, 1, 2, 11, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 83, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 0, price: 1800000, round_trip: false, departure_date: new Date(2023, 1, 2, 10, 23, 0), receive_date: new Date(2023, 1, 1, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 84, transport_type_id: 2, transport_company_id: 10, start_point_city_id: 2, destination_city_id: 3, remaining_seats: 0, price: 13808000, round_trip: false, departure_date: new Date(2023, 1, 3, 9, 23, 0), receive_date: new Date(2023, 1, 3, 15, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 85, transport_type_id: 2, transport_company_id: 11, start_point_city_id: 3, destination_city_id: 2, remaining_seats: 0, price: 18500000, round_trip: false, departure_date: new Date(2023, 1, 4, 8, 23, 0), receive_date: new Date(2023, 1, 2, 19, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 86, transport_type_id: 2, transport_company_id: 12, start_point_city_id: 4, destination_city_id: 1, remaining_seats: 0, price: 14500000, round_trip: false, departure_date: new Date(2023, 1, 5, 11, 23, 0), receive_date: new Date(2023, 1, 5, 19, 40, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 87, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 0, price: 15600000, round_trip: false, departure_date: new Date(2023, 1, 6, 15, 23, 0), receive_date: new Date(2023, 1, 6, 13, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 89, transport_type_id: 2, transport_company_id: 10, start_point_city_id: 2, destination_city_id: 2, remaining_seats: 0, price: 18004500, round_trip: false, departure_date: new Date(2023, 1, 1, 16, 23, 0), receive_date: new Date(2023, 1, 7, 12, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 90, transport_type_id: 2, transport_company_id: 11, start_point_city_id: 3, destination_city_id: 4, remaining_seats: 0, price: 12338000, round_trip: false, departure_date: new Date(2023, 1, 2, 17, 23, 0), receive_date: new Date(2023, 1, 1, 14, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 91, transport_type_id: 2, transport_company_id: 12, start_point_city_id: 4, destination_city_id: 4, remaining_seats: 0, price: 23448000, round_trip: false, departure_date: new Date(2023, 1, 3, 19, 23, 0), receive_date: new Date(2023, 1, 2, 16, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 92, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 0, price: 12018000, round_trip: false, departure_date: new Date(2023, 1, 4, 129, 23, 0), receive_date: new Date(2023, 1, 3, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 93, transport_type_id: 2, transport_company_id: 10, start_point_city_id: 2, destination_city_id: 2, remaining_seats: 0, price: 146018000, round_trip: false, departure_date: new Date(2023, 5, 2, 12, 23, 0), receive_date: new Date(2023, 1, 4, 21, 50, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 94, transport_type_id: 2, transport_company_id: 11, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 0, price: 543018000, round_trip: false, departure_date: new Date(2023, 6, 2, 16, 23, 0), receive_date: new Date(2023, 1, 5, 22, 16, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 95, transport_type_id: 2, transport_company_id: 12, start_point_city_id: 4, destination_city_id: 2, remaining_seats: 0, price: 340018000, round_trip: false, departure_date: new Date(2023, 1, 2, 19, 23, 0), receive_date: new Date(2023, 1, 5, 18, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 96, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 0, price: 18000000, round_trip: false, departure_date: new Date(2023, 1, 2, 8, 23, 0), receive_date: new Date(2023, 1, 6, 10, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 97, transport_type_id: 2, transport_company_id: 10, start_point_city_id: 2, destination_city_id: 4, remaining_seats: 0, price: 18345000, round_trip: false, departure_date: new Date(2023, 1, 3, 112, 23, 0), receive_date: new Date(2023, 1, 7, 9, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 98, transport_type_id: 2, transport_company_id: 11, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 0, price: 15478000, round_trip: false, departure_date: new Date(2023, 1, 4, 11, 23, 0), receive_date: new Date(2023, 1, 3, 8, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 99, transport_type_id: 2, transport_company_id: 12, start_point_city_id: 4, destination_city_id: 2, remaining_seats: 0, price: 146898000, round_trip: false, departure_date: new Date(2023, 1, 5, 16, 23, 0), receive_date: new Date(2023, 1, 1, 13, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 100, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 0, price: 19878000, round_trip: false, departure_date: new Date(2023, 1, 6, 14, 23, 0), receive_date: new Date(2023, 1, 2, 17, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 101, transport_type_id: 2, transport_company_id: 10, start_point_city_id: 2, destination_city_id: 4, remaining_seats: 0, price: 13578000, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), receive_date: new Date(2023, 1, 3, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },






    { id: 102, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 21, price: 12966500, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 103, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 2, destination_city_id: 3, remaining_seats: 13, price: 534523400, round_trip: false, departure_date: new Date(2023, 1, 4, 12, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 104, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 18, price: 545454500, round_trip: false, departure_date: new Date(2023, 1, 3, 15, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 105, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 4, destination_city_id: 2, remaining_seats: 14, price: 546437700, round_trip: false, departure_date: new Date(2023, 1, 1, 17, 23, 0), shopping_type: 'chartered', trip_des: [''] },

    { id: 106, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 14, price: 546400377, round_trip: false, departure_date: new Date(2023, 1, 1, 21, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 107, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 2, destination_city_id: 4, remaining_seats: 14, price: 546004377, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 108, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 14, price: 546430077, round_trip: false, departure_date: new Date(2023, 1, 3, 12, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 109, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 4, destination_city_id: 3, remaining_seats: 14, price: 540064377, round_trip: false, departure_date: new Date(2023, 1, 4, 16, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 110, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 14, price: 500464377, round_trip: false, departure_date: new Date(2023, 1, 5, 15, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 111, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 2, destination_city_id: 1, remaining_seats: 14, price: 890464377, round_trip: false, departure_date: new Date(2023, 1, 6, 21, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 112, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 3, destination_city_id: 2, remaining_seats: 14, price: 5806464377, round_trip: false, departure_date: new Date(2023, 1, 7, 11, 54, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 113, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 4, destination_city_id: 3, remaining_seats: 14, price: 567864377, round_trip: false, departure_date: new Date(2023, 1, 1, 14, 32, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 114, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 4, remaining_seats: 14, price: 568964377, round_trip: false, departure_date: new Date(2023, 1, 2, 13, 20, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 115, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 2, destination_city_id: 4, remaining_seats: 14, price: 1235464377, round_trip: false, departure_date: new Date(2023, 1, 3, 14, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 116, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 3, destination_city_id: 4, remaining_seats: 14, price: 5433464377, round_trip: false, departure_date: new Date(2023, 1, 4, 15, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 117, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 4, destination_city_id: 1, remaining_seats: 14, price: 546435377, round_trip: false, departure_date: new Date(2023, 1, 5, 17, 40, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 118, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 14, price: 5464456377, round_trip: false, departure_date: new Date(2023, 1, 6, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 119, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 2, destination_city_id: 1, remaining_seats: 14, price: 1345464377, round_trip: false, departure_date: new Date(2023, 1, 7, 22, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 120, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 14, price: 6755464377, round_trip: false, departure_date: new Date(2023, 1, 1, 22, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 121, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 4, destination_city_id: 1, remaining_seats: 14, price: 3785464377, round_trip: false, departure_date: new Date(2023, 1, 2, 14, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 122, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 14, price: 5467644377, round_trip: false, departure_date: new Date(2023, 1, 3, 17, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 123, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 2, destination_city_id: 1, remaining_seats: 14, price: 546436777, round_trip: false, departure_date: new Date(2023, 1, 4, 9, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 124, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 3, destination_city_id: 4, remaining_seats: 14, price: 546437700, round_trip: false, departure_date: new Date(2023, 1, 5, 8, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 125, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 4, destination_city_id: 1, remaining_seats: 14, price: 546437700, round_trip: false, departure_date: new Date(2023, 1, 6, 15, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 126, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 4, remaining_seats: 14, price: 546437700, round_trip: false, departure_date: new Date(2023, 1, 7, 11, 50, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 127, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 2, destination_city_id: 3, remaining_seats: 14, price: 546437457, round_trip: false, departure_date: new Date(2023, 1, 1, 11, 40, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 128, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 3, destination_city_id: 1, remaining_seats: 14, price: 5464374327, round_trip: false, departure_date: new Date(2023, 1, 2, 14, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 129, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 4, destination_city_id: 2, remaining_seats: 14, price: 3455464377, round_trip: false, departure_date: new Date(2023, 1, 3, 17, 50, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 140, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 1, destination_city_id: 3, remaining_seats: 14, price: 5567464377, round_trip: false, departure_date: new Date(2023, 1, 4, 19, 32, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 141, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 2, destination_city_id: 3, remaining_seats: 14, price: 2575464377, round_trip: false, departure_date: new Date(2023, 1, 5, 21, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 142, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 3, destination_city_id: 2, remaining_seats: 14, price: 6745464377, round_trip: false, departure_date: new Date(2023, 1, 6, 13, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 143, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 4, destination_city_id: 1, remaining_seats: 14, price: 2465464377, round_trip: false, departure_date: new Date(2023, 1, 7, 18, 32, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 144, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 14, price: 2795464377, round_trip: false, departure_date: new Date(2023, 1, 1, 19, 15, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 145, transport_type_id: 3, transport_company_id: 13, start_point_city_id: 2, destination_city_id: 1, remaining_seats: 14, price: 2005464377, round_trip: false, departure_date: new Date(2023, 1, 2, 12, 30, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 146, transport_type_id: 3, transport_company_id: 14, start_point_city_id: 3, destination_city_id: 4, remaining_seats: 14, price: 2585464377, round_trip: false, departure_date: new Date(2023, 1, 3, 14, 40, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 147, transport_type_id: 3, transport_company_id: 15, start_point_city_id: 4, destination_city_id: 3, remaining_seats: 14, price: 24565464377, round_trip: false, departure_date: new Date(2023, 1, 4, 11, 40, 0), shopping_type: 'systematic', trip_des: [''] },




    // {id: 18, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 19, price: 65654, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 19, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 4, price: 65457, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 20, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 8, price: 4324234, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 21, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 24, price: 232434, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 22, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 11, price: 4348768, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
];

export const return_trips: ReturnTrip_type[] = [
    { id: 1, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 10, price: 1230000, round_trip: false, departure_date: new Date(2023, 1, 1, 11, 23, 0), receive_date: new Date(2023, 1, 2, 11, 0, 0), return_date: new Date(2023, 1, 4, 12, 2, 34), return_receive_date: new Date(2023, 1, 2, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },
    { id: 2, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 15, price: 177300, round_trip: false, departure_date: new Date(2023, 1, 4, 6, 23, 0), receive_date: new Date(2023, 1, 4, 11, 40, 0), return_date: new Date(2023, 1, 5, 12, 2, 34), return_receive_date: new Date(2023, 1, 4, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 3, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 1, price: 123600, round_trip: false, departure_date: new Date(2023, 1, 3, 3, 23, 0), receive_date: new Date(2023, 1, 3, 11, 50, 0), return_date: new Date(2023, 1, 4, 12, 2, 34), return_receive_date: new Date(2023, 1, 2, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 4, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 5, price: 150000, round_trip: false, departure_date: new Date(2023, 1, 3, 18, 23, 0), receive_date: new Date(2023, 1, 4, 19, 23, 0), return_date: new Date(2023, 1, 5, 12, 2, 34), return_receive_date: new Date(2023, 1, 3, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },

    { id: 5, transport_type_id: 1, transport_company_id: 4, start_point_city_id: 3, destination_city_id: 6, remaining_seats: 6, price: 12400, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), receive_date: new Date(2023, 1, 3, 11, 0, 0), return_date: new Date(2023, 1, 12, 4, 2, 34), return_receive_date: new Date(2023, 1, 5, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },
    { id: 6, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 4, destination_city_id: 5, remaining_seats: 12, price: 124000, round_trip: false, departure_date: new Date(2023, 1, 4, 11, 23, 0), receive_date: new Date(2023, 1, 2, 11, 40, 0), return_date: new Date(2023, 1, 2, 12, 2, 34), return_receive_date: new Date(2023, 1, 4, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 7, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 5, destination_city_id: 4, remaining_seats: 4, price: 12300, round_trip: false, departure_date: new Date(2023, 1, 3, 11, 23, 0), receive_date: new Date(2023, 1, 4, 11, 50, 0), return_date: new Date(2023, 1, 5, 12, 2, 34), return_receive_date: new Date(2023, 1, 3, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },
    { id: 8, transport_type_id: 1, transport_company_id: 4, start_point_city_id: 3, destination_city_id: 6, remaining_seats: 20, price: 12000, round_trip: false, departure_date: new Date(2023, 1, 1, 11, 23, 0), receive_date: new Date(2023, 1, 2, 19, 23, 0), return_date: new Date(2023, 1, 12, 12, 2, 34), return_receive_date: new Date(2023, 1, 4, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },

    { id: 9, transport_type_id: 2, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 25, price: 10000, round_trip: false, departure_date: new Date(2023, 1, 1, 11, 23, 0), receive_date: new Date(2023, 1, 3, 11, 0, 0), return_date: new Date(2023, 1, 4, 12, 2, 34), return_receive_date: new Date(2023, 1, 3, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 10, transport_type_id: 2, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 8, price: 1230, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), receive_date: new Date(2023, 1, 2, 11, 40, 0), return_date: new Date(2023, 1, 4, 12, 2, 34), return_receive_date: new Date(2023, 1, 4, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 11, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 10, price: 12300, round_trip: false, departure_date: new Date(2023, 1, 3, 11, 23, 0), receive_date: new Date(2023, 1, 3, 11, 50, 0), return_date: new Date(2023, 1, 4, 12, 2, 34), return_receive_date: new Date(2023, 1, 3, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },
    { id: 12, transport_type_id: 2, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 18, price: 17000, round_trip: false, departure_date: new Date(2023, 1, 4, 11, 23, 0), receive_date: new Date(2023, 1, 4, 19, 23, 0), return_date: new Date(2023, 1, 2, 12, 2, 34), return_receive_date: new Date(2023, 1, 5, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 13, transport_type_id: 2, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 0, price: 18000, round_trip: false, departure_date: new Date(2023, 1, 2, 11, 23, 0), receive_date: new Date(2023, 1, 3, 19, 23, 0), return_date: new Date(2023, 1, 2, 12, 2, 34), return_receive_date: new Date(2023, 1, 4, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },



    // {id: 18, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 19, price: 65654, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 19, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 4, price: 65457, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 20, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 8, price: 4324234, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 21, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 24, price: 232434, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 22, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 11, price: 4348768, round_trip: false, departure_date: new Date(2023,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
];