import { ReactNode } from "react";

export interface productInterface {
    sellerEmail: ReactNode;
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
    category:string,
    buyerEmail?:string
}