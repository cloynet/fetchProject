import React from "react";
import Link from "next/link";
import { getCategories } from "@/lib/getCategories";
import { Button } from "../ui/button";

export default async function Categories() {
  const data = await getCategories();
  const categories = data.genres || [];

  return (
    <div className='flex gap-4 my-8 overflow-x-auto'>
      {categories.slice(0, 7).map((category: { id: number; name: string }) => (
        <Button key={category.id} asChild variant='outline'>
          <Link href={`/category/${category.id}`}>{category.name}</Link>
        </Button>
      ))}
    </div>
  );
}
