import React, {useState, useEffect} from "react";
import Card from "@/components/Card"



export default function Home() {
  const [blogs, setBlogs] = useState([]);
                                                // (statiin ner , statiin function )
  const [pages, setPages] = useState(9);

  const fetchData = async () => {
    const res = await  fetch(`https://dev.to/api/articles?per_page=${pages}`); 
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };

 const fetchMore =  () => {
  setPages(pages+3); //adds 3 articles//
 }

 useEffect(() => {
  fetchData();
}, [pages]); //To repeat//


  return <main className ={'container mx-auto '}>
    <section>
     <h2 className="font-bold my-12 mx-40">All blog posts</h2>
     <div className= "grid grid-cols-3 gap-3 mx-40 ">
       {blogs.map((blog, i) => (
      <Card blog={blog}/>
    ))}
    </div>
    <div className="flex justify-center mt-8 mb-24">
    <button  onClick={fetchMore}
         className="border rounded-md p-2 text-gray-500">Load More</button>
    </div>
    </section>
  </main>
};
