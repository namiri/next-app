import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

//li 
const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"  />
    {/* <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} /> */}
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      {/* <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p> */}
      <p className="text-white mb-4 text-shadow font-semibold text-center">{post.title}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.title}
          height="50"
          width="50"
          className="align-middle drop-shadow-lg rounded-full"
          src="https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg"
        />
        {/* <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p> */}
      </div>
    </div>
    {/* <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link> */}
  </div>
);

export default FeaturedPostCard;