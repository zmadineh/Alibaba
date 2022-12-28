export interface Trip_type {
    id: number,
    transport_type_id: number,
    departure_date: Date,
    receive_date?: Date,
    transport_company_id: number,
    start_point_city_id: number,
    //terminal_id:number
    destination_city_id: number,
    //terminal_id:number
    round_trip: boolean,
    remaining_seats: number,
    price: number,
    shopping_type?: string,
    trip_des: string[]
}
export interface filterd_TripData {
    transport_company_id: number,
    company_name: string,
    company_Score?: number,
    company_image: string,
    departure_date: Date,
    receive_date?: Date,
    start_point_city: string,
    destination_city: string,
    remaining_seats: number,
    price: number,
    shopping_type?: string,
    trip_des: string[],
    return_date?: Date,
    return_receive_date?: Date,
    return_transport_company_name?: string,
    return_transport_company_image?: string,
    return_transport_company_score?: number,
}

export interface ReturnTrip_type extends Trip_type {
    return_date: Date,
    return_receive_date: Date,
    return_transport_company_id: number
}