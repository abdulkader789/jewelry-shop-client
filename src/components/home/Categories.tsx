"use client";
import { useEffect, useState } from "react";
import { ICategory } from "@/types";
import { CategoryCard } from "../common";
import apis from "@/services/apis";

export default function Categories() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    apis.categories.getCategories().then((data) => setCategories(data));
  });

  return <section className=""></section>;
}
