import React from "react";
import NavigasiBar from "../components/Navbar";

const Layouts = ({ children }) => {
  return (
    <React.Fragment>
      <NavigasiBar />
      <div>
        <div className="">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layouts;
