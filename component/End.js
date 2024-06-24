import React from 'react';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
import hobbyCommunityImage from "@/public/images/image.png"
import { FaChevronUp } from '@fortawesome/free-solid-svg-icons';

const End = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="bg-[#F7FDFF] py-16 mt-24">
      <div className="container mx-auto  px-24">
        <h2 className="text-5xl font-bold mb-4 pl-0">
          Your <span className="text-purple-700">Hobby</span>, Your <span className="text-blue-500">Community</span>...
        </h2>
        <button className="bg-purple-700 text-white py-2 mt-4 px-6 rounded-full hover:bg-purple-600 transition duration-300">
          Get started
        </button>
        <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 text-gray-500 p-2 rounded-full shadow-xl hover:bg-purple-800  hover:text-white focus:outline-none"
      >
        {isClient && <FontAwesomeIcon icon={FaChevronUp} />}
      </button>
        <div className="mt-8">
          <Image src={hobbyCommunityImage} alt="Hobby Community" className="mx-auto"/>
        </div>
      </div>
    </div>
  );
};

export default End;
