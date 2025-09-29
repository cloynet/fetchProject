import React from "react";
import FeaturedMovie from "@/components/featuredMovie/FeaturedMovie";
import MoviesSection from "@/components/moviesSection/MoviesSection";
import Categories from "@/components/categories/Categories";

export default async function Home() {
  return (
    <div className='relative'>
      <FeaturedMovie />

      <div className='container mx-auto px-4 md:px-8 lg:px-16 py-8'>
        <Categories />
        <MoviesSection type='topRated' />
        <MoviesSection type='popular' />
      </div>
    </div>
  );
}
