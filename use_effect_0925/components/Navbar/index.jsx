import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
    <div className="container">
               <div className="flex justify-between p-10 ">
                 <a href="/">
                     <img src="/logo.png" alt = "Logo"  className="h-[36px] w-[158px]"/>
                     </a>
                     <div className="flex gap-12 text-[#3B3C4A]">
                     <a href="/">Home</a>
                     <a href="/blog">Blog</a>
                     <a href="/contact">Contact</a>
                     </div>
                     <input type= "text" placeholder="Search:" img src="/search.svg"/>
               </div>
           </div>
    );
};

export default Navbar;