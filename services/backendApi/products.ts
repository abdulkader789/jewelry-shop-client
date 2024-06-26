import { IProduct } from "@/types";

export async function getProducts(): Promise<IProduct[]> {
    return [
        {
            id: "001",
            name: "Product One",
            img: "/next.svg",
            des: "Product one des",
        },
        {
            id: "002",
            name: "Product 2",
            img: "/next.svg",
            des: "Product one des",
        },
        {
            id: "003",
            name: "Product 3",
            img: "/next.svg",
            des: "Product one des",
        }
    ]
}