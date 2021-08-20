import Image from 'next/image';
import React from 'react';
import { ThumbDownIcon } from '@heroicons/react/outline';

const Thumbnail = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div>
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout='responsive'
        height={1080}
        width={1920}
      />
      <div className='p-2'>
        <p className="truncate max-w-md">{result.overview}</p>
        <h2>
          {result.title || result.original_name}
        </h2>
        <p></p>
      </div>
    </div>
  );
};

export default Thumbnail;
