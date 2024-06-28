"use client";
import { useEffect, useState } from "react";
<<<<<<< HEAD:components/home/Categories.tsx
import { IProduct } from "@/types";
=======
import { ICategory } from "@/types";
>>>>>>> 984427e812a853537e854958a42309c36f8c025b:src/components/home/Categories.tsx
import { CategoryCard } from "../common";
import apis from "@/services/apis";

export default function Categories() {
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        apis.categories.getCategories()
            .then(data => setCategories(data));
    });

    return (
        <section className="">
            <div className="mb-8">
                <h4 className="text-xs md:text-sm text-center uppercase">We've got you covered</h4>
                <h1 className="text-2xl md:text-4xl text-center">Explore the Range</h1>
            </div>
<<<<<<< HEAD:components/home/Categories.tsx
            <div className="container grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {products.map(item => (
                    <CategoryCard product={item} key={item.id} />
=======
            <div className="container mx-auto px-4 grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {categories.map(item => (
                    <CategoryCard category={item} key={item.id} />
>>>>>>> 984427e812a853537e854958a42309c36f8c025b:src/components/home/Categories.tsx
                ))}
            </div>
        </section>
    )
}