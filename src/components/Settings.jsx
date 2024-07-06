import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Settings = () => {
  const location = useLocation();
  const subPaths = ["/settings/manage-branch", "/settings/manage-user", "/settings/add-category"]; //we have add this logic for show only selected drop dwom menu component data from setting not show setting coponent data.
  const showSettingsHeader = !subPaths.includes(location.pathname);//we will hide setting component data if user select dropdown menu. 

  return (
    <>
    {/* conditional rendring we have applied */}
      {showSettingsHeader && (
        <div className='w-full text-center'>
          <h1 className='text-5xl font-bold text-black'>Settings</h1>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Settings;
