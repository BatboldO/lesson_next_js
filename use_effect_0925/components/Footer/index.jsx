import React from "react";
import style from "@/components/Footer/style.module.css"

const Footer = () => {
    return (
    <div className="containerr">
               <div className="bg-[#E8E8EA] w-full h-96 ">
                
                <div className="py-16 px-16 flex flex-col">
                 
                 <div className="flex flex-row justify-center ">
                  <div className="flex flex-col mx-16">
                   <div>About</div>
                     <div className="text-sm flex-shrink:1; w-36 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                     <div>Email: info@jstemplate.net</div>
                     <div>Phone : 880 123 456 789</div>
                     </div>
               
                     <div className="flex gap-6 flex-col mx-16 w-32 gap-8">
                     <a href="/">Home</a>
                     <a href="/blog">Blog</a>
                     <a href="/contact">Contact</a>
                     </div>

                    <div>
                     <img src="/facebook.png"/>
                     <img src="/instagram.png"/>
                     <img src="/linkedin.png"/>
                     <img src="/twitter.png"/>
                    </div>
                    
                 </div>
                     

                <div className="flex gap-16 flex-row py-12 px-12 justify-center"> 
                <div>Logo ltd</div>
                <div className=""><span className="mx-8">terms</span><span className="mx-8">Privacy</span><span className="mx-8">cookie</span></div>
                </div>


               </div>
           </div>
        </div>
    );
};

export default Footer;