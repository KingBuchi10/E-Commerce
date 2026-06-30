import Image from 'next/image'
import React from 'react' 
import VR from '../../assets/category/vr.png'
import Game from '../../assets/category/gaming.png'
import Speaker from '../../assets/category/speaker.png'
 
const Category2 = () => {
  return (
    <div className='p-5 sm:p-7 bg-white dark:bg-gray-800 dark:text-white'>
      <div className="w-full ">
        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4">

          
        <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-red-900 text-white rounded-3xl relative h-[320px] w-full max-w-[360px] overflow-hidden flex items-end sm:col-span-2 sm:max-w-none lg:col-span-2">
            <div>
                <div className="mb-4">
                    <p className="mb-[2px] text-gray-400">Enjoy</p>
                    <p className="text-2xl font-semibold mb-[2px]">With</p>
                    <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Laptop</p>
                    <button className="bg-red-700 hover:bg-red-300 cursor-pointer text-white font-bold py-2 px-4 rounded-full">
                    Browse
                  </button>
                </div>
            </div>
            <Image src={Game} alt="game" className=" w-[300px] absolute right-1 lg:top-[5px]"/>
        </div>

        <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] w-full max-w-[360px] overflow-hidden flex items-end sm:max-w-none">
            <div>
                <div className="mb-4 relative">
                    <p className="mb-[2px] text-gray-400">Enjoy</p>
                    <p className="text-2xl font-semibold mb-[2px]">with</p>
                    <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                    <button className="bg-red-700 hover:bg-red-300 cursor-pointer text-white font-bold py-2 px-4 rounded-full">
                    Browse
                  </button>
                </div>
            </div>
            <Image src={VR} alt="vr" className="w-[320px] absolute bottom-0 right-0"/>
        </div>

        <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-green-900 text-white rounded-3xl relative h-[320px] w-full max-w-[360px] overflow-hidden flex items-end sm:max-w-none">
            <div>
                <div className="mb-4">
                    <p className="mb-[2px] text-gray-400">Enjoy</p>
                    <p className="text-2xl font-semibold mb-[2px]">with</p>
                    <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Watch</p>
                    <button className="bg-red-700 hover:bg-red-300 cursor-pointer text-white font-bold py-2 px-4 rounded-full">
                    Browse
                  </button>
                </div>
            </div>
            <Image src={Speaker} alt="speaker" className=" w-[100px] absolute right-1 lg:top-[50px]"/>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Category2
