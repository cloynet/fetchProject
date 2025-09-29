import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";
import { getTopRatedMovies } from "@/lib/getTopRatedMovies";

export default async function FeaturedMovie() {
  const topRatedMovies = await getTopRatedMovies();
  const movie = topRatedMovies?.[0] || {};
  const { poster_path, title, overview, id, backdrop_path } = movie;

  return (
    <div className='relative min-h-screen flex items-center justify-start pt-20'>
      {/* Arkaplan Resmi */}
      <div className='absolute inset-0 -z-10'>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${
            backdrop_path || poster_path
          }`}
          alt={title ?? "Movie Poster"}
          fill
          className='object-cover'
          priority
        />
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent'></div>
      </div>

      {/* İçerik */}
      <div className='container mx-auto px-4 md:px-8 lg:px-16 text-white'>
        <div className='max-w-2xl'>
          <h1 className='text-5xl md:text-7xl font-bold uppercase leading-tight mb-6'>
            {title}
          </h1>
          <p className='text-lg md:text-xl leading-relaxed mb-8 line-clamp-3 max-w-3xl'>
            {overview}
          </p>
          <div className='flex gap-4'>
            <Link
              className='flex items-center justify-center bg-white text-black hover:bg-gray-200 w-48 h-14 rounded-full font-bold text-lg transition-all duration-300'
              href={`/movie/${id}`}
            >
              Play
            </Link>
            <Button className='w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 border border-white/30'>
              <FaPlus className='text-white text-xl' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
