// import logo from './logo.svg';
import './App.css';
import Search from './Components/Search/search';
import CurrentWeather from './Components/CurrentWeather/currentWeather';
import {url,url2,key} from './API'
import {useState} from 'react'
import Forecast from './Components/forecast/forecast';

function App({body}) {


 
  const [currentWeather,setCurrentWeather]=useState(null)
  const [forecast,setForcast]=useState(null)

  const searchOutput=(search)=>{
    const [latitude,longitude] =search.value.split(' ');
    const currentWeatherFetch = fetch(
      `${url2}/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
    );
    const forecastFetch = fetch(
      `${url2}/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
    );

    Promise.all([currentWeatherFetch,forecastFetch])
      .then(async (Response)=>{
        const weatherResponse = await Response[0].json();
        const forecastResponse = await Response[1].json();

        setCurrentWeather({city:search.label,...weatherResponse})
        // change(currentWeather);
        setForcast({city:search.label,...forecastResponse})
      })
      .catch((error)=>{console.log(error)})
  }
  const change=(currentWeather)=>{
    body.style.backgroundImage=`url(background/${currentWeather.weather[0].icon}.jpg)`;
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundSize="100% 100%";
  }

  // console.log(currentWeather)
  // {forecast &&   console.log(forecast.list[0].weather[0].description)}
  return (
    <div className="App">
      <div className='searchBar'><Search searchOutput={searchOutput}/></div>
     {currentWeather && <CurrentWeather response={currentWeather} func={change}/>}
     {forecast && <Forecast response={forecast}/>}
    </div>
  );
}

export default App;
