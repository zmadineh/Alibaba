

export interface filterSideType {
    id: number;
    title?: string;
    title2?: string;
    Accor?: filterSideType[]
    AccorDetail?: filterSideType[]
    body?: string;

    silider?: boolean
    silider2?: boolean
    check?: boolean


}
export const filterSidebarAirplaneData: filterSideType[] = [
    {
        id: 1,
        title: "پرواز داخلی",
        Accor: [
            {
                id: 2,
                title: "نوع بلیط",
                AccorDetail: [{ id: 3, body: "سیستمی", check: false }]
            },
            {
                id: 4,
                title: "موارد دیگر",
                AccorDetail: [{ id: 5, body: "نمایش بلیط های موجود", check: false }]
            },
        ]
    },

]
export const filterSidebarAirplanetwoData: filterSideType[] = [
    {
        id: 2, title: "پرواز خارجی", silider: true,
        Accor: [
            { id: 1, title: " نوع بلیط", AccorDetail: [{ id: 2, body: "سیستمی", check: false }] }],
    },
]
export const filterSidebarTrainData: filterSideType[] = [
    {
        id: 3, title: "قطار",
        Accor: [
            { id: 1, title: "شرکت های ریلی", AccorDetail: [{ id: 1, body: "فدک", check: false }, { id: 2, body: "بن ریل", check: false }, { id: 3, body: "جوپار", check: false }, { id: 4, body: "ریل ترابر سبا ", check: false }, { id: 5, body: " مهتاب سیر جم", check: false }, { id: 6, body: "نورالرضا ", check: false }, { id: 7, body: "پارس لایم", check: false },] },
            { id: 8, title: "موارد دیگر", AccorDetail: [{ id: 1, body: "نمایش  قطارهای موجود ", check: false }] }]
    },
]
export const filterSidebarBusData: filterSideType[] = [
    {
        id: 4, title: "اتوبوس",
        Accor: [
            { id: 1, title: "شرکت های اتوبوسرانی", AccorDetail: [{ id: 2, body: "آسیاسفر تهران ترمینال غرب", check: false }, { id: 3, body: "ایمن سفر ایرانیان تهران جنوب", check: false }, { id: 4, body: "تعاونی 4 میهن نور", check: false }, { id: 5, body: "رویال سفر", check: false }, { id: 6, body: "رویال سفر ایرانیان", check: false }, { id: 7, body: "سیر و سفر", check: false }, { id: 8, body: "شرکت تعاونی شماره یک ترمینال غرب", check: false }, { id: 9, body: "شرکت تی بی تی- تعاونى شماره 15 پايانه جنوب", check: false }, { id: 10, body: " همسفر چابکسواران پایانه غرب", check: false },] },]
    },
]
export const filterSidebarTourData: filterSideType[] = [
    { id: 5, title: "تور", silider2: true, },
]

