import React from 'react'
import 'swiper/css'
import SliderBanner from './SliderBanner'

export default function ProductCategories() {


  return (
    <div>
        <h1 className='text-2xl font-bold text-center my-10'>Featured Products</h1>
        <div className='flex flex-row justify-around items-center gap-4 px-2'>
            <SliderBanner />
        </div>
    </div>
  )
}
