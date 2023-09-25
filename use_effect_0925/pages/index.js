import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState, useEffect} from "react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [articles, setArticles] = useState([
    {title: "impact of tech", user:"naraa", color:"blue"},
    {title: "change of tech", user:"saraa",  color:"red"}
  ])
  // setArticles
  // )
  // return (
  //   <main>
  //    Welcome
  //   <div>
  //   {articles.map(() => (
  //     <div> clas
  //     <div>hello</div>
  //     </div>
  //     </main>
  // );}  
}
