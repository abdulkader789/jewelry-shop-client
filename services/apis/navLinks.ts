// navLinks.ts
import { INavLink } from "@/types";

export async function getNavLinks(): Promise<INavLink[]> {
  return [
    { name: "home", slug: "/" },
    { name: "shop", slug: "/shop" },
    {
      name: "collections",
      slug: "#",
      dropdown: [
        { name: "wedding collection", slug: "/collections/wedding" },
        { name: "summer collection", slug: "/collections/summer" },
        { name: "exclusive collection", slug: "/collections/exclusive" },
      ],
    },
    { name: "new arrivals", slug: "/new-arrivals" },
    { name: "best sellers", slug: "/best-sellers" },
    { name: "earrings", slug: "/earrings" },
    { name: "rings", slug: "/rings" },
    { name: "necklaces", slug: "/necklaces" },
    { name: "bracelets", slug: "/bracelets" },
  ];
}
