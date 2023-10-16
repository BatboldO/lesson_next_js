import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
    <div className="container">
               <div className="flex justify-between  ml-96">
                 <a href="/">
                     <img src="/imgs/logo.png" alt = "Logo"  className=""/>
                     </a>
                     <div className="flex gap-8 text-[#3B3C4A]">
                     <Link href="/">Home</Link>
                     <Link href="/blog">Blog</Link>
                     <Link href="/contact">Contact</Link>
                     </div>
                     <input className="border rounded-md p-1" type= "text" placeholder="Search:" img src="/imgs/search.png"/>
               </div>
           </div>
    );
};

export default Navbar;