import { companies_list } from "./CompaniesData";

interface returnType{
    filteredData : filterd_TripData[],
    tripType:number
}
export function getTicket(category: string, date: Date, travelerCount: number): returnType {
    switch (category) {
        case 'bus':
            const retOb : returnType;
            retOb[filteredData] = BusTicket.filter(item => (item.Remaining_seats >= travelerCount) && (item.departure_date.getDate() === date.getDate()) && (item.departure_date.getFullYear() === date.getFullYear()) && (item.departure_date.getMonth() === date.getMonth()))
            
        case 'train':
            return {TarinTicket.filter(item => (item.Remaining_seats >= travelerCount) && (item.departure_date.getDate() === date.getDate()) && (item.departure_date.getFullYear() === date.getFullYear()) && (item.departure_date.getMonth() === date.getMonth())),2};
        default:
            return null;
    }
}

export interface BusTicket_type {
    ticketDate: Date,
    company_name: string,
    company_Score: number,
    company_image: string,
    Bus_des: string,
    start: string,
    start_terminal: string,
    destination: string,
    destination_terminal: string,
    Remaining_seats: number,
    price: number
}
interface Trip_type {
    id : number,
    transport_type_id: number,
    departure_date: Date,
    receive_date?: Date,
    transport_company_id: number,
    start_point_city_id: number,
    //terminal_id:number
    destination_city_id: number,
    //terminal_id:number
    round_trip: boolean,
    Remaining_seats: number,
    price: number,
    shopping_type: string | null,
    trip_des : string[]
}

export interface filterd_TripData{
    company_name: string,
    company_Score?: number,
    company_image: string,
    departure_date: Date,
    receive_date?: Date,
    start_point_city: string,
    destination_city: string,
    Remaining_seats: number,
    price: number,
    shopping_type?: string,
    trip_des : string[]
}

export interface ReturnTrip_type extends Trip_type {
    return_date: Date,
    return_receive_date: Date,
    return_transport_company_id: number
}


export interface trainTicket_type {
    ticketDate: Date,
    company_name: string,
    company_image: string,
    train_des: string,
    train_room_des: string,
    start: string,
    destination: string,
    destination_terminal: string,
    Remaining_seats: number,
    price: number,
    
}
let BusTicket: filterd_TripData[] = [
    {
        departure_date: new Date(1401, 3, 24, 18, 26),
        company_name: 'چابک سواران',
        company_Score: 4.4,
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        trip_des: ['ماهانVIP(مانیتورشخصی)'],
        start_point_city: 'اصفهان',
        destination_city: 'تهران',
        Remaining_seats: 10,
        price: 1220000,
    },
    {
        departure_date: new Date(1401, 5, 3, 6, 2),
        company_name: 'چابک سواران',
        company_Score: 4.4,
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        trip_des: ['ماهانVIP(مانیتورشخصی)'],
        start_point_city: 'اصفهان',
        destination_city: 'تهران',
        Remaining_seats: 10,
        price: 1220000
    },
    {
        departure_date: new Date(1401, 3, 21, 20, 30),
        company_name: 'همسفر سواران',
        company_Score: 4.4,
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        trip_des: ['ماهانVIP(مانیتورشخصی)'],
        start_point_city: 'اصفهان',
        destination_city: 'تهران',
        Remaining_seats: 4,
        price: 1220000
    }
]

let TarinTicket: filterd_TripData[] = [
    {
        departure_date: new Date(1401, 3, 24, 18, 26),
        company_name: 'ريل ترابر سبا',
        company_image: 'https://cdn.alibaba.ir/static/img/train/train_15.png',
        trip_des: ['کوپه‌ای 4 نفره'],
        start_point_city: 'اصفهان',
        destination_city: 'تهران',
        Remaining_seats: 10,
        price: 1220000
    },
    {
        departure_date: new Date(1401, 5, 3, 6, 2),
        company_name: 'چابک سواران',
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        trip_des: ['کوپه‌ای 4 نفره'],
        start_point_city: 'اصفهان',
        destination_city: 'تهران',
        Remaining_seats: 10,
        price: 1220000
    },
    {
        departure_date: new Date(1401, 3, 21, 20, 30),
        company_name: 'همسفر سواران',
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        trip_des: ['کوپه‌ای 4 نفره'],
        start_point_city: 'اصفهان',
        destination_city: 'تهران',
        Remaining_seats: 4,
        price: 1220000
    }
]