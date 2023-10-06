import React, {useState, useEffect} from "react"; 
import Link from "next/link";

const Card = ( { blog }) => {
return (<Link href = {"/blog/"+blog.id}>
<div className="rounded-xl border border-[#E8E8EA] flex flex-col p-4 justify-center w-[392px] gap-3 my-10">
          <img src={blog.cover_image ? blog.cover_image : "./default.avif"} className="h-[240px] w-[360px] rounded-xl"/>
          <div className="flex flex-col items-start gap-4 self-stretch">
            <span className="flex py-1 px-[10px] justify-center items-center gap-1 border-6 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md">{blog?.type_of}</span>
            <h2 className="text-2xl self-stretch truncate">{blog.title}</h2>
            <div>
              <img src={blog.user.profile_image} className="h-10 w-10 border rounded-full"/>
              <p>{blog.user.name}</p>
              
            </div>
          </div>
        </div>
        </Link>
        );
};


export default Card;