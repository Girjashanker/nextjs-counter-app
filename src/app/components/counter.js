'use client';

import { useState } from "react";

export default function counter()
{
    const [count , setcount]= useState(0);

    const inc = ()=>{
        console.log("Inc");
    }
    const dec =()=>{
        console.log("Dec");
    }
    return(
        <div>
            <button type={"button"} onClick={inc}>+</button>

            {count}

            <button type={"button"} onClick={dec}>-</button>
        </div>
    )
}