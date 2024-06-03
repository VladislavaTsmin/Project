import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Navigation } from "../navigation/navigation";
import { Map } from '../../components/map';


export const Layout = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
      <Footer />
      <Map />
    </main>
  );
};
//чутка изменить