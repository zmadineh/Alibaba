import React, {ReactNode} from "react";
import LoginHeader from "../components/desktop_header/LoginHeader"
import HomeSvg from "../public/svg/home-icon.svg"
import Mytravelsicon from "../public/svg/Mytravels-icon.svg"
import Myaccounticon from "../public/svg/Myaccount-icon.svg"

export interface listType {
    id: number;
    title: string;
    icon: ReactNode;
    href?: string;
}

export const footerMobileData: listType[] = [
    {
        id: 1, title: "خانه", icon: <HomeSvg/> , href:"/", 
    },
    {
        id: 2, title: "سفرهای من", icon: <Mytravelsicon/> , 
    },
    {
        id: 3, title: "حساب کاربری", icon: <Myaccounticon/>, 
    },
]