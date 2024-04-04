'use client'
import { useEffect, useState } from "react";
import ports from "../service/ports.mock.json";

export default function Card() {
    const [index, setIndex] = useState(0);
    
    const handleClick = (target: HTMLButtonElement) => {
        console.log(target.id)
        console.log(index);
        console.log(ports.length);
        if (target.id === "PREV") {
            setIndex(index < 1 ? ports.length - 1 : index - 1);
        } else {
            setIndex(index >= ports.length - 1 ? 0 : index + 1);
        }
    }
    

    return (
        <div className="border-2 w-96 h-96 flex flex-col items-center justify-center">
            <h1 className="text-8xl">
                {ports[index].port[0]}
            </h1>
            <p>
                {ports[index].description}
            </p>
            <div className="w-44 flex justify-between">
                <button 
                type="button"
                className="z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                id="PREV"
                onClick={(event) => handleClick(event.target as HTMLButtonElement)}>
                    PREV
                </button>
                <button 
                type="button"
                className="z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                id="NEXT"
                onClick={(event) => handleClick(event.target as HTMLButtonElement)}>
                    NEXT
                </button>
            </div>
        </div>
    )
}