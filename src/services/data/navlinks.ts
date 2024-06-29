import { INavLink } from "@/types";

export const navLinks: INavLink[] = [
  { _id: "609e45663e3a824f88153b57", name: "shop", slug: "/shop" },
  {
    _id: "609e45663e3a824f88153b58",
    name: "collections",
    slug: "/collections",
    dropdown: [
      {
        _id: "609e45663e3a824f88153b59",
        name: "wedding collection",
        slug: "/collections/wedding",
      },
      {
        _id: "609e45663e3a824f88153b5a",
        name: "summer collection",
        slug: "/collections/summer",
      },
      {
        _id: "609e45663e3a824f88153b5b",
        name: "exclusive collection",
        slug: "/collections/exclusive",
      },
    ],
  },
  {
    _id: "609e45663e3a824f88153b5c",
    name: "new arrivals",
    slug: "/new-arrivals",
  },
  {
    _id: "609e45663e3a824f88153b5d",
    name: "best sellers",
    slug: "/best-sellers",
  },
  {
    _id: "609e45663e3a824f88153b5e",
    name: "earrings",
    slug: "/earrings",
    dropdown: [
      {
        _id: "609e45663e3a824f88153b5f",
        name: "stud earrings",
        slug: "/earrings/studs",
      },
      {
        _id: "609e45663e3a824f88153b60",
        name: "hoop earrings",
        slug: "/earrings/hoops",
      },
      {
        _id: "609e45663e3a824f88153b61",
        name: "dangle earrings",
        slug: "/earrings/dangles",
      },
    ],
  },
  {
    _id: "609e45663e3a824f88153b62",
    name: "rings",
    slug: "/rings",
    dropdown: [
      {
        _id: "609e45663e3a824f88153b63",
        name: "engagement rings",
        slug: "/rings/engagement",
      },
      {
        _id: "609e45663e3a824f88153b64",
        name: "wedding rings",
        slug: "/rings/wedding",
      },
      {
        _id: "609e45663e3a824f88153b65",
        name: "fashion rings",
        slug: "/rings/fashion",
      },
    ],
  },
  {
    _id: "609e45663e3a824f88153b66",
    name: "necklaces",
    slug: "/necklaces",
    dropdown: [
      {
        _id: "609e45663e3a824f88153b67",
        name: "pendant necklaces",
        slug: "/necklaces/pendants",
      },
      {
        _id: "609e45663e3a824f88153b68",
        name: "chain necklaces",
        slug: "/necklaces/chains",
      },
      {
        _id: "609e45663e3a824f88153b69",
        name: "choker necklaces",
        slug: "/necklaces/chokers",
      },
    ],
  },
  {
    _id: "609e45663e3a824f88153b6a",
    name: "bracelets",
    slug: "/bracelets",
    dropdown: [
      {
        _id: "609e45663e3a824f88153b6b",
        name: "bangles",
        slug: "/bracelets/bangles",
      },
      {
        _id: "609e45663e3a824f88153b6c",
        name: "cuffs",
        slug: "/bracelets/cuffs",
      },
      {
        _id: "609e45663e3a824f88153b6d",
        name: "charm bracelets",
        slug: "/bracelets/charms",
      },
    ],
  },
];
