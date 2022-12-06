export function getTicket(category:string,date:string,travelerCount:number):BusTicket_type[]|null {
    switch (category){
        case 'bus':
            return BusTicket.filter((item)=>{(item.ticketDate===date)&&(item.Remaining_seats>=travelerCount)});
        default : 
            return null
    }
}

export interface BusTicket_type {
    ticketDate : string,
    company_name: string,
    company_Score: number,
    company_image: string,
    Bus_des: string,
    departure_time: string,
    start: string,
    start_terminal: string,
    destination: string,
    destination_terminal: string,
    Remaining_seats: number,
    price: number

}
let BusTicket : BusTicket_type[] = [
    {
        ticketDate : '1401/2/1',
        company_name: 'همسفر چابک سواران',
        company_Score: 4.4,
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        Bus_des: 'ماهانVIP(مانیتورشخصی)',
        departure_time: '00:20',
        start: 'اصفهان',
        start_terminal: 'پایانه کاوه',
        destination: 'تهران',
        destination_terminal: 'پایانه غرب',
        Remaining_seats: 10,
        price: 1220000
    },
    {
        ticketDate : '1401/5/1',
        company_name: 'چابک سواران',
        company_Score: 4.4,
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        Bus_des: 'ماهانVIP(مانیتورشخصی)',
        departure_time: '00:20',
        start: 'اصفهان',
        start_terminal: 'پایانه کاوه',
        destination: 'تهران',
        destination_terminal: 'پایانه غرب',
        Remaining_seats: 10,
        price: 1220000
    },
    {
        ticketDate : '1401/2/1',
        company_name: 'همسفر سواران',
        company_Score: 4.4,
        company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        Bus_des: 'ماهانVIP(مانیتورشخصی)',
        departure_time: '00:20',
        start: 'اصفهان',
        start_terminal: 'پایانه کاوه',
        destination: 'تهران',
        destination_terminal: 'پایانه غرب',
        Remaining_seats: 1,
        price: 1220000
    }
]