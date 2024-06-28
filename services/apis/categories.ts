import { ICategory } from "@/types";

export async function getCategories(): Promise<ICategory[]> {
    return [
        {
            id: "001",
            name: "Rings",
            img: "/assets/rings.png",
            des: "Product one des",
        },
        {
            id: "002",
            name: "Earrings",
            img: "/assets/rings.png",
            des: "Product one des",
        },
        {
            id: "001",
            name: "Wedding",
            img: "/assets/wedding.png",
            des: "Product one des",
        }
    ]
}