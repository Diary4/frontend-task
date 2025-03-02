"use client"
import Image from "next/image"
import dealImage from '../../../public/assets/images/deal.jpg'
import DealCard from "./cards/DealCard"
import { useState } from "react"
import { useEffect } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function DealsSection() {

  const [data, setData] = useState([])

  const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setData(data)
  }

  useEffect(() => {
      fetchData()
  }, [])
  
  return (
    <section className="py-12 bg-background max-w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center m-0 text-center">
          <h2 className="text-xl sm:text-4xl font-bold tracking-tight mb-2">Exclusive Deals Just For You</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our exclusive limited-time offers on premium products. Don't miss out on these incredible savings!
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Image src={dealImage} alt="mumzworld" width={400} height={400} />
        </div>
        
        <div className="w-full p-4 overflow-hidden relative my-4">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
                1440: { slidesPerView: 4, spaceBetween: 25 },
            }}
            className="pb-10"
          >
            {
              data.map((item: { id: number, title: string, image: string, category: string, price: number}) => (
                <SwiperSlide
                  className="flex justify-center"
                key={item.id}>
                  <DealCard 
                    title={item.title} 
                    image={item.image} 
                    category={item.category} 
                    price={item.price} 
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
}