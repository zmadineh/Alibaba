import Planicon from "../public/svg/Plane-icon.svg"
import Busicon from "../public/svg/Bus-icon.svg"
import Traincon from "../public/svg/Train-icon.svg"
import Tour from "../public/svg/Tuor-icon.svg"
export interface listType {
    id: number;
    title: string;
    icon: any;

}

export const listOption: listType[] = [
    {
        id: 1, title: "پرواز", icon: <Planicon />,
    },
    {
        id: 2, title: "قطار", icon: <Traincon />,
    },
    {
        id: 3, title: "اتوبوس", icon: <Busicon />,
    },
    {
        id: 4, title: "تور", icon: <Tour />,
    }


]

