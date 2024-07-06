import React, { useState } from 'react';
import { FaHome, FaClipboardList, FaUsers, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useRoute } from '../context/RouteContext';
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { BsArrowRightSquare } from "react-icons/bs";
import user from "./image/user_man.jpeg"
import { FaLayerGroup } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

const TopBar = ({ isOpen, toggleSidebar }) => {
  const { currentRoute, setCurrentRoute } = useRoute();//traking current path.
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (route) => {
    setCurrentRoute(route);
    if (isOpen) toggleSidebar(); // Close the sidebar on mobile after selecting a route
    setMenuOpen(false); // Close the menu after selecting a route on mobile
  };

  const routeToColor = (route) => (currentRoute === route ? 'text-green-300' : '');//conditional rendiring for selected menu. 

  return (
    <div className="w-[100%] bg-white text-black shadow-lg">
      <BsArrowRightSquare size={25} color="black" className={isOpen?"hidden":'block ml-5 mt-2'} onClick={toggleSidebar}/>
      <div className="flex justify-between items-center p-4 lg:hidden ml-[80%]">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav className={`flex-col lg:flex lg:flex-row ${menuOpen ? 'flex' : 'hidden'} lg:flex`}>
        <ul className="flex flex-col lg:flex-row w-full">
          <li className={`p-4 flex items-center ${routeToColor('/')} cursor-pointer`} onClick={() => handleLinkClick('/')}>
            <FaHome className="mr-2" />
            <Link to="/">Dashboard</Link>
          </li>
          <li className={`p-4 flex items-center ${routeToColor('/research')} cursor-pointer`} onClick={() => handleLinkClick('/research')}>
            <FaClipboardList className="mr-2" />
            <Link to="/research">Research</Link>
          </li>
          <li className={`p-4 flex items-center ${routeToColor('/hierarchy')} cursor-pointer`} onClick={() => handleLinkClick('/hierarchy')}>
            <FaLayerGroup className="mr-2" />
            <Link to="/hierarchy">Hierarchy</Link>
          </li>
          <li className={`p-4 flex items-center ${routeToColor('/clients')} cursor-pointer`} onClick={() => handleLinkClick('/clients')}>
            <FaUsers className="mr-2" />
            <Link to="/clients">Clients</Link>
          </li>
          <li className={`p-4 flex items-center ${routeToColor('/analysts')} cursor-pointer`} onClick={() => handleLinkClick('/analysts')}>
            <FaUsers className="mr-2" />
            <Link to="/analysts">Analysts</Link>
          </li>
          <li className={`p-4 flex items-center ${routeToColor('/settings')} cursor-pointer`} onClick={() => handleLinkClick('/settings')}>
            <FaCog className="mr-2" />
            <Link to="/settings">Settings</Link>
          </li>
          <li className={`p-4 flex items-center ${routeToColor('/help')} cursor-pointer`} onClick={() => handleLinkClick('/help')}>
            <IoMdHelpCircle className="mr-2" />
            <Link to="/help">Help</Link>
          </li>
          <li className='flex gap-2 md:ml-auto mt-3 mr-4'>
            <FaSearch size={25} color="black"/>
            <FaRegBell size={25} color="black"/>
            <img src={user} className="w-6 h-6 rounded-full" alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
