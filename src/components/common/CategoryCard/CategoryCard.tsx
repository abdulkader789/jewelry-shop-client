import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import { ICategory } from "@/types";

export default function CategoryCard({ category }: { category: ICategory }) {
  return (
    <div className="cursor-pointer group transition-all hover:shadow-md bg-gray-100 hover:bg-gray-50">
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
      <div className="h-[5rem] relative">
        <div className="px-4 md:px-8 absolute inset-0 flex flex-col gap-2 justify-center">
          <h3 className="font-semibold text-xl sm:text-2xl">{category.name}</h3>
          <Link
            className="hidden items-center text-orange-500 transition-all group-hover:flex hover:text-orange-700 hover:gap-2"
            href={`/categories`}
          >
            <span className="text-sm sm:text-sm font-semibold">Now</span>
            <BiRightArrowAlt className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
