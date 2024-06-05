import React from 'react';
import Header from "../../Components/Header";
// import Sidebar from "../../Components/Sidebar";
import { Outlet } from 'react-router-dom';
const SellerDashboard = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100">
        <Header />
        <div className="body flex-grow-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default SellerDashboard;
