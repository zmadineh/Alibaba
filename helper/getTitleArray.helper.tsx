import {data} from "../model/form/data.type";

export function getTitleArray (dataList : data[]) : string[] {
    return dataList.map(item => item.title);
}