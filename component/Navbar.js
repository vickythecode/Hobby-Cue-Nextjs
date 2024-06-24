import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faCompass, faStar, faBell, faShoppingCart, faBookmark  , faCaretDown} from '@fortawesome/free-solid-svg-icons';
import Logo from "@/public/images/Logo.png"

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md h-20 w-auto">
        <div className="container mx-auto px-4 py-2 flex justify-around items-center">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" className="h-14 w-72 mr-2" />
          </div>
          <div className="flex items-center w-80 h-10">
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow border rounded-l px-4 py-2 focus:outline-none"
            />
            <button className="bg-purple-500 text-white h-10 w-10 rounded-r px-2">
              {isClient && <FontAwesomeIcon icon={faSearch} />}
            </button>
          </div>
          <div className="flex items-center space-x-4 gap-4">
            <div className="flex items-center space-x-1 cursor-pointer">
            {isClient && <FontAwesomeIcon icon={faCompass} className="text-purple-500"/>}
              <select className="text-gray-600 bg-white">
                <option hidden>Explore</option>
                <option>People - Community</option>
                <option>Places - Venues</option>
                <option>Programs - Events</option>
                <option>Products - Store</option>
                <option>Blogs</option>
              </select>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
            {isClient && <FontAwesomeIcon icon={faStar} className="text-purple-500"/>} 
              <span className="text-gray-600">Hobbies</span>
            {isClient && <FontAwesomeIcon icon={faCaretDown} className="text-grey-600"/>}  
            </div>
            {isClient && <FontAwesomeIcon icon={faBookmark} className="text-purple-500 cursor-pointer"/>}
            {isClient && <FontAwesomeIcon icon={faBell} className="text-purple-500 cursor-pointer"/>}
            {isClient && <FontAwesomeIcon icon={faShoppingCart} className="text-purple-500 cursor-pointer"/>}
            <button className="border border-purple-500 text-purple-500 text-center px-5 py-2 rounded-lg hover:bg-purple-500 hover:text-white drop-shadow-md font-semibold">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
