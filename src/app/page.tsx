import { ProductCard } from "@/components/common";
import { AboutStore, Categories, Subscribe } from "@/components/home";
import apis from "@/services/apis";

export default async function HomePage() {
  const categories = await apis.categories.getCategories();

  return (
    <main className="">
      <Categories categories={categories} />
      <ProductCard />
      <Subscribe />
      <AboutStore />
    </main>
  );
}
