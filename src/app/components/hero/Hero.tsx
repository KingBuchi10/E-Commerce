'use client'

import React from 'react'
import Slider from "react-slick";
import Image1 from '../../assets/hero/headphone.png'
import Image2 from '../../assets/category/vr.png'
import Image3 from '../../assets/category/macbook.png'
import Image from 'next/image';


const HeroData = [
{
  id: 1,
  img: Image1,
  title: 'Beats solo',
  title2: 'Wireless',
  description: 'This is the first slide',
  subtitle: 'Subtitle 1',
},
{
  id: 2,
  img: Image2,
  title: 'Slide 2',
  title2: 'Title 2',
  description: 'This is the second slide',
  subtitle: 'Subtitle 2',
},
{
  id: 3,
  img: Image3,
  title: 'Slide 3',
  title2: 'Title 2',
  description: 'This is the third slide',
  subtitle: 'Subtitle 3',
}
]
const Hero = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    }
  return (
    <div className='justify-center p-5 sm:p-7 bg-white  dark:bg-gray-800 dark:text-white '>
      <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bg-gradient-to-r from-gray-400 to-gray-100 dark:text-white dark:from-gray-800 dark:to-gray-700 duration-200 '>
        <div className='justify-center pb-5 sm:pb-0 '>
          <Slider {...settings}>
        {
         HeroData.map((data) => (
          <div key={data.id}>
            <div className='grid min-h-[520px] grid-cols-1 items-center gap-6 px-6 py-10 sm:min-h-[620px] sm:px-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,420px)] lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)]'>
              <div className="order-2 flex min-w-0 flex-col items-center gap-5 text-center sm:items-start sm:text-left md:order-1">
                <h1 className="text-2xl font-bold lg:text-3xl">{data.subtitle}</h1>
                <h1 className="max-w-full break-words text-5xl sm:text-6xl lg:whitespace-nowrap lg:break-normal lg:text-7xl">{data.title}</h1>
                <h1 className="max-w-full break-words text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] lg:whitespace-nowrap lg:break-normal xl:text-[150px] font-bold">{data.title2}</h1>
                <div>
                  <button className="bg-red-700 hover:bg-red-300 cursor-pointer text-white font-bold py-2 px-4 rounded-full">
                    Shop by Category
                  </button>
                </div>
              </div>

              <div className="order-1 flex w-full min-w-55 justify-center md:order-2">
                <Image src={data.img} alt={data.title} className="relative z-40 h-[260px] w-full max-w-[320px] object-contain drop-shadow-black sm:h-[360px] sm:max-w-[420px] lg:h-[450px] lg:max-w-[520px]" priority={data.id === 1} />
              </div>
            </div>
          </div>
         )) 
        }
    </Slider>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
