import React from 'react';
import Link from 'next/link';
import { IProduct } from '@/types';
import Image from 'next/image';

export default function CategoryCard({ product }: { product: IProduct }) {
    return (
        <div className="relative cursor-pointer group transition-all hover:shadow-md border h-96 w-96">
            {/* Image */}
            <div className="h-full w-full">
                <Image 
                    className="w-full h-full object-cover" 
                    src={product.img} 
                    alt={product.name} 
                    width={500} // Set a default width
                    height={500} // Set a default height
                />
            </div>
            {/* Info */}
            <div className="absolute bottom-0 z-10 flex justify-between w-full p-5">
                <h3 className="font-semibold text-sm sm:text-xs md:text-sm lg:text-base">{product.name}</h3>
                <Link className="hidden text-sm font-semibold text-orange-500 group-hover:block sm:text-xs md:text-sm lg:text-base" href={`/products/${product.id}`}>
                    {"Now ->"}
                </Link>
            </div>
        </div>
    );
}
