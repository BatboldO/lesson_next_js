import React from "react";

const Footer = () => {
    return (
    <div className="container">
               <div className="flex justify-between bg-grey-300">
                 <a href="/">
                     <img src="/logo.svg" alt = " logo" />
                     </a>
                     <div className="flex gap-12">
                     <a href="/"></a>
                     <a href="/blog">Blog</a>
                     <a href="/contact">Contact</a>
                     </div>
                     <input type= "text" placeholder="Search:"/>
               </div>
           </div>
    );
};

export default Footer;