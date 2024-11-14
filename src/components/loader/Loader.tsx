import React from "react";
import "./loader.style.css";
import loading from "../../assets/need-for-speed-loading-screen.gif";
import Image from "next/image";

export const Loader = () => {
  return (
    <div className="wrapper_loader">
      <div className="loader">
        <Image src={loading} alt="Loading.." />
      </div>
    </div>
  );
};
