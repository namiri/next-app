import React, { Children } from "react";
import { Header } from "./index";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
//<layout>  hhhhh : children </layout>
export default Layout;
