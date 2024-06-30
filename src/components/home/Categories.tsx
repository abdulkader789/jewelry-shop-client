import { ICategory } from "@/types";
import { CategoryCard } from "../common";

export default function Categories({ categories } : { categories: ICategory[] }) {
  return (
    <section className="container mx-auto p-4 md:py-12">
      <div className="mb-8 md:mb-12">
        {/* <h4 className="text-xs md:text-sm text-center uppercase">We've got you covered</h4> */}
        <h1 className="font-marcellus-regular text-2xl md:text-4xl text-center">Explore the Range</h1>
      </div>
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {categories.map((item, index: number) => (
          <CategoryCard category={item} key={index} />
        ))}
      </div>
    </section>
  );
}
