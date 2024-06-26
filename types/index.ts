export interface IProduct {
    id: string,
    name: string,
    img: string,
    des: string,
}

export interface IUser {
    id: string,
    name: string,
    img: string,
}

// types.ts
export interface INavLink {
    name: string;
    slug: string;
    dropdown?: INavLink[];
}
