export interface Companies_type{
    id : number,
    name : string,
    image : string,
    transport_type_id : number,
    score? : number
};

export const companies_list : Companies_type[] = [
    {
        id : 0,
        name : 'همسفر چابک سواران',
        image : 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
        transport_type_id : 3,
        score : 4.3
    },
    {
        id : 1,
        name : 'سير و سفر',
        image : 'https://cdn.alibaba.ir/static/img/bus/SS.jpg',
        transport_type_id : 3,
        score : 2
    },
    {
        id : 2,
        name : 'شرکت تی بی تی',
        image : 'https://cdn.alibaba.ir/static/img/bus/T15.jpg',
        transport_type_id : 3,
        score : 4
    }
]