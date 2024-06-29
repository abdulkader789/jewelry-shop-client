import { IProduct } from "@/types";

export async function getProducts(): Promise<IProduct[]> {
    return [
        {
            id: "001",
            name: "Product One",
            img: "https://images.pond5.com/engagement-diamond-ring-white-background-footage-086465810_prevstill.jpeg",
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
    ];
}
