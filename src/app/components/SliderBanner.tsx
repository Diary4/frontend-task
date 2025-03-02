"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const SliderBanner = () => {
    type product = {
        id: number;
        category: string;
        title: string;
        price: number;
        rating: {
            rate: number;
            count: number;
        };
        description: string;
        image: string;
    };

    const [data, setData] = useState<product[]>([]);

    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-full flex justify-center items-center p-4 relative">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 15 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                    1440: { slidesPerView: 4, spaceBetween: 25 },
                }}
                className="pb-10"
            >
                {data.map((product) => (
                    <SwiperSlide key={product.id} className="flex justify-center items-center w-full">
                        <div className="w-full h-[400px] max-w-xs rounded-md overflow-hidden shadow-md hover:shadow-lg flex flex-col mb-4">
                            <div className="relative flex justify-center items-center h-[200px]">
                                <Image
                                    className="w-auto h-full object-contain"
                                    src={product.image}
                                    alt="Product Image"
                                    width={200}
                                    height={200}
                                />
                                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                                    SALE
                                </div>
                            </div>

                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-medium mb-4 line-clamp-2 h-[48px] overflow-hidden">
                                    {product.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-2">
                                    Category: <span className="font-bold">{product.category}</span>
                                </p>

                                <div className="flex items-center gap-2 mb-4">
                                    <p>⭐ {product.rating.rate}</p>
                                    <p className="bg-orange-300 text-orange-900 px-2 py-1 rounded-md">
                                        {product.rating.count} reviews
                                    </p>
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                    <span className="font-bold text-lg">Price: ${product.price}</span>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderBanner;
