import React from 'react';
import Link from 'next/link';
import { IProduct } from '@/types';

export default function CategoryCard({ product }: { product: IProduct}) {
    return (
        <div className="bg-gray-100 cursor-pointer group tranistion-all hover:shadow-md">
            {/* Image */}
            <div className="p-4 aspect-square bg-gray-300">
                <img className="w-full h-full object-contain" src={product.img} alt={product.name} />
            </div>
            {/* Info */}
            <div className="px-6 py-4 flex items-center justify-between">
                <h3 className="font-semibold">{product.name}</h3>
                <Link className="hidden text-sm font-semibold text-orange-500 group-hover:block" href={`/products/${product.id}`}>{"Now ->"}</Link>
            </div>
        </div>
    );
};