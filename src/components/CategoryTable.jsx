import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

//initialData array as a source of data to be displayed in a table, list, 
//or other UI components. You can map over this array to generate elements for each item, 
//filter it based on user input, or manipulate it in various ways to fit the needs of your application.
const initialData = [
  { no: 1, segment: 'Equity', type: 'Cash', categoryName: 'Call of the Day', leg1: '1 Day, 3 hours 20 mins', leg2: '1 Day, 6 hours 10 mins' },
  { no: 2, segment: 'Equity', type: 'Cash', categoryName: 'Call of the Day', leg1: '1 Day, 3 hours 20 mins', leg2: '1 Day, 6 hours 10 mins' },
  { no: 3, segment: 'Equity', type: 'Derivative', categoryName: 'Futures & Options', leg1: '2 Days, 2 hours 15 mins', leg2: '2 Days, 5 hours 50 mins' },
  { no: 4, segment: 'Commodity', type: 'Future', categoryName: 'Futures & Options', leg1: '3 Days, 1 hour 10 mins', leg2: '3 Days, 4 hours 45 mins' },
  { no: 5, segment: 'Currency', type: 'Derivative', categoryName: 'Cash', leg1: '1 Day, 4 hours 5 mins', leg2: '1 Day, 7 hours 30 mins' },
  { no: 6, segment: 'Equity', type: 'Option', categoryName: 'Strategy Session', leg1: '2 Days, 3 hours 25 mins', leg2: '2 Days, 6 hours 40 mins' },
  { no: 7, segment: 'Commodity', type: 'Cash', categoryName: 'Monthly Analysis', leg1: '4 Days, 2 hours 20 mins', leg2: '4 Days, 5 hours 55 mins' },
  { no: 8, segment: 'Currency', type: 'Future', categoryName: 'Economic Calendar', leg1: '3 Days, 1 hour 30 mins', leg2: '3 Days, 5 hours 45 mins' },
];

const CategoryTable = ({ searchTerm }) => {
  const [data, setData] = useState(initialData);

  const filteredData = data.filter(item =>
    item.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );//here we use filter() This is a method provided by JavaScript arrays.
  //It creates a new array with all elements that pass the test implemented by the provided function. 
  //In this case, the test is whether the categoryName of each item includes the searchTerm.
  //item is paraameter is represenitng currrent element.
  //if search Term value is present in data obly that value is save in filteredData. 

  return (
    <div className="overflow-x-auto w-[98%]  m-auto">
      <table className="overflow-x-auto md:w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-left text-gray-400">No</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-gray-400">Segment</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-gray-400">Type</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-gray-400">Category Name</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-gray-400">Leg 1 Tracking</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-gray-400">Leg 2 Tracking</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-gray-400"></th>
          </tr>
        </thead>
        <tbody>
          {/* here we have map method for  iterate data. */}
          {filteredData.map((item, index) => (
            <tr key={index} className="border-b h-14">
              <td className="py-2 px-4">{item.no}</td>
              <td className="py-2 px-4">{item.segment}</td>
              <td className="py-2 px-4">{item.type}</td>
              <td className="py-2 px-4">{item.categoryName}</td>
              <td className="py-2 px-4">{item.leg1}</td>
              <td className="py-2 px-4">{item.leg2}</td>
              <td className="py-2 px-4">
                <button className="mr-2">
                  <FaPen />
                </button>
                <button className="">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;