import {data} from "../model/data.type";

export function getTitleArray (dataList : data[]) : string[] {
    return dataList.map(item => item.title);
}