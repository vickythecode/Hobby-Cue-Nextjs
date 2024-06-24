import React from 'react';

const features = [
  {
    title: 'People',
    description: 'Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.',
    hoverColor: 'hover:border-purple-700',
    buttonName: "Connect" ,
  },
  {
    title: 'Place',
    description: 'Find and connect with places to practice, participate or perform. Whether it’s a workshop, a class, or a performance venue, we have you covered.',
    hoverColor: 'hover:border-purple-700',
    buttonName: "Meet up" ,
  },
  {
    title: 'Product',
    description: 'Discover and purchase products related to your hobbies. From materials and tools to finished goods, find what you need to pursue your passion.',
    hoverColor: 'hover:border-purple-700',
    buttonName: "Get it" ,
  },
  {
    title: 'Program',
    description: 'Join programs and events that match your interests. From classes and workshops to community events, there’s always something happening.',
    hoverColor: 'hover:border-purple-700',
    buttonName: "Attend" ,
  },
];

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className="flex gap-8 m-4 w-full  flex-wrap justify-center items-center ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={` w-2/5 p-4 border rounded-xl transition-all duration-30 cursor-pointer  h-56`}
          >
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="">{feature.description}</p>
            <button className={` text-purple-700 border border-slate-600 ${feature.hoverColor} p-2 h-10 w-32 rounded-lg m-4 `}>{feature.buttonName}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
