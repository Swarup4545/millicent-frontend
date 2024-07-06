import React, { useState } from 'react';
import { FaHome, FaClipboardList, FaUsers, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsArrowLeftSquare } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [hideDrop, setDrop] = useState(false)//here we manage state from usestate hooks for managing dropdown. 


  const handleLinkClick = (route, str) => {
    if (str === "settings") {//here we set logic if user select setting then open dropdown.
      setDrop(!hideDrop)
    }
    else {
      setDrop(false);
    }
    // Close the sidebar on mobile after selecting a route
  };
  
  return (
    <div className={`absolute md:relative ${isOpen ? 'block' : 'hidden'} bg-gray-900 w-[300px] md:w-full text-white h-screen rounded-r-lg`}>
      <div className="p-4 text-2xl font-bold"><h1 className='font-bold text-white'>Millicent Technologies</h1><BsArrowLeftSquare size={25} color="white" onClick={toggleSidebar} className="mt-1"/></div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaHome className="mr-2" />
            {/* here we have apllied onclick event for pass slected menu path. */}
            <Link className='cursor-pointer' to="/" onClick={() => handleLinkClick('/', "")}>Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaClipboardList className="mr-2" />
            <Link className='cursor-pointer' to="/research" onClick={() => handleLinkClick('/research', "")}>Research</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaLayerGroup className="mr-2" />
            <Link className='cursor-pointer' to="/hierarchy" onClick={() => handleLinkClick('/hierarchy', "")}>Hierarchy</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaUsers className="mr-2" />
            <Link className='cursor-pointer' to="/clients" onClick={() => handleLinkClick('/clients', "")}>Clients</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaUsers className="mr-2" />
            <Link className='cursor-pointer' to="/analysts" onClick={() => handleLinkClick('/analysts', "")}>Analysts</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaCog className="mr-2" />
            <Link className='cursor-pointer' to="/settings" onClick={() => handleLinkClick('/settings', "settings")}>Settings</Link>
            {hideDrop?<MdOutlineKeyboardArrowUp size={25} className='ml-auto mr-2 cursor-pointer' onClick={() => handleLinkClick('/settings', "settings")}/>:<MdOutlineKeyboardArrowDown size={25} className='ml-auto mr-2 cursor-pointer' onClick={() => handleLinkClick('/settings', "settings")}/>}
          </li>
          <div className={hideDrop ? "mt-1" : "hidden"}>
          <ul className='list-disc list-inside ml-5'>
              <li className='mt-1'><Link to="/settings/manage-branch">Manage Branch</Link></li>
              <li className='mt-1'><Link to="/settings/manage-user">Manage User</Link></li>
              <li className='mt-1'><Link to="/settings/add-category">Add Category</Link></li>
            </ul>
          </div>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <IoMdHelpCircle className="mr-2" />
            <Link className='cursor-pointer' to="/help" onClick={() => handleLinkClick('/help', "")}>Help</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
