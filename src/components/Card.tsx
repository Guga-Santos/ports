'use client'
import { useEffect, useState } from "react";
import ports from "../service/ports.mock.json";

export default function Card() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    
    const handleClick = (target: HTMLButtonElement) => {
        console.log(target.id)
        console.log(index);
        console.log(ports.length);
        if (target.id === "PREV") {
            setIndex(index < 1 ? ports.length - 1 : index - 1);
            setVisible(false);
        } else {
            setIndex(index >= ports.length - 1 ? 0 : index + 1);
            setVisible(false);
        }
    }

    const handleRandom = () => {
        setIndex(Math.floor(Math.random() * ports.length));
        setVisible(false);
    }
    

    return (
        <div className="border-2 w-96 h-112 flex flex-col items-center justify-center">
            <h1 className="flex items-center justify-center text-8xl border-2 w-96 h-44 ">
                {ports[index].port[0]}
            </h1>
            <p className="flex items-center justify-center w-96 h-8 flex items-center border-2 font-bold"> {visible ? ports[index].protocol : "What protocol is in use?"}</p>
            { !visible 
            ? <p className="w-96 h-8 text-center">Has an alternative port?</p>  
            : 
            <div className={`w-44 h-8 flex ${!ports[index].port[2] ? "justify-center" : "justify-between"} items-center px-12`}>
            <h2>{ports[index].port[1] ? ports[index].port[1] : "No!"}</h2>
            <h2>{ports[index].port[2] && "--"}</h2>
            <h2>{ports[index].port[2] && ports[index].port[2]}</h2>
            </div>
            }
            <p className="flex items-center justify-center w-96 h-8 flex items-center border-2 font-bold">
                {visible ? ports[index].service : "What service is in use?"}
            </p>
            <p className="flex items-center justify-center w-96 h-8 flex items-center border-2">
                {visible ? ports[index].description : "What is the description of the service?"}
            </p>
            <p className="flex items-center justify-center w-80 h-20 flex items-center text-center">
                {visible ? ports[index].use : "What is the use of the service?"}
            </p>
            <div className="w-96 h-28 border-2 flex flex-col justify-between items-center">
                <div className="w-96 h-16 border-2 flex justify-between items-center">
                    <button 
                    type="button"
                    className="z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded"
                    id="PREV"
                    onClick={(event) => handleClick(event.target as HTMLButtonElement)}>
                        PREV
                    </button>
                    <button 
                    type="button"
                    onClick={() => setVisible(true)}
                    > View </button>
                    <button 
                    type="button"
                    className="z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded"
                    id="NEXT"
                    onClick={(event) => handleClick(event.target as HTMLButtonElement)}>
                        NEXT
                    </button>
                </div>
                <div className="h-12 flex items-center">
                    <button 
                    type="button"
                    onClick={() => handleRandom()}
                    className="z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-36 mx-2 rounded">
                    RANDOM
                    </button>
                </div>
            </div>
        </div>
    )
}