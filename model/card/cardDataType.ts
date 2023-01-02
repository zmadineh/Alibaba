import {StaticImageData} from "next/image";

export interface cardDataType {
    id: number,
    image: StaticImageData
    title: string,
    body: string,
}