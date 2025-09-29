import React from "react";
import { getMovie } from "@/lib/getMovie";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaPlay, FaPlus } from "react-icons/fa";

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const awaitedParams = await params;
  const { id } = awaitedParams;

  try {
    const movie = await getMovie(id);
    const {
      title,
      overview,
      poster_path,
      backdrop_path,
      release_date,
      vote_average,
    } = movie;

    return (
      <div className='min-h-screen'>
        {/* Arkaplan */}
        <div className='absolute top-0 left-0 right-0 bottom-0 -z-10'>
          <Image
            unoptimized
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={title}
            fill
            className='object-cover opacity-30'
          />
          <div className='absolute inset-0 bg-black bg-opacity-60'></div>
        </div>

        {/* Film Detayları */}
        <div className='container mx-auto px-4 pt-32 relative z-10'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Poster */}
            <div className='flex-shrink-0'>
              <Image
                unoptimized
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width={300}
                height={450}
                className='rounded-lg'
              />
            </div>

            {/* Bilgiler */}
            <div className='flex-1 text-white'>
              <h1 className='text-5xl font-bold mb-4'>{title}</h1>
              <div className='flex items-center gap-4 mb-6'>
                <span className='bg-yellow-500 text-black px-2 py-1 rounded font-bold'>
                  IMDB: {vote_average?.toFixed(1)}
                </span>
                <span>{release_date?.split("-")[0]}</span>
              </div>
              <p className='text-xl leading-relaxed mb-8 max-w-3xl'>
                {overview}
              </p>
              <div className='flex gap-4'>
                <Button className='bg-red-600 hover:bg-red-700 px-8 py-3 text-lg'>
                  <FaPlay className='mr-2' />
                  Play
                </Button>
                <Button
                  variant='outline'
                  className='px-8 py-3 text-lg bg-black'
                >
                  <FaPlus className='mr-2' />
                  Add to My List
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-red-500'>Error!</h1>
          <p className='mt-2'>An error occurred while loading the movies.</p>
        </div>
      </div>
    );
  }
}
