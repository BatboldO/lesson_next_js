import React from "react";

const Navbar = () => {
    return (
    <div className="container">
               <div className="flex justify-between">
                 <a href="/">
                     <img className="mx-6" src="/Logo.svg" alt = "Logo" />
                     </a>
                     <div className="flex gap-12 text-gray-400">
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