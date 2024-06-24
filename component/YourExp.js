
import React from 'react';

const YourExp = () => {
  return (
    <div className="bg-[#F7FDFF] py-16">
      <div className="container mx-auto px-24 py-24 ">
        <div className="bg-white rounded-lg shadow-lg p-10 px-24">
          <div className="flex items-center mb-4">
            <div className="text-blue-500 text-2xl mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Add your own</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
          </p>
          <button className="text-purple-700 border border-purple-700 rounded-full px-4 py-2 hover:bg-purple-700 hover:text-white transition duration-300">
            Add new
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourExp;
