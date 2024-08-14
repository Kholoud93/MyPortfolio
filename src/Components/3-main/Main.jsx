
import { useState } from "react";
import "./main.css";
import { motion } from "framer-motion";
export default function Main() {
  const handleClick = (buttonCateogry)=>{
    setCurrentActive(buttonCateogry);
    const newArr = myProjects.filter((item)=>{
      return item.category === buttonCateogry;
    });
    setArr(newArr)
  
  }
  const myProjects=[
    {projectTitle:"E-commerce",category:"react", imgPath:"/public/pic/zz.jpg"},
    {projectTitle:"Portfolio",category:"css", imgPath:"/public/pic/6.jpg"},
    {projectTitle:"Todo App",category:"javascript", imgPath:"/public/pic/todo.png"},
    {projectTitle:"Quotes",category:"javascript", imgPath:"/public/pic/quotes.png"},
    {projectTitle:"Weather App",category:"javascript", imgPath:"/public/pic/weather app.jpeg"},
  ]
 const[currentActive,setCurrentActive]= useState("all")
 const[arr, setArr]= useState(myProjects)




  return (
 <main className="flex">
  <section className="left-section flex">
    <button className={currentActive === "all" ? "active": null} onClick={()=>{setCurrentActive("all"),
    setArr(myProjects)
    }}>All Projects</button>
    <button className={currentActive === "css" ? "active": null} onClick={()=>{handleClick("css")  }}>Html && Css</button>
    <button className={currentActive === "javascript" ? "active": null} onClick={()=>{handleClick("javascript") }}>Javascript</button>
    <button className={currentActive === "react" ? "active": null} onClick={()=>{handleClick("react")}}>React</button>


   
  </section>
  <section className="right-section flex">
{arr.map((item)=>{
  return(
    
  <motion.div
layout 
initial={{transform : "scale(0"}}
animate = {{transform: "scale(1)"}}
transform ={{type: "spring"}}

  
  className="card" key={item.imgPath}>
  <img src={item.imgPath} width={250} alt="" />
  <div style={{width:"250px"}}className="box">
    <h1 className="title">{item.projectTitle}</h1>
    <p className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos rem 
      suscipit cumque explicabo expedita minima pariatur hic fugit quidem impedit!</p>
    <div className="flex icons">
    <div className="flex" style={{gap:"10px"}}>
    <div className="icon-link"></div>
    <div className="icon-github"></div>
    </div>
      <a href="" className="link flex">more <span style={{alignSelf:"end"}} className="icon-arrow-right"></span></a>
    </div>
  </div>
</motion.div>
  )
})}

  


  
  </section>
 </main>
  );
}
