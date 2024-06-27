import React from 'react';
import Link from 'next/link';
import { ICategory } from '@/types';
import Image from 'next/image';

export default function CategoryCard({ category }: { category: ICategory }) {
  return (
    <div className="cursor-pointer group transition-all hover:shadow-md border bg-white">
      {/* Image */}
      <div className="w-full aspect-square">
        <Image
          className="w-full h-full object-cover"
          src={category.img}
          alt={category.name}
          width={500} // Set a default width
          height={500} // Set a default height
        />
      </div>
      
      {/* Info */}
      <div className="h-[4.5rem] relative">
        <div className="px-4 md:px-6 absolute inset-0 flex flex-col justify-center">
          <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-base">{category.name}</h3>
          <Link className="hidden text-sm font-semibold text-orange-500 group-hover:block sm:text-xs md:text-sm lg:text-base" href={`/categories/${category.id}`}>
            {"Now ->"}
          </Link>
        </div>
      </div>
    </div>
  );
}