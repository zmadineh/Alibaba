import {startDesPointType} from "../../model/database/startDesPoint.typ";
import {getCityById} from "../../data/database/cities.data";

export const createPointList = (data: startDesPointType[]) => {
    return data.map((item, index) => {
        return {id: index, title: item.name, description: getCityById(item.city_id), type: item.type}
    });
}

export const createPointListByCity = (data: {id: number, country_id: number, name: string }[]) => {
    return data.map((item, index) => {
        return {id: index, title: item.name, description: item.name, type: 'city'}
    });
}