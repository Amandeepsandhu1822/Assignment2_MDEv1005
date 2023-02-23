import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import WeatherData from './WeatherData';


const Weather = () => {
    const [latLong, setLatLong] = useState({lat:"N/A", long : "N/A"})


    useEffect(() => {}, [latLong ]) 

    


    const GetCurrentLocationWeather =  () => {
        
        navigator.geolocation.getCurrentPosition(postition => {
            setLatLong({lat: postition.coords.latitude.toString(), long: postition.coords.longitude.toString()})
            
        })
        
    }
    

    return <section className='container'>
        <div className="d-flex">
            <div className="mb-6 mt-4">
                <button onClick={GetCurrentLocationWeather}
                className='btn btn-lg btn-primary'>Get Current Location Weather Report</button>
            </div>
        
        </div>
        
      

        <WeatherData lat={latLong.lat} long={latLong.long}  />
    </section>
}


export default Weather