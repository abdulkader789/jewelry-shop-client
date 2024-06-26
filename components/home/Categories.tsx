"use client";
import { useEffect, useState } from "react";
import { IProduct } from "@/types";
import { CategoryCard } from "../common";
import apis from "@/services/apis";

export default function Categories() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        apis.products.getProducts()
            .then(data => setProducts(data));
    });

    return (
        <section className="">
            <div className="mb-8">
                <h4 className="text-xs md:text-sm text-center uppercase">We've got you covered</h4>
                <h1 className="text-2xl md:text-4xl text-center">Explore the Range</h1>
            </div>
            <div className="container grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {products.map(item => (
                    <CategoryCard product={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}