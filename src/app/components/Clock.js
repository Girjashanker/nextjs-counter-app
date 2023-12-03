'use client';
import { useState, useEffect } from "react"

export default function Clock() {
    const [time, settimes] = useState(new Date())

    useEffect(()=>{
        setInterval(() => {
            settimes(new Date())
        }, 1000);
    })
    return(
        <div>
            {time.toLocaleTimeString()}
        </div>
    )
}