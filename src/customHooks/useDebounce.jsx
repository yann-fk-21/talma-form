import { useEffect } from "react"
import { useState } from "react"
let timeOutId;
export const useDebounce = (value,delay)=>{
    const [debounceValue,setDebounceValue] = useState(value)
    const [isWaiting,setIsWaiting] = useState(false)
    useEffect(()=>{
        console.log("useEffect")

        if(timeOutId){
            setIsWaiting(true)
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(()=>{
            console.log("debounce",value)
            setDebounceValue(value)
            setIsWaiting(false)
        },delay)
        return ()=>{
            clearTimeout(timeOutId)
        }
    },[value,delay])
    return [debounceValue,isWaiting]
}