import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'
import DarkMode from '../navbar/DarkMode'


const MenuLinks = [
  { name: 'Home', 
    href: '#' ,
    id: 1},
  { name: 'Products', 
    href: '/#shop' ,
    id: 2},
  { name: 'About', 
    href: '/#about',
    id: 3 }
]

const NavBar = () => {
  return (
    <div className='justify-center p-5 sm:p-7 bg-white shadow-md dark:bg-gray-800 dark:text-white duration-200 relative z-50'>
      <div className='flex justify-between items-center'>

        <div className=' flex gap-5 items-center'>
            <a href='#' className='text-xl font-bold tracking-widest uppercase'>Eshop</a>
            <div className='hidden lg:block'>
                {/* <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                </ul> */}
                <ul className='flex gap-5'>
                  {MenuLinks.map((data, index) => (
                   <li key={index}>
                    <a href={data.href}>{data.name}</a>
                   </li>
                ))}  
                </ul>
                
            </div>
        </div>

        <div className='flex gap-5 items-center'>
            <div className="relative group hidden sm:block  items-center gap-2">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 text-gray-800 placeholder:text-gray-500 w-0 group-hover:w-75 transition-all duration-300 ease-in-out rounded-full py-1 px-4 focus:outline-none dark:border-gray-800 dark:bg-gray-700 group-hover:dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 group-hover:border group-hover:border-gray-300"
                />
                <IoMdSearch className="text-xl dark:text-gray-400 text-gray-500 absolute top-1/2 -translate-y-1/2 right-1.5" />
            </div>
            <div>
                <button className="relative p-3">
                    <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">4</div>
                </button>
            </div>

            <div>
                <DarkMode />
            </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar
