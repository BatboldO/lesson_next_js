import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
    <div className="container">
               <div className="flex justify-between  ml-96">
                 <a href="/">
                     <img src="/logo.png" alt = "Logo"  className=""/>
                     </a>
                     <div className="flex gap-8 text-[#3B3C4A]">
                     <a href="/">Home</a>
                     <a href="/blog">Blog</a>
                     <a href="/contact">Contact</a>
                     </div>
                     <input className="border rounded-md p-1" type= "text" placeholder="Search:" img src="/search.svg"/>
               </div>
           </div>
    );
};

export default Navbar;