
import React, { useState } from 'react';
import Image from 'next/image';
import HomeImg from "@/public/images/HomeImg.png"
import SignUp from './Signup';
import Join from './Join';

const Home = () => {
    const [activeComp , setActiveComp] = useState("signup")
  return (
    <div className="container mx-auto px-24 py-24 flex flex-col md:flex-row gap-5  bg-gray-100">

      <div className="w-4/5 md:w-1/2 pr-6 h-1/2 ">
        <h1 className="text-4xl font-bold mb-4">Explore your <span className="text-blue-500">hobby</span> or <span className="text-purple-700">passion</span></h1>
        <p className="text-gray-600 mb-8">
          Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...
        </p>
        <p className="text-gray-600 mb-8">
          If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
        </p>
        <div className="flex justify-center">
          <Image src={HomeImg} className='w-full h-52'/>
        </div>
      </div>

      <div className=" w-1/5 h-auto md:w-1/2 p-5 px-20">
        <div className="flex gap-8 mb-4">
        <div
            className={`text-xl font-bold cursor-pointer border-b  p-1 ${activeComp === 'signup' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-600'}`}
            onClick={() => setActiveComp('signup')}
          >
            Sign In
          </div>
          <div
            className={`text-xl font-bold cursor-pointer border-b p-1 ${activeComp === 'JoinIn' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-600'}`}
            onClick={() => setActiveComp('JoinIn')}
          >
            Join In
          </div>
        </div>
        {activeComp == "signup" ? <SignUp/> : <Join/>} 
      </div>
    </div>
  );
};

export default Home;
