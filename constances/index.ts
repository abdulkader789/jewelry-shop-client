import { INavLink } from "@/types";

export const NAVBAR_LINKS: INavLink[] = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "Products",
    slug: "/products",
    dropdown: [
      { name: "Product A", slug: "/products/a" },
      { name: "Product B", slug: "/products/b" },
    ]
  },
  {
    name: "Categories",
    slug: "/categroies",
    dropdown: [
      { name: "Category A", slug: "/categroies/a" },
      { name: "Category B", slug: "/categroies/b" },
    ]
  }
]