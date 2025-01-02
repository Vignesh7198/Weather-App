import Header from "./component/Header";
import WeatherLogo from "./component/WeatherLogo";
import WeatherReport from "./component/WeatherReport";
import WeatherRequest from "./component/WeatherRequest";
import SpeechControl from "./context/SpeechControl";


function App() {

  return (
   <div>
    <SpeechControl>
        <WeatherLogo></WeatherLogo>
        <Header></Header>
        <WeatherRequest/>
        <WeatherReport></WeatherReport>
    </SpeechControl>

   </div>
  );
}

export default App;
