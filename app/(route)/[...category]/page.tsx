import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/lib/getCategories";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface CategoryPageProps {
  params: Promise<{
    category: string[];
  }>;
}

async function getCategoryMovies(categoryId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${categoryId}&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN3}`,
        Accept: "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch category movies:", res.status);
    throw new Error("Movies could not be fetched.");
  }

  return res.json();
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const awaitedParams = await params;
  const categoryPath = awaitedParams.category;
  const categoryId = categoryPath[categoryPath.length - 1];

  console.log("🔍 Category Path:", categoryPath);
  console.log("🎯 Category ID:", categoryId);

  if (!categoryId) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl text-white'>No category selected.</h1>
      </div>
    );
  }

  try {
    const categoryData = await getCategoryMovies(categoryId);
    const movies: Movie[] = categoryData.results || [];

    // Kategori ismini al
    const categoriesData = await getCategories();
    const category = categoriesData.genres.find(
      (cat: { id: number; name: string }) => cat.id.toString() === categoryId
    );
    const categoryName = category?.name || "Movies";

    if (!movies.length) {
      return (
        <p className='text-white'>There are no movies in this category.</p>
      );
    }

    return (
      <div className='container mx-auto px-4 py-13'>
        <h1 className='text-4xl font-bold text-white mb-8'>
          {categoryName} Movies
        </h1>
        <div className='grid auto-rows-[320px] gap-6 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]'>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className='overflow-hidden rounded-xl relative transition-transform duration-300 ease-in hover:z-10 hover:scale-90'
            >
              <Link href={`/movie/${movie.id}`}>
                <Image
                  fill
                  unoptimized
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl text-red-500'>Error!</h1>
        <p className='text-white'>
          An error occurred while loading the movies.
        </p>
      </div>
    );
  }
}
