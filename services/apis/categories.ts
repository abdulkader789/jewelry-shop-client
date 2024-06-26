import { IProduct } from "@/types";

export async function getCategories(): Promise<IProduct[]> {
    return [
        {
            id: "001",
            name: "Product One",
            des: "Product one des",
        }
    ]
}