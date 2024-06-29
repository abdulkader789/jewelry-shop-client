export interface IProduct {
  id: string;
  name: string;
  des: string;
  img: string;
}

export interface ICategory {
  id: string;
  name: string;
  des: string;
  img: string;
}

export interface IUser {
  id: string;
  name: string;
  img: string;
}

// types.ts
export interface INavLink {
  _id: string;
  name: string;
  slug: string;
  dropdown?: INavLink[];
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
