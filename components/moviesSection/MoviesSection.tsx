import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getTopRatedMovies } from "@/lib/getTopRatedMovies";
import { getPopularMovies } from "@/lib/getPopularMovies";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

interface MoviesSectionProps {
  type?: "topRated" | "popular";
}

export default async function MoviesSection({
  type = "topRated",
}: MoviesSectionProps) {
  let movies: Movie[] = [];
  let title = "";

  if (type === "topRated") {
    movies = await getTopRatedMovies();
    title = "Top Rated Movies";
  }

  if (type === "popular") {
    movies = await getPopularMovies();
    title = "Popular Movies";
  }

  if (!movies.length) return null;

  return (
    <div className='mt-8'>
      <h3 className='text-4xl mb-3 uppercase text-white'>{title}</h3>
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
