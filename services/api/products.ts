import { IProduct } from "@/types";

export async function getProducts(): Promise<IProduct[]> {
    return [
        {
            id: "001",
            name: "Product One",
            des: "Product one des",
        }
    ]
}