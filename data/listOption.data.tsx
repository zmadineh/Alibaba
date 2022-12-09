import Planicon from "../public/svg/Plane-icon.svg"
import Busicon from "../public/svg/Bus-icon.svg"
import Traincon from "../public/svg/Train-icon.svg"
import Tour from "../public/svg/Tuor-icon.svg"
interface listType {
    id: number;
    title: string;
    icon: any;
    href: string
}

export const listOptionData: listType[] = [
    {
        id: 1, title: "پرواز", icon: <Planicon />, href: "/"
    },
    {
        id: 2, title: "قطار", icon: <Traincon />, href: "/"
    },
    {
        id: 3, title: "اتوبوس", icon: <Busicon />, href: "/"
    },
    { id: 4, title: "تور", icon: <Tour />, href: "/" },


]

