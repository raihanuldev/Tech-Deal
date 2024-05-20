import { ReactNode } from "react";

export interface UserInfoInterface {
    name:string;
    email:string;
    role:string;
    photoURL:string;
}

export type userRole = 'admin'| 'seller'|'buyer';

export interface AdminUserInfo {
    _id: ReactNode;
    name:string;
    email:string;
    role:string;
    photoURL:string;
    createdAt: string;
}