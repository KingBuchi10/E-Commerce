import React from 'react'
import { FaCarSide, FaCheckCircle, FaHeadphonesAlt, FaWallet } from 'react-icons/fa'


const serviceData = [
    {
        id: 1,
        title: "Free Shipping",
        description: "Enjoy free shipping on all orders over $50. Shop now and save on delivery costs.",
        icon: <FaCarSide className='text-4xl md:text-5xl text-red-600'/>
    },
    {
        id: 2,
        title: "Safe Payment",
        description: "30 days money back guarantee. Shop with confidence knowing that your purchase is protected.",
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-red-600'/>
    },
    {
        id: 3,
        title: "Secure Payment",
        description: "All payment methods are secure and encrypted. Your personal information is safe with us.",
        icon: <FaWallet className='text-4xl md:text-5xl text-red-600'/>
    },
    {
        id: 4,
        title: "24/7 Support",
        description: "Our customer support team is available around the clock to assist you with any questions or concerns.",
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-red-600'/>
    },
]

const Services = () => {
  return (
    <div className="p-5 sm:p-7 bg-white dark:bg-gray-800 dark:text-white mt-14 md:mt-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
        {serviceData.map((data, index) => (
          <div key={index} >
            <div className="flex flex-col items-start sm:flex-row">
              {data.icon}
            </div>
            <h1 className="font-bold lg:text-xl">{data.title}</h1>
            <h1 className="text-gray-400 tetx-sm">{data.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services
