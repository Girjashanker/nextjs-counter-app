'use client';
// import "./css//Tab.css";
import "./Tab.css"

export default function TabComponent({headers}){
    return (
        <div>
            {
                headers.map((titel, index)=> <div className={"tab-header"} key={index}>{titel}</div> )
            }
        </div>
    )
}