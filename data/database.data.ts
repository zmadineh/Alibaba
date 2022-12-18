export const country = [
    {id: 1, name: 'ایران'},
    {id: 2, name: 'ترکیه'},
    {id: 3, name: 'ارمنستان'},
    {id: 4, name: 'آلمان'},
    {id: 5, name: 'فرانسه'},
];

export const city = [
    {id: 1, country_id: 1, name: 'تهران'},
    {id: 2, country_id: 1, name: 'اصفهان'},

    {id: 3, country_id: 2, name: 'استانبول'},
    {id: 4, country_id: 2, name: 'ازمیر'},

    {id: 5, country_id: 3, name: 'ایروان'},
    {id: 6, country_id: 3, name: 'گیومری'},

    {id: 7, country_id: 4, name: 'برلین'},
    {id: 8, country_id: 4, name: 'مونیخ'},

    {id: 9, country_id: 5, name: 'پاریس'},
];

export const transport_type = [ // name is required
    {id: 0, name: 'پرواز داخلی', vehicle_name: 'هواپیما'},
    {id: 1, name: 'پرواز خارجی', vehicle_name: 'هواپیما'},
    {id: 2, name: 'اتوبوس', vehicle_name: 'اتوبوس'},
    {id: 3, name: 'قطار', vehicle_name: 'قطار'},
    {id: 4, name: 'تور', vehicle_name: ''},
];

export const transport_company = [
    {id: 1, transport_type_id: 0, name: 'ایران ایر', image: '', }, // name : {fa: 'ایران ایر', en: 'iran air'}
    {id: 2, transport_type_id: 0, name: 'ایران ایر', image: '', },
    {id: 3, transport_type_id: 0, name: 'ایران ایر', image: '', },

    {id: 4, transport_type_id: 1, name: '', image: '', },
    {id: 5, transport_type_id: 1, name: '', image: '', },
    {id: 6, transport_type_id: 1, name: '', image: '', },

    {id: 7, transport_type_id: 2, name: 'رویال سفر', image: '', },
    {id: 8, transport_type_id: 2, name: 'سیر و سفر', image: '', },
    {id: 9, transport_type_id: 2, name: 'جوان سیر', image: '', },

    {id: 10, transport_type_id: 3, name: 'شرکت جوپار', image: '', },
    {id: 11, transport_type_id: 3, name: 'شرکت رجا', image: '', },
    {id: 12, transport_type_id: 3, name: 'شرکت فدک', image: '', },

    {id: 13, transport_type_id: 4, name: '', image: '', },
]

export const trips = [
    {id: 1, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 2, remaining_seats: 10, price: 1230000, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'systematic'},
    {id: 2, transport_type_id: 0, transport_company_id: 2, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 15, price: 177300, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'chartered'},
    {id: 3, transport_type_id: 0, transport_company_id: 3, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 0, price: 123600, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'chartered'},
    {id: 4, transport_type_id: 0, transport_company_id: 1, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 5, price: 150000, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'systematic'},

    {id: 5, transport_type_id: 1, transport_company_id: 4, start_point_city_id: 3, destination_city_id: 6,  remaining_seats: 6, price: 12400, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'systematic'},
    {id: 6, transport_type_id: 1, transport_company_id: 5, start_point_city_id: 4, destination_city_id: 5,  remaining_seats: 12, price: 12430000, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'chartered'},
    {id: 7, transport_type_id: 1, transport_company_id: 6, start_point_city_id: 5, destination_city_id: 4,  remaining_seats: 4, price: 12300, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'systematic'},
    {id: 8, transport_type_id: 1, transport_company_id: 4, start_point_city_id: 6, destination_city_id: 3,  remaining_seats: 0, price: 12000, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'chartered'},

    {id: 9, transport_type_id: 2, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 25, price: 10000, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'chartered'},
    {id: 10, transport_type_id: 2, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 8, price: 1230, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'chartered'},
    {id: 11, transport_type_id: 2, transport_company_id: 9, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 10, price: 12300, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'systematic'},
    {id: 12, transport_type_id: 2, transport_company_id: 7, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 18, price: 17000, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'chartered'},
    {id: 13, transport_type_id: 2, transport_company_id: 8, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 0, price: 18000, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'systematic'},

    {id: 14, transport_type_id: 3, transport_company_id: 10, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 21, price: 129665, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'systematic'},
    {id: 15, transport_type_id: 3, transport_company_id: 11, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 13, price: 5345234, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'systematic'},
    {id: 16, transport_type_id: 3, transport_company_id: 12, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 18, price: 5454545, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'chartered'},
    {id: 17, transport_type_id: 3, transport_company_id: 10, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 14, price: 5464377, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: 'chartered'},

    {id: 18, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 19, price: 65654, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: ''},
    {id: 19, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 4, price: 65457, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: ''},
    {id: 20, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 8, price: 4324234, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: ''},
    {id: 21, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 24, price: 232434, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: ''},
    {id: 22, transport_type_id: 4, transport_company_id: 13, start_point_city_id: 1, destination_city_id: 2,  remaining_seats: 11, price: 4348768, round_trip: false, departure_date: new Date(1401,9,29,11,23,0), receive_date: '', return_date: '', shopping_type: ''},
]