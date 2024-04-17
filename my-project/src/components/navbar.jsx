import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="px-6 flex items-center justify-around py-5 font-sans">
        <Link to='/'>
        <img src="./assets/logo.svg" alt="" />

        </Link>
        
        <ul className="inline-flex gap-5 font-medium text-xl font-ussf">
          <li>MUSIC</li>
          <li>SPORTS</li>
          <li>FASHION</li>
          <li>NEWS</li>
          <li>ARTS & DESIGN</li>
          <li>EVENTS</li>
          <li>EDITORIALS</li>
          <li>SPOTLIGHT</li>
          <li>
            <Link to="/about" >ABOUT</Link>
          </li>
        </ul>

        <button className="bg-[#F18701] px-4 py-2 font-sans font-bold text-white text-base">
          SIGN UP
        </button>
      </div>
    </>
  );
};
