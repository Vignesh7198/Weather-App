import { useContext, useEffect, useState } from "react";
import { speechControl } from "../context/SpeechControl";
import axios from "axios";
export default function WeatherRequest()
{
    const [message,setMessage] = useState("")
    const {browserSpeechSupport,spokenmessage,micStatus,startMic,stopMic,resetTranscript,setReportData,reportData} = useContext(speechControl)
    
    useEffect(() => {
         setMessage(spokenmessage); 
        }, [spokenmessage]);

    function StartMic()
    {
        resetTranscript();

        startMic();
        
    }

    function editInput(event){

        if(event.target.value.length<1){
            resetTranscript();
        }
        setMessage(event.target.value)
    }
    function axiosRequest()
    {
      const data =  axios(`https://api.openweathermap.org/data/2.5/weather?q=${message}&appid=34c6592e48a9c4af0ccf41bd22c64dde`)
      
      data.then((message)=>{
        setReportData({status:"Resolved",data:message.data})
        console.log(message.data)
      }).catch((message)=>
    {
        setReportData({status:"Rejected",data:"City Doesn't Exist"})
    })
    }

   
    
    return(
        <div className="flex flex-col items-center gap-5 p-10">
            <input className="border border-black p-3 rounded-2xl" value={message} onChange={editInput} placeholder="Enter the City name..">
            </input>
            {browserSpeechSupport?
            <div className="">
            <button className={`ml-4 w-20 h-20 rounded-full block ${micStatus?"bg-red-500 shadow-2xl":" shadow shadow-slate-800"}`} onClick={StartMic}>{micStatus?"🟠":"🎤"}</button>
            <p className="mb-7 font-medium text-center relative top-5">{micStatus?"Listening..":"Use Voice Input"}</p>
            </div>
:""}
            <button className="border border-black motion-safe:animate-bounce shadow-md shadow-orange-500 bg-orange-500 p-3 rounded-full" onClick={axiosRequest}>Search</button>
        </div>
    )
}