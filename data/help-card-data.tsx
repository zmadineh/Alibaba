import Darkhat from "../public/Assets/svg-helpcard/darkhast.svg"
import Rahnama from "../public/Assets/svg-helpcard/rahnama.svg"
import Poshtibani from "../public/Assets/svg-helpcard/poshtibani.svg"
import Arrrow from "../public/Assets/svg-helpcard/arrow.svg"
export interface helpCardType {
    id: number;
    title: string;
    body: string;
    body2: string;
    icon: any;
    icon2: any;
    href: string;
    handleClick?: JSX.Element;

}
export const hlepCardData = [
    { id: 1, icon: <Darkhat />, title: "درخواست استرداد", body: "سریع ترین راه برای کنسلی و   لغو رزرو", body2: "سفرهای من", icon2: <Arrrow />, href: "/" },
    { id: 2, icon: <Rahnama />, title: "راهنمای سفر", body: "راهنمای خرید واسترداد قوانین و پرسش ها", body2: "مرکز پشتیبانی آنلاین", icon2: <Arrrow />, href: "/" },
    { id: 3, icon: <Poshtibani />, title: "درخواست پشتیبانی", body: "سریع ترین راه برای بررسی مشکلات شما", body2: "درخواست پشتیبانی", icon2: <Arrrow />, href: "/" },
]