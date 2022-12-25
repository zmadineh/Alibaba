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
    title2?: string,
    Accor: {AccorDetail: filterSideItemDetailType[], id: number, title: string }[],
    slider?: boolean,
    slider2?: boolean,
}

const getCompanies = (type: number) => {
    // promise ====>
    const base_trips = trips.filter(trip => (trip.transport_type_id === type )).map(item => item.transport_company_id)
    return transport_companies
        .filter(company => company.transport_type_id === type)
        .filter(company => {
                return base_trips.includes(company.id)
            })
        .map((company, index) => {
                return {id: index, type: 'company', label: company.id.toString(), body: company.name, check: false}
            })
}

export const filterSidebarAirplaneData: filterSideType[] = [
    {
        id: 1,
        transportTypeId: 0,
        title: "پرواز داخلی",
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
                title: "شرکت های هواپیمایی داخلی",
                AccorDetail: getCompanies(0)
            },
            // {
            //     id: 4,
            //     title: "موارد دیگر",
            //     AccorDetail: [{ id: 5, type: 'available', body: "نمایش بلیط های موجود", label: 'availableTickets', check: false }]
            // },
        ]
    },
]
export const filterSidebarAirplaneTwoData: filterSideType[] = [
    {
        id: 2,
        transportTypeId: 1,
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
                title: "شرکت های هواپیمایی خارجی",
                AccorDetail: getCompanies(1)
            },
        ]
    },
]


export const filterSidebarTrainData: filterSideType[] = [
    {
        id: 3,
        transportTypeId: 2,
        title: "قطار",
        Accor: [
            {
                id: 1,
                title: "شرکت های ریلی",
                AccorDetail: getCompanies(2)
                    // [
                    // { id: 1, type: 'company', label: '', body: "فدک", check: false },
                    // { id: 2, type: 'company', label: '', body: "بن ریل", check: false },
                    // { id: 3, type: 'company', label: '', body: "جوپار", check: false },
                    // { id: 4, type: 'company', label: '', body: "ریل ترابر سبا ", check: false },
                    // { id: 5, type: 'company', label: '', body: " مهتاب سیر جم", check: false },
                    // { id: 6, type: 'company', label: '', body: "نورالرضا ", check: false },
                    // { id: 7, type: 'company', label: '', body: "پارس لایم", check: false },
                    // ]
            },
            // { id: 8, title: "موارد دیگر", AccorDetail: [{ id: 1, type: 'available', body: "نمایش  قطارهای موجود ", label: 'availableTickets', check: false }] }]
        ]
    },
]
export const filterSidebarBusData: filterSideType[] = [
    {
        id: 4,
        title: "اتوبوس",
        transportTypeId: 3,
        Accor: [
            {
                id: 1,
                title: "شرکت های اتوبوسرانی",
                AccorDetail: getCompanies(3)
                    // [
                    // { id: 2, type: 'company', label: 'آسیاسفر', body: "آسیاسفر تهران ترمینال غرب", check: false },
                    // { id: 3, type: 'company', label: 'ایمن سفر', body: "ایمن سفر ایرانیان تهران جنوب", check: false },
                    // { id: 4, type: 'company', label: 'میهن نور', body: "تعاونی 4 میهن نور", check: false },
                    // { id: 5, type: 'company', label: 'رویال سفر', body: "رویال سفر", check: false },
                    // { id: 6, type: 'company', label: 'رویال سفر ایرانیان', body: "رویال سفر ایرانیان", check: false },
                    // { id: 7, type: 'company', label: 'سیر و سفر', body: "سیر و سفر", check: false },
                    // { id: 8, type: 'company', label: 'شرکت تعاونی شماره یک', body: "شرکت تعاونی شماره یک ترمینال غرب", check: false },
                    // { id: 9, type: 'company', label: 'شرکت تی بی تی- تعاونى شماره 15', body: "شرکت تی بی تی- تعاونى شماره 15 پايانه جنوب", check: false },
                    // { id: 10, type: 'company', label: 'همسفر چابکسواران', body: " همسفر چابکسواران پایانه غرب", check: false },]
            },
        ]
    },
]
export const filterSidebarTourData: filterSideType[] = [
    {
        id: 5,
        transportTypeId: 4,
        title: "تور",
        slider2: true,
        Accor: [],
    },
]

