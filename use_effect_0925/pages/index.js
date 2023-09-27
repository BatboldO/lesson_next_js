import React, {useState, useEffect} from "react";
import Card from "@/components/Card"

export default function Home() {
  const [blogs, setBlogs] = useState([]);
                                                // (statiin ner , statiin function )
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await  fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  return <main className ={'container mx-auto '}>
    <section>
     <h2>All blog post</h2>
     <div className= "grid grid-cols-3 gap-2 ">
       {blogs.map((blog, i) => (
      <Card blog={blog}/>
    ))}
    </div>
    </section>
  </main>
};
  
