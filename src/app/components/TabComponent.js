'use client';
import { useState } from "react";
// import "./css//Tab.css";
import "./Tab.css"

export default function TabComponent({headers, children}){
    const [activeTab, setActiveTab] = useState(0)
    const changeHandler = (index)=>{
        setActiveTab(index)
    }
    return (
        <div>
            {
                headers.map((titel, index)=> newFunction(index, changeHandler, titel) )
            }

           <div> {children[activeTab]} </div>
        </div>
    )
}

function newFunction(index, changeHandler, titel) {
    return <div className={"tab-header"} key={index} onClick={(event) => changeHandler(index)}>{titel}</div>;
}
