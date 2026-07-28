import React from "react";
import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
      <AnnouncementBar />
      <div className="h-10" />
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
