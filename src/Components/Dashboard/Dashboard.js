import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
   <h2 className='text-3xl text-primary'>Welcome to your Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      
      <li><Link to='/dashboard'>My Orders</Link></li>
      <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
      <li><Link to='/dashboard/profile'>My Profile</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;