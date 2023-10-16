import React, {useState, useEffect} from "react";
import Card from "@/components/Card"
// import BlogDetail from "./blog/[id]";


export default function Home({ blogs }) {
  const [pages, setPages] = useState(3);
  console.log("Blogs", blogs);

  return <main className ={'container mx-auto '}>
    <section>
     <h2 className="font-bold my-12 mx-40">All blog posts</h2>
     <div className= "grid grid-cols-3 gap-3 mx-40">
       {blogs.map((blog, i) => (
      <Card blog={blog}/>
    ))}
    </div>
    </section>
  </main>
};
  
export async function getStaticProps() {
  const res = await fetch(`https://dev.to/api/articles?per_page=9`);
  const blogs = await res.json();
  console.log("RES", blogs);

  return {
    props: {
      blogs,
    },
  };
}
