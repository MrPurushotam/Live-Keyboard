"use client"
import { useEffect, useState } from "react";
import Key from "./Key";

function Keyboard() {
    let keys={row1:['q','w','e','r','t','y','u','i','o','p'],row2:['a','s','d','f','g','h','j','k','l'],row3:['z','x','c','v','b','n','m'],row4:[' ']}
    const flattenKeys = Object.values(keys).flat();
    const [keypressed,setKeypressed]=useState(null);
    useEffect(()=>{
        const handleKeyDown=(e)=>{
            const key=e.key.toLowerCase();
            if(flattenKeys.includes(key)){
                handleKeypress(key)
            }
        }
        window.addEventListener('keydown',handleKeyDown)
        return ()=>{
            window.removeEventListener('keydown',handleKeyDown)
        }
    },)
    const handleKeypress= (key)=>{
        setKeypressed(key);
        setTimeout(()=>setKeypressed(null),200)
    }
    return (
        <div className="space-y-3 border-2 border-black p-3">
            <div className="1 w-full flex justify-center">
                {
                    keys.row1.map((k,i)=>
                        <Key currentVal={keypressed} keyVal={k} key={i}/>
                    )
                }
            </div>
            <div className="2 w-full flex justify-center">
                {
                    keys.row2.map((k,i)=>
                        <Key currentVal={keypressed} keyVal={k} key={i}/>
                    )
                    }
            </div>
            <div className="3 w-full flex justify-center">
                {
                    keys.row3.map((k,i)=>
                        <Key currentVal={keypressed} keyVal={k} key={i}/>
                    )
                }
            </div>
            <div className="3 w-full flex justify-center">
                {
                    keys.row4.map((k,i)=>
                        <Key currentVal={keypressed} keyVal={k} key={i} className={"w-full"} OnlyValue={"- space -"}/>
                    )
                }
            </div>
        </div>
    );
}

export default Keyboard ;