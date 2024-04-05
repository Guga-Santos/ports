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
            ? <p className="flex items-center justify-center w-96 h-8 flex items-center">Has an alternative port?</p>  
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
                    <div>
                        <button 
                        type="button"
                        onClick={() => setVisible(!visible)}
                        > 
                            {visible ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 select-none"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                            ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 select-none"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            )}
                         </button>
                    </div>
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
                    className="z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-36 mx-2">
                    RANDOM
                    </button>
                </div>
            </div>
        </div>
    )
}