// import Image from 'next/image'
'use client';
import { useState } from "react";
// import ggs from './components/counter'
// import counter from "@/components/counter";
import Counter from "./components/counter";
import ListDynamic from "./components/ListState";
export default function Home() {
  console.log("re rendering");

  const [count, setcount] = useState(0);

  const [label, setLabel] = useState("Hello World")

  const inc = () => {
    console.log("Inc");
    setcount(count + 1)
  }
  const dec = () => {
    console.log("Dec");
    setcount(count - 1)
  }
  const changeLabel = () => {
    setLabel("data")
  }

  return (
    <div>
      <button type={"button"} onClick={inc}>+</button>

      {count}

      <button type={"button"} onClick={dec}>-</button>

      <br></br>
      <br></br>
      <br></br>

      {label}

      <br></br><br></br><br></br>

      <button type={"button"} onClick={changeLabel}>Change Data</button>
      <br></br>
      <br></br>
      <br></br>

      <Counter />

      <ListDynamic/>

    </div>
  )
}
