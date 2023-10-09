import React from "react";
import Card from "@/components/Card"


export default function Home() {
  const [blogs] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);
    export async function GetStaticProps () {
    const res = await  fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    console.log(data);
    StaticBlog(data);
  };
  return <main className ={'container mx-auto '}>
    <section>
     <h2 className="font-bold my-12 mx-40">All blog posts</h2>
     <div className= "grid grid-cols-3 gap-3 mx-40 ">
       {blogs.map((blog, i) => (
      <Card blog={blog}/>
    ))}
    </div>
    </section>
  </main>
};
  
