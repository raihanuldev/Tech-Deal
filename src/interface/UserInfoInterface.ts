export interface UserInfoInterface {
    name:string;
    email:string;
    role:string;
    photoURL:string;
}

export type userRole = 'admin'| 'seller'|'buyer';