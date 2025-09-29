import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className='bg-gradient-to-b from-black/80 to-transparent w-full absolute top-0 left-0 right-0 z-50'>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='flex items-center justify-between py-4'>
          <div className='flex items-center gap-2 font-bold text-white'>
            <Link href={`/`} className='text-2xl'>
              FILM
            </Link>
          </div>
          <nav className='flex gap-6 md:gap-10 font-bold text-white'>
            <Link href={`/`} className='hover:text-gray-300 transition-colors'>
              Movies
            </Link>
            <Link href={`/`} className='hover:text-gray-300 transition-colors'>
              Series
            </Link>
            <Link href={`/`} className='hover:text-gray-300 transition-colors'>
              Kids
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
