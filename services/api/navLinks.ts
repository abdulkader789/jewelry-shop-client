// navLinks.ts
import { INavLink } from './../../types/index';
export function getNavLinks(): INavLink[] {
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
  ];
}
