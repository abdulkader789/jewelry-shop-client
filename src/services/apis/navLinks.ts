// navLinks.ts
import { INavLink } from "@/types";

export async function getNavLinks(): Promise<INavLink[]> {
  return [
    { name: "new arrivals", slug: "/new-arrivals" },
    { name: "best sellers", slug: "/best-sellers" },
    {
      name: "earrings",
      slug: "#",
      dropdown: [
        { name: "stud earrings", slug: "/earrings/studs" },
        { name: "hoop earrings", slug: "/earrings/hoops" },
        { name: "dangle earrings", slug: "/earrings/dangles" },
      ],
    },
    {
      name: "rings",
      slug: "#",
      dropdown: [
        { name: "engagement rings", slug: "/rings/engagement" },
        { name: "wedding rings", slug: "/rings/wedding" },
        { name: "fashion rings", slug: "/rings/fashion" },
      ],
    },
    {
      name: "necklaces",
      slug: "#",
      dropdown: [
        { name: "pendant necklaces", slug: "/necklaces/pendants" },
        { name: "chain necklaces", slug: "/necklaces/chains" },
        { name: "choker necklaces", slug: "/necklaces/chokers" },
      ],
    },
    {
      name: "bracelets",
      slug: "#",
      dropdown: [
        { name: "bangles", slug: "/bracelets/bangles" },
        { name: "cuffs", slug: "/bracelets/cuffs" },
        { name: "charm bracelets", slug: "/bracelets/charms" },
      ],
    },
  ];
}
