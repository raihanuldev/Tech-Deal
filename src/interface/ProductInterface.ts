import { ReactNode } from "react";

export interface productInterface {
    sellerEmail: ReactNode;
    map(arg0: (product: any) => import("react").JSX.Element): import("react").ReactNode;
    id:string,
    seller: string,
    _id:string,
    verified:string,
    resalePrice:number,
    originalPrice:number,
    used:number,
    location:string,
    model:string,
    img:string,
    price:number,
    description:string,
    category:string
}