// import Image from 'next/image'
'use client';
import { useState } from "react";
// import ggs from './components/counter'
// import counter from "@/components/counter";
import counter from "./components/counter";
export default function Home() {
  console.log("re rendering");

  const [count , setcount]= useState(0);


  const inc = ()=>{
    console.log("Inc");
    setcount(count + 1)
}
const dec =()=>{
    console.log("Dec");
    setcount(count - 1)
}

  return (
      <div>
          <button type={"button"} onClick={inc}>+</button>

          {count}

          <button type={"button"} onClick={dec}>-</button>

          <counter/>
      </div>
  )
}
