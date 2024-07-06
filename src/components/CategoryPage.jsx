import React, { useState } from 'react';
import TopBar from './TopBar';
import CategoryTable from './CategoryTable';
import { GoPlus } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { Outlet } from 'react-router-dom';

const CategoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');//use for set input value.

  return (
    <>
      <div className="w-[98%] my-3 flex flex-col m-auto shadow-md">
        <div className="p-4">
          <div className='w-[98%] m-auto flex justify-evenly'>
            <h1 className='w-[250px] text-2xl md:text-3xl font-semibold mt-2'>Category Listing</h1>
            <div className='flex md:mr-6 gap-1 md:gap-3 ml-auto'>
              <FaFilter size={25} className='text-green-400 mt-3' />
              <FiDownload size={25} className='text-green-400 mt-3' />
              <button className="bg-green-400 text-white mt-1 h-14 w-[100px] h-[11] md:h-auto md:w-[180px] rounded flex px-1 md:px-2 pt-2">
                <GoPlus size={25} /><span>Add New Category</span>
              </button>
            </div>
          </div>
          <div className=" w-full flex-grow justify-between items-center mb-10 mt-5">

            <div className="ml-2 w-[90%] md:flex flex-grow gap-4">
              
              <div className='w-[180px] mt-2 md:mt-0'>
                <h1 className='mt-2 md:mb-5 text-gray-300'>Role</h1>
                <select className="border rounded mt-2 md:mt-0 w-44 h-7 px-1">
                <option>Segment</option>
                <option>Equity</option>
                <option>Commoduty</option>
              </select>
              </div>
              <div className='w-[180px] mt-2 md:mt-0'>
                <h1 className='mt-2 md:mb-5 text-gray-300'>Zone</h1>
                <select className="border rounded mt-2 md:mt-0 w-44 h-7 px-1">
                <option>Cash</option>
                <option>Derivative</option>
                <option>Future</option>
              </select>
              </div>
              <div className='w-[180px] mt-2 md:mt-0'>
                <h1 className='mt-2 md:mb-5 text-gray-300'>City</h1>
                <select className="border rounded mt-2 md:mt-0 w-44 h-7 px-1">
                <option>Cash</option>
                <option>Derivative</option>
                <option>Future</option>
              </select>
              </div>
              <div className='w-[180px] mt-2 md:mt-0'>
                <h1 className='mt-2 md:mb-5 text-gray-300'>Name</h1>
                {/* we have use onChange event for traking current type value */}
              <input
                type="text"
                placeholder="Search by Category"
                className="p-1 w-[200px] h-7 mt-2 md:mt-0 border rounded py-1 outline-none"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              </div>

            </div>

          </div>
          {/* we have pass value into categoryTabel from input field using onchange event. */}
          <CategoryTable searchTerm={searchTerm} />
        </div>

      </div>

    </>
  );
};

export default CategoryPage;
