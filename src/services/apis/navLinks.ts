// navLinks.ts
<<<<<<< HEAD:services/apis/navLinks.ts
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
=======
import { INavLink } from '@/types';

export async function getProducts(): Promise<INavLink[]> {
  return [
    { name: "Home", slug: "/" },
    { name: "Shop", slug: "/shop" },
    {
      name: "Collections",
      slug: "#",
      dropdown: [
        { name: "Wedding Collection", slug: "/collections/wedding" },
        { name: "Summer Collection", slug: "/collections/summer" },
        { name: "Exclusive Collection", slug: "/collections/exclusive" },
      ],
    },
    { name: "New Arrivals", slug: "/new-arrivals" },
    { name: "Best Sellers", slug: "/best-sellers" },
    { name: "About Us", slug: "/about" },
    { name: "Contact", slug: "/contact" },
    { name: "Cart", slug: "/cart" },
    {
      name: "My Account",
      slug: "#",
      dropdown: [
        { name: "Profile", slug: "/account/profile" },
        { name: "Orders", slug: "/account/orders" },
        { name: "Settings", slug: "/account/settings" },
      ],
    },
>>>>>>> 984427e812a853537e854958a42309c36f8c025b:src/services/apis/navLinks.ts
  ];
}
