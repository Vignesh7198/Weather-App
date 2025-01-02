import { useContext } from "react";
import { speechControl } from "../context/SpeechControl";

export default function WeatherReport() {
    const { setReportData, reportData } = useContext(speechControl)
    return (
        <div className="text-center bg-cyan-400">
            {
               reportData==""?"":(reportData.status=="Resolved"?"":<p className="bg-red-500 text-white font-medium">City Doesn't exist</p>)
            }
            <div className="p-10">
            <p className="font-bold text-2xl mt-2"><span className="text-white bg-lime-400 p-1 rounded-md">Location:</span> {reportData != "" ? reportData.status!="Resolved" ? "--" : reportData.data.name : "--"}</p><br />    
            <p className="font-bold text-2xl mt-2"><span className="text-white bg-lime-400 p-1 rounded-md">Temperature:</span> {reportData != "" ? reportData.status!="Resolved" ? "--" : Math.round(reportData.data.main.temp - 273.15, 2) : "--"} °C</p><br />
            <p className="font-bold text-2xl mt-2"><span className="text-white bg-lime-400 p-1 rounded-md">Climate:</span> {reportData != "" ? reportData.status!="Resolved" ? "--" : reportData.data.weather[0].main : "--"}</p>
            </div>
        </div>
    )

}