import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CategoryPage from './components/CategoryPage';
import Research from './components/Research';
import Hierarchy from './components/Hierarchy';
import Clients from './components/Clients';
import Analysts from './components/Analysts';
import Settings from './components/Settings';
import { RouteProvider } from './context/RouteContext';
import TopBar from './components/TopBar';
import ManageBranch from './components/ManageBranch';
import ManageUser from './components/ManageUser';
import AddCategory from './components/AddCategory';
import Help from './components/Help';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {//here we manage state of side bar open and close.
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <RouteProvider>
      <Router>
        <div className="flex w-full">
          <div className={isSidebarOpen?'w-[60%] md:w-[20%]':'hidden'}>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          
          </div>
          <div className="flex-grow w-full">
            <TopBar className="" isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            
            <Routes>
              <Route path="/" element={<CategoryPage />} />
              <Route path="/research" element={<Research />} />
              <Route path="/hierarchy" element={<Hierarchy />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/analysts" element={<Analysts />} />
              <Route path="/settings" element={<Settings />} >
                  <Route path="manage-branch" element={<ManageBranch />}/>
                  <Route path="manage-user" element={<ManageUser />} />
                  <Route path="add-category" element={<AddCategory />} />
              </Route>
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </div>
      </Router>
    </RouteProvider>
  );
}

export default App;
