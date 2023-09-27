import React, {useState, useEffect} from "react";


const Card = ( { blog }) => {
return (
<div className="border  rounded-lg flex flex-col p-2 bg-white  w-64 ">
          <img src={blog.cover_image ? blog.cover_image : "./default.avif"} className="h-40 w-48  border rounded-md"/>
          <div className="flex flex-col">
            <span className="text-cyan-500">{blog?.type_of}</span>
            <h2 className="text-sm">{blog.title}</h2>
            <div>
              <img src={blog.user.profile_image} className="h-10 w-10 border rounded-full"/>
              <p>{blog.user.name}</p>
            </div>
          </div>
        </div>
        );
};


export default Card;