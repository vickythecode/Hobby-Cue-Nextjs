import React from 'react';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaGooglePlusG,
  FaTelegramPlane,
  FaYoutube,
  FaEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  return (
    <footer className="bg-white py-10 px-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-2">Hobbycue</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Our Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Work with Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-2">How Do I</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Sign Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Add a Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Claim Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Post a Query</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Add a Blog Post</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Other Queries</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-2">Quick Links</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Listings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Blog Posts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Shop / Store</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Community</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-2">Social Media</h5>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-purple-700">{isClient && <FontAwesomeIcon icon={FaFacebookF} />}</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">{isClient && <FontAwesomeIcon icon={FaTwitter} />}</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">{isClient && <FontAwesomeIcon icon={FaInstagram} />}</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">{isClient && <FontAwesomeIcon icon={FaPinterest} />}</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">{isClient && <FontAwesomeIcon icon={FaGooglePlusG} />}</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">{isClient && <FontAwesomeIcon icon={FaTelegramPlane} />}</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">{isClient && <FontAwesomeIcon icon={FaYoutube} />}</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">{isClient && <FontAwesomeIcon icon={FaEnvelope} />}</a>
            </div>
            <h5 className="font-bold mb-2">Invite Friends</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Email ID"
                className="p-2 border border-gray-300 rounded-l-md"
              />
              <button className="bg-purple-700 text-white py-2 px-4 rounded-r-md hover:bg-purple-600 transition duration-300">
                Invite
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600">© vigneshraman.dev@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
