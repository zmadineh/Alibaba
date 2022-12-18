export function getTicket(category: string, date: Date, travelerCount: number): BusTicket_type[] | trainTicket_type[] | null {
    switch (category) {
        case 'bus':
            return BusTicket.filter(item => (item.Remaining_seats >= travelerCount) && (item.ticketDate.getDate() === date.getDate()) && (item.ticketDate.getFullYear() === date.getFullYear()) && (item.ticketDate.getMonth() === date.getMonth()));
        case 'train':
            return TarinTicket.filter(item => (item.Remaining_seats >= travelerCount) && (item.ticketDate.getDate() === date.getDate()) && (item.ticketDate.getFullYear() === date.getFullYear()) && (item.ticketDate.getMonth() === date.getMonth()));
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
export interface Trip_type {
    transport_type_id: number,
    departure_date: Date,
    receive_date: Date | null,
    transport_company_id: number,
    start_point_city_id: number,
    //terminal_id:number
    destination_city_id: number,
    //terminal_id:number
    round_trip: boolean,
    Remaining_seats: number,
    price: number,
    shopping_type: string | null
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
let BusTicket: BusTicket_type[] = [
    {
        ticketDate: new Date(1401, 3, 24, 18, 26),
        company_name: 'همسفر چابک سواران',
        company_Score: 4.4,
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        Bus_des: 'ماهانVIP(مانیتورشخصی)',
        start: 'اصفهان',
        start_terminal: 'پایانه کاوه',
        destination: 'تهران',
        destination_terminal: 'پایانه غرب',
        Remaining_seats: 10,
        price: 1220000
    },
    {
        ticketDate: new Date(1401, 5, 3, 6, 2),
        company_name: 'چابک سواران',
        company_Score: 4.4,
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        Bus_des: 'ماهانVIP(مانیتورشخصی)',
        start: 'اصفهان',
        start_terminal: 'پایانه کاوه',
        destination: 'تهران',
        destination_terminal: 'پایانه غرب',
        Remaining_seats: 10,
        price: 1220000
    },
    {
        ticketDate: new Date(1401, 3, 21, 20, 30),
        company_name: 'همسفر سواران',
        company_Score: 4.4,
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        Bus_des: 'ماهانVIP(مانیتورشخصی)',
        start: 'اصفهان',
        start_terminal: 'پایانه کاوه',
        destination: 'تهران',
        destination_terminal: 'پایانه غرب',
        Remaining_seats: 4,
        price: 1220000
    }
]

let TarinTicket: trainTicket_type[] = [
    {
        ticketDate: new Date(1401, 3, 24, 18, 26),
        company_name: 'ريل ترابر سبا',
        company_image: 'https://cdn.alibaba.ir/static/img/train/train_15.png',
        train_des: 'ماهانVIP(مانیتورشخصی)',
        train_room_des: 'کوپه‌ای 4 نفره',
        start: 'اصفهان',
        destination: 'تهران',
        destination_terminal: 'پایانه غرب',
        Remaining_seats: 10,
        price: 1220000
    },
    {
        ticketDate: new Date(1401, 5, 3, 6, 2),
        company_name: 'چابک سواران',
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        train_des: 'ماهانVIP(مانیتورشخصی)',
        train_room_des: 'کوپه‌ای 4 نفره',
        start: 'اصفهان',
        destination: 'تهران',
        destination_terminal: 'پایانه غرب',
        Remaining_seats: 10,
        price: 1220000
    },
    {
        ticketDate: new Date(1401, 3, 21, 20, 30),
        company_name: 'همسفر سواران',
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        train_des: 'ماهانVIP(مانیتورشخصی)',
        train_room_des: 'کوپه‌ای 4 نفره',
        start: 'اصفهان',
        destination: 'تهران',
        destination_terminal: 'پایانه غرب',
        Remaining_seats: 4,
        price: 1220000
    }
]