import { createContext, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const speechControl = createContext()


const SpeechControl = (data) => {

  const [reportData,setData] = useState("")
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();

  
    return (
      <speechControl.Provider value={{"browserSpeechSupport":browserSupportsSpeechRecognition,"spokenmessage":transcript,"micStatus":listening,"startMic":SpeechRecognition.startListening,"stopMic":SpeechRecognition.stopListening,"resetTranscript":resetTranscript,"setReportData":setData,"reportData":reportData}}>
          {data.children}
      </speechControl.Provider>

        // {/* <p>Microphone: {listening ? 'on' : 'off'}</p>
        // <button onClick={SpeechRecognition.startListening}>Start</button>
        // <button onClick={SpeechRecognition.stopListening}>Stop</button>
        // <button onClick={resetTranscript}>Reset</button>
        // <p>{transcript}</p> */}
      
    );
  };
  export default SpeechControl;
  export {speechControl}