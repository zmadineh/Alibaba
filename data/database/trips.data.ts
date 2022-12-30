import { Trip_type } from "../tickets_data/DataTickets";
import { ReturnTrip_type } from "../tickets_data/DataTickets";
import { filterd_TripData } from "../tickets_data/DataTickets";
import { transport_companies } from "./transportCompanies.data";
import { cities } from "./cities.data";
import {internalAirports} from "./internalAirports.data";
import {externalAirports} from "./externalAirports.data";

export function getCompanies_type(index:number){
    return new Promise((resolve,reject)=>{
        if(index===5){
            reject([]);
        }
        setTimeout(() => {
            let arr1 = trips.filter(item=>(item.transport_type_id===index));
            let arr2 = return_trips.filter(item=>(item.transport_type_id===index));
            resolve(arr1.concat(arr2));
        }, 500);
    })
}

function getCompanies(index: number) {
    let findedIndex = transport_companies.findIndex(item => (item.id === index))
    return transport_companies[findedIndex];
}
function getCities(start: number, des: number, type_id: number) {

    if(type_id === 0 || type_id === 1){
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

function buildFilteredType(props: { cat: 1, filteredData: Trip_type[], type_id: number } | { cat: 2, filteredData: ReturnTrip_type[], type_id: number }):filterd_TripData[] {
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

export function getTicket(startCity:number, desCity:number , type_id: number, travelerCount: number,date: Date,returnDate:Date|undefined=undefined):Promise<filterd_TripData[]> {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (returnDate===undefined) {
                let filteredData: Trip_type[];
                let finded_data: Trip_type[];
                filteredData = trips.filter(item => (item.transport_type_id === type_id))
                finded_data = filteredData.filter(item => (item.destination_city_id===desCity) && (item.start_point_city_id===startCity) && (item.remaining_seats >= travelerCount) && (item.departure_date.getDate() === date.getDate()) && (item.departure_date.getFullYear() === date.getFullYear()) && (item.departure_date.getMonth() === date.getMonth()));
                resolve(buildFilteredType({cat:1, filteredData:finded_data, type_id}))
            }
            else if(returnDate!=undefined){
                let finded_data: ReturnTrip_type[];
                let filteredData: ReturnTrip_type[];
                filteredData = return_trips.filter(item => (item.transport_type_id === type_id))
                finded_data = filteredData.filter(item => (item.remaining_seats >= travelerCount) && (item.departure_date.getDate() === date.getDate()) && (item.departure_date.getFullYear() === date.getFullYear()) && (item.departure_date.getMonth() === date.getMonth()) && (item.return_date.getDate() === returnDate.getDate()) && (item.return_date.getFullYear() === returnDate.getFullYear()) && (item.return_date.getMonth() === returnDate.getMonth()));
                resolve(buildFilteredType({cat:2, filteredData:finded_data, type_id}))
            }
            else{
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
    { id: 1, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 10, price: 1230000, round_trip: false, departure_date: new Date(), receive_date: new Date(1401, 9, 30, 11, 0, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 2, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 15, price: 177300, round_trip: false, departure_date: new Date(2022, 1, 1, 6, 23, 0), receive_date: new Date(1401, 9, 29, 11, 40, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 3, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 1, price: 123600, round_trip: false, departure_date: new Date(1401, 9, 29, 3, 23, 0), receive_date: new Date(1401, 9, 29, 11, 50, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 4, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 5, price: 150000, round_trip: false, departure_date: new Date(1401, 9, 29, 18, 23, 0), receive_date: new Date(1401, 9, 29, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },

    { id: 5, transport_type_id: 1, transport_company_id: 4, start_point_city_id: 3, destination_city_id: 6, remaining_seats: 6, price: 12400, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 30, 11, 0, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 6, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 4, destination_city_id: 5, remaining_seats: 12, price: 124000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 11, 40, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 7, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 5, destination_city_id: 4, remaining_seats: 4, price: 12300, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 11, 50, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 8, transport_type_id: 1, transport_company_id: 4, start_point_city_id: 3, destination_city_id: 6, remaining_seats: 20, price: 12000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 19, 23, 0), shopping_type: 'chartered', trip_des: [''] },

    { id: 9, transport_type_id: 2, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 25, price: 10000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 30, 11, 0, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 10, transport_type_id: 2, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 8, price: 1230, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 11, 40, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 11, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 10, price: 12300, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 11, 50, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 12, transport_type_id: 2, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 18, price: 17000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 19, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 13, transport_type_id: 2, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 0, price: 18000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 19, 23, 0), shopping_type: 'systematic', trip_des: [''] },

    { id: 14, transport_type_id: 3, transport_company_id: 10, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 21, price: 129665, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 15, transport_type_id: 3, transport_company_id: 11, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 13, price: 5345234, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), shopping_type: 'systematic', trip_des: [''] },
    { id: 16, transport_type_id: 3, transport_company_id: 12, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 18, price: 5454545, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), shopping_type: 'chartered', trip_des: [''] },
    { id: 17, transport_type_id: 3, transport_company_id: 10, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 14, price: 5464377, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), shopping_type: 'chartered', trip_des: [''] },

    // {id: 18, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 19, price: 65654, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 19, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 4, price: 65457, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 20, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 8, price: 4324234, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 21, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 24, price: 232434, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 22, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 11, price: 4348768, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
];

export const return_trips: ReturnTrip_type[] = [
    { id: 1, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 10, price: 1230000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 30, 11, 0, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },
    { id: 2, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 15, price: 177300, round_trip: false, departure_date: new Date(1401, 9, 29, 6, 23, 0), receive_date: new Date(1401, 9, 29, 11, 40, 0), return_date: new Date(1401, 9, 34, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 3, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 1, price: 123600, round_trip: false, departure_date: new Date(1401, 9, 29, 3, 23, 0), receive_date: new Date(1401, 9, 29, 11, 50, 0), return_date: new Date(1401, 9, 31, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 4, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 5, price: 150000, round_trip: false, departure_date: new Date(1401, 9, 29, 18, 23, 0), receive_date: new Date(1401, 9, 29, 19, 23, 0), return_date: new Date(1401, 9, 32, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },

    { id: 5, transport_type_id: 1, transport_company_id: 4, start_point_city_id: 3, destination_city_id: 6, remaining_seats: 6, price: 12400, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 30, 11, 0, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },
    { id: 6, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 4, destination_city_id: 5, remaining_seats: 12, price: 124000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 11, 40, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 7, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 5, destination_city_id: 4, remaining_seats: 4, price: 12300, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 11, 50, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },
    { id: 8, transport_type_id: 1, transport_company_id: 4, start_point_city_id: 3, destination_city_id: 6, remaining_seats: 20, price: 12000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 19, 23, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },

    { id: 9, transport_type_id: 2, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 25, price: 10000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 30, 11, 0, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 10, transport_type_id: 2, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 8, price: 1230, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 11, 40, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 11, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 10, price: 12300, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 11, 50, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },
    { id: 12, transport_type_id: 2, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 18, price: 17000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 19, 23, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'chartered', trip_des: [''] },
    { id: 13, transport_type_id: 2, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 0, price: 18000, round_trip: false, departure_date: new Date(1401, 9, 29, 11, 23, 0), receive_date: new Date(1401, 9, 29, 19, 23, 0), return_date: new Date(1401, 9, 30, 12, 2, 34), return_receive_date: new Date(1401, 9, 30, 13, 21, 0), return_transport_company_id: 1, shopping_type: 'systematic', trip_des: [''] },



    // {id: 18, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 19, price: 65654, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 19, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 4, price: 65457, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 20, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 8, price: 4324234, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 21, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 24, price: 232434, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
    // {id: 22, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 11, price: 4348768, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: '', trip_des: ['']},
];