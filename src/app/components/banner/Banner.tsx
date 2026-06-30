import React from 'react'
import Image from 'next/image'
import Headphone from '../../assets/hero/headphone.png'

const BannerData = [{
    discount: "50% OFF",
    title: "Summer Sale",
    description: "Get ready for the hottest deals of the season! Our summer sale is here, offering you incredible discounts on a wide range of products. Don't miss out on this opportunity to save big and upgrade your summer essentials.",
    title1:"Air Solo bass",
    title2:"Wireless Earbuds",
    title3:"$99.99",
    image: Headphone

}]

const Banner = () => {
  const data = BannerData[0]

  return (
    <div className="p-5 py-12 sm:p-7 sm:py-16 bg-white dark:bg-gray-800 dark:text-white">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-red-900 px-6 py-10 text-white sm:px-10 lg:px-16">
        <div className="grid min-h-[420px] grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(260px,420px)_minmax(0,1fr)] lg:min-h-[360px]">
          <div className="relative z-10">
            <p className="text-lg font-semibold">{data.discount}</p>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl lg:text-6xl">{data.title}</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/80 sm:text-base">
              {data.description}
            </p>
          </div>

          <div className="relative z-20 flex justify-center md:-my-16">
            <Image
              src={data.image}
              alt={data.title2}
              className="h-[260px] w-full max-w-[340px] object-contain drop-shadow-2xl sm:h-[340px] md:h-[430px]"
              priority
            />
          </div>

          <div className="relative z-10 text-left md:text-right">
            <p className="text-xl font-medium">{data.title1}</p>
            <h3 className="mt-2 text-3xl font-bold sm:text-4xl">{data.title2}</h3>
            <p className="mt-4 text-2xl font-bold">{data.title3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner



