"use client";
import { useEffect, useState } from "react";
import backendApi from "@/services/backendApi"
import { IProduct } from "@/types";
import { CategoryCard } from "../common";

export default function Categories() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        backendApi.products.getProducts()
            .then(data => setProducts(data));
    });

    return (
        <section className="">
            <div className="holder mb-8">
                <h4 className="text-xs md:text-sm text-center uppercase">We've got you covered</h4>
                <h1 className="text-2xl md:text-4xl text-center">Explore the Range</h1>
            </div>
            <div className="holder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {products.map(item => (
                    <CategoryCard product={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}