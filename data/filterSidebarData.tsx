import {trips} from "./database/trips.data";
import {transport_companies} from "./database/transportCompanies.data";

export interface filterSideItemDetailType {
    id: number,
    type: string,
    body: string,
    label: string,
    check: boolean
}

export interface filterSideType {
    id: number,
    transportTypeId: number,
    title: string,
    priceRange: {min: number, max: number}
    Accor: {AccorDetail: filterSideItemDetailType[], id: number, title: string }[],
    slider?: boolean,
}

const getCompanies = (type: number) => {
    // promise ====>
    const baseTrips = trips.filter(trip => (trip.transport_type_id === type )).map(item => item.transport_company_id)
    return transport_companies
        .filter(company => company.transport_type_id === type)
        .filter(company => {
                return baseTrips.includes(company.id)
            })
        .map((company, index) => {
                return {id: index, type: 'company', label: company.id.toString(), body: company.name, check: false}
            })
}

const getPriceRange = (type: number) => {
    // promise ====>
    const baseTripsPrice = trips.filter(trip => (trip.transport_type_id === type )).map(item => item.price).sort((a, b) => a - b)
    const tripsLength = baseTripsPrice.length
    return {min: baseTripsPrice[0], max: baseTripsPrice[tripsLength-1]}
}

export const filterSidebarAirplaneData: filterSideType[] = [
    {
        id: 1,
        transportTypeId: 0,
        priceRange: getPriceRange(0),
        title: "پرواز داخلی",
        slider: true,
        Accor: [
            {
                id: 1,
                title: "نوع بلیط",
                AccorDetail:
                    [
                        { id: 2, type: 'shopping', body: "سیستمی", label: 'systematic', check: false },
                        { id: 3, type: 'shopping', body: "چارتری", label: 'chartered', check: false }
                    ]
            },
            {
                id: 2,
                title: "شرکت های هواپیمایی",
                AccorDetail: getCompanies(0)
            },
        ]
    },
]
export const filterSidebarAirplaneTwoData: filterSideType[] = [
    {
        id: 2,
        transportTypeId: 1,
        priceRange: getPriceRange(1),
        title: "پرواز خارجی",
        slider: true,
        Accor: [
            {
                id: 1,
                title: " نوع بلیط",
                AccorDetail:
                    [
                        {id: 2, type: 'shopping', body: "سیستمی", label: 'systematic', check: false},
                        {id: 3, type: 'shopping', body: "چارتری", label: 'chartered', check: false}
                    ],
            },
            {
                id: 2,
                title: "شرکت های هواپیمایی",
                AccorDetail: getCompanies(1)
            },
        ]
    },
]


export const filterSidebarTrainData: filterSideType[] = [
    {
        id: 3,
        transportTypeId: 2,
        priceRange: getPriceRange(2),
        title: "قطار",
        Accor: [
            {
                id: 1,
                title: "شرکت های ریلی",
                AccorDetail: getCompanies(2)
            }
        ]
    },
]
export const filterSidebarBusData: filterSideType[] = [
    {
        id: 4,
        title: "اتوبوس",
        transportTypeId: 3,
        priceRange: getPriceRange(3),
        Accor: [
            {
                id: 1,
                title: "شرکت های اتوبوسرانی",
                AccorDetail: getCompanies(3)
            },
        ]
    },
]



// export const filterSidebarTourData: filterSideType[] = [
//     {
//         id: 5,
//         transportTypeId: 4,
//         title: "تور",
//         slider2: true,
//         Accor: [],
//     },
// ]

