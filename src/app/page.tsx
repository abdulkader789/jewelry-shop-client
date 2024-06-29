import { ProductCard } from "@/components/common";
import { AboutStore, Categories, Subscribe } from "@/components/home";

export default function HomePage() {
  return (
    <main className="">
      <Categories />
      <ProductCard />
      <Subscribe />
      <AboutStore />
    </main>
  );
}
