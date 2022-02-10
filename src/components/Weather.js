import React, { useEffect, useState } from "react";
//// import axios
import axios from 'axios'
/// import App.css
import '../App.css'



function Weather() {
  const [weatherJson, setWeatherJson] = useState({})
  const [icon, setIcon] = useState('')
  const [text, setText] = useState('')
  const [wind, setWind] = useState(0);
  const [nameOfCountry, setNameOfCountry] = useState('')
  const [precipMM , setPrecipMM] = useState(0)
  const [pressureMB , setPressureMB] = useState(0)
  const [temperatura , setTemperatura]=useState(0)
  const [time , setTime]= useState(0)
  const [TuesdayTimeStamp , setTuesdayTimeStamp] = useState(0)
  const [tuesday , setTuesday] = useState('')
  const [weaterThusdayImg ,setWeaterThusdayImg] =useState('')
  const [temperaturaTuesdat , setTemperaturaTuesdat] = useState(0)
  const [WednesdayTimeStamp , setWednesdayTimeStamp] = useState(0)
  const [Wednesday , setWednesday] = useState('')
  const [weaterWednesdayImg ,setWeaterWednesdayImg] =useState('')
  const [temperaturaWednesday , setTemperaturaWednesday] = useState(0)
  const [ThursdayTimeStamp , setThursdayTimeStamp] = useState(0)
  const [Thursday , setThursday] = useState('')
  const [weaterThursdayImg ,setWeaterThursdayImg] =useState('')
  const [temperaturaThursday , setTemperaturaThursday] = useState(0)
  const [cityValue , setCityValue]= useState('israel')
  
 
  useEffect(() => {
    // http://api.weatherapi.com/v1/current.json?key=e285fe92093c45409f8115404220802&q=israel&aqi=no
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=e285fe92093c45409f8115404220802&q=${cityValue}&days=7`)
      .then(response => {
        setWeatherJson(response.data)
        setIcon(response.data.current.condition.icon)
        setText(response.data.current.condition.text)
        setWind(response.data.current.wind_mph)
        setNameOfCountry(response.data.location.name)
        setPrecipMM(response.data.current.precip_mm)
        setPressureMB(response.data.current.pressure_mb)
        setTemperatura(response.data.current.temp_c)
        setTime(response.data.location.localtime)
        setTuesdayTimeStamp(response.data.forecast.forecastday[0].date_epoch)
        setWeaterThusdayImg(response.data.forecast.forecastday[0].day.condition.icon)
        setTemperaturaTuesdat(response.data.forecast.forecastday[0].day.mintemp_c)
        setWednesdayTimeStamp(response.data.forecast.forecastday[1].date_epoch)
        setWeaterWednesdayImg(response.data.forecast.forecastday[1].day.condition.icon)
        setTemperaturaWednesday(response.data.forecast.forecastday[1].day.mintemp_c)
        setThursdayTimeStamp(response.data.forecast.forecastday[2].date_epoch)
        setWeaterThursdayImg(response.data.forecast.forecastday[2].day.condition.icon)
        setTemperaturaThursday(response.data.forecast.forecastday[2].day.mintemp_c)
      }
      )
     getdayTuesday ()
     getdayWednesday ()
     getThursday()
  }, [cityValue])

/////////////// function
 const getdayTuesday = ()=>{
  var timestamp = TuesdayTimeStamp;
  var a = new Date(timestamp*1000);
  var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
  var dayOfWeek = days[a.getDay()]
  setTuesday(dayOfWeek) 
 }
/////////////// function
 const getdayWednesday = ()=>{
  var timestamp = WednesdayTimeStamp;
  var a = new Date(timestamp * 1000);
  var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
  var dayOfWeek = days[a.getDay()]
  setWednesday(dayOfWeek)
 }
/////////////// function
 const getThursday =()=>{
  var timestamp = ThursdayTimeStamp;
  var a = new Date(timestamp * 1000);
  var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
  var dayOfWeek = days[a.getDay()]
  setThursday(dayOfWeek)
 }
/////////////// function
 const showCity = (e)=>{
   if (e.key === 'Enter'){
     let value = e.target.value
     value.trim()
     value.toLowerCase()
    setCityValue(value)
    e.target.value = ''
   } 
  
 }
 
  return (
    <div className="sectionDiv">
    <h1 className="titleCountry">{nameOfCountry}</h1>
      <div className="mainWeather">
        <div className="SectionOneWeather">
          <img src={icon} alt="weatheramit" />
          <p className="text"> {text}</p>
        </div>

        <div className="sectionTwoWeather">
          <p>wind: <span>0.8367kmph</span></p>
          <p>precip: <span>{precipMM}mm</span></p>
          <p>pressure: <span>{pressureMB}</span></p>
          <p className="dataPlusTime">Date + time: <span >{time}</span></p>
          <h2 className="temperaturaFont">{temperatura} °c</h2>
        </div>
      </div>
      <div className="weatherDays">
        <div>
          <p>{tuesday}</p>
          <img src={weaterThusdayImg} alt="weater"/>
          <p>{temperaturaTuesdat} °c</p>
        </div>
        <div>
          <p>{Wednesday}</p>
          <img src={weaterWednesdayImg} alt="wedesday"/>
          <p>{temperaturaWednesday} °c</p>
        </div>
        <div>
          <p>{Thursday}</p>
          <img src={weaterThursdayImg} alt="thursday"/>
          <p>{temperaturaThursday} °c</p>
        </div>
        </div>
        <div className="inputDiv" >
          <input onKeyDown={showCity}  className="inputCity" placeholder=" your city and press Enter"/>
        </div>
    </div>
  )
}

export default Weather