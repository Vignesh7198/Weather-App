import Header from "./component/Header";
import WeatherReport from "./component/WeatherReport";
import WeatherRequest from "./component/WeatherRequest";
import SpeechControl from "./context/SpeechControl";


function App() {

  return (
   <div>
    <SpeechControl>
        <Header></Header>
        <WeatherRequest/>
        <WeatherReport></WeatherReport>
    </SpeechControl>

   </div>
  );
}

export default App;
