import React from "react";

const Navbar = () => {
    return (
    <div className="container">
               <div className="flex justify-between">
                 <a href="/">
                     <img src="/logo.svg" alt = " logo" />
                     </a>
                     <div className="flex gap-12">
                     <a href="/">Home</a>
                     <a href="/blog">Blog</a>
                     <a href="/contact">Contact</a>
                     </div>
                     <input type= "text" placeholder="Search:"/>
               </div>
           </div>
    );
};

export default Navbar;