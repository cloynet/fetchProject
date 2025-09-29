import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSingleCategory } from "@/lib/getSingleCategory";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

interface CategoryMoviesSectionProps {
  genreId: string;
  categoryName: string;
}

export default async function CategoryMoviesSection({
  genreId,
  categoryName,
}: CategoryMoviesSectionProps) {
  const data = await getSingleCategory(genreId);
  const movies: Movie[] = data.results || [];

  if (!movies.length) return null;

  return (
    <div className='mt-8'>
      <h3 className='text-4xl mb-3 uppercase text-white'>
        {categoryName} Movies
      </h3>
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
}
