import React from 'react';
import Image from 'next/image';
import testimonialImage from "@/public/images/Testimonials.png"


const Testimonials = () => {
  return (
    <div className="bg-[#F7FDFF] py-16">
      <div className="container mx-auto p-24 h-96 pt-0">
        <div className="bg-purple-50 rounded-lg shadow-lg p-24 ">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-purple-700 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h4m-2 8c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              />
            </svg>
            Testimonials
          </h2>
          <p className="text-gray-700 mb-6">
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
          <div className="flex items-center justify-between mt-10 ">
            <div className="w-3/5 h-12 bg-purple-200 rounded-md flex items-center p-10">
              <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-purple-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-4.197 4.197m0 0l-4.197-4.197m4.197 4.197V3"
                  />
                </svg>
              </button>
              <div className="flex-1 h-1 bg-purple-400 rounded-full mx-2"></div>
              <span className="text-purple-700 text-xs">0:00</span>
              <Image src={testimonialImage} alt="Shubha Nagarajan" className="w-12 h-12 rounded-full ml-4" />
            </div>
            <div className='flex gap-2 ml-0'>
            <Image src={testimonialImage} alt="Shubha Nagarajan" className="w-24 h-24 rounded-full ml-4" />
            <div className="ml-6 pt-4">
              <h3 className="text-lg font-bold text-purple-700">Shubha Nagarajan</h3>
              <p className="text-blue-500">Classical Dancer</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
