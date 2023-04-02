import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Footer from "./Footer";
import Header from "./Header";
import SidebarLayout from "./Sidebar";


const Layout = ({ children }) => {
  return (
    <ProSidebarProvider>
        <div className='lg:dashboard-grid'>
            <div className='lg:w-72'>
                <SidebarLayout/>
            </div>
            <div className='relative'>
                <div className='fixed index-30 top-0 bg-white w-full lg:pr-60 shadow'>
                <Header/>
                </div>
                <div className='bg-dash mt-16 py-10 min-h-screen px-6'>
                {children}
                </div>
                <div className='bg-white'>
                    <Footer/>
                </div>
            </div>
        </div>
    </ProSidebarProvider>
  );
};

export default Layout;