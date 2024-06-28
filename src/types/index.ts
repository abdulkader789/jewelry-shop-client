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
  name: string;
  slug: string;
  dropdown?: INavLink[];
}

// contexts/type.ts
export interface IMenuContext {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}
