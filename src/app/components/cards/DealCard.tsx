import React from 'react'
import Image from 'next/image'

interface DealCardProps {
    title: string;
    image: string;
    category: string;
    price: number;
}

const DealCard: React.FC<DealCardProps> = ({ title, image, category, price }) => {
  return (
    <div className="flex flex-col items-center gap-4 relative p-4 my-10 mx-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-300 h-[350px]">
      
      <div className="flex justify-center items-center">
        <Image src={image} alt={title} width={120} height={120} className="w-[120px] h-[120px] object-cover" />
      </div>

      <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-full">%30 Off</span>

      
      <div className="flex flex-col flex-grow text-center">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className="mt-auto">
          <strong>Price: ${price}</strong>
        </p>
      </div>
    </div>
  );
};

export default DealCard;
