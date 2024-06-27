import { ICategory } from "@/types";

export async function getCategories(): Promise<ICategory[]> {
    return [
        {
            id: "001",
            name: "Product One",
            img: "/next.svg",
            des: "Product one des",
        }
    ]
}