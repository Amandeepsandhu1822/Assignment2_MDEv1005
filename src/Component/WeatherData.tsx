import axios from "axios";
import React, { ReactPropTypes, useEffect, useRef, useState } from "react";

interface LatLong {
    lat: String;
    long: String;
}

interface ApiData {
    "coord": {
        "lon": Number,
        "lat": Number
    };
    "weather": [
        {
            "id": Number,
            "main": String,
            "description": String;
            "icon": String
        }
    ];
    "base": String;
    "main": {
        "temp": Number,
        "feels_like": Number,
        "temp_min": Number,
        "temp_max": Number,
        "pressure": Number,
        "humidity": Number,
        "sea_level": Number,
        "grnd_level": Number,
    };
    "visibility": Number;
    "wind": {
        "speed": Number,
        "deg": Number,
        "gust": Number,
    };
    "rain": {
        "1h": Number
    };
    "clouds": {
        "all": Number
    };
    "dt": Number;
    "sys": {
        "type": Number,
        "id": Number,
        "country": String,
        "sunrise": Number,
        "sunset": Number,
    };
    "timezone": Number;
    "id": Number;
    "name": String;
    "cod": Number;
}

const WeatherData = ({ lat, long, }: LatLong) => {
    const count = useRef(0);

    let [data, setData] = useState({})

    useEffect(() => {
        count.current = count.current + 1;
    }, [data])

    let ApiLatLongURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9ab020b37321dbf0410b0e84f91a14de`


    if(lat != "N?A" && long != "N/A"){

    let newData = data as ApiData
    if (count.current - 1 <= 1) {
        
        axios.get(ApiLatLongURL).then(data => {
            setData(data.data)
        })
    }
    

    if (newData.weather) {
        // TODO : Design the response
        return <>
            <div className=" content-center text-center">
                <div className="text-lg">Weather: <span>{newData.weather[0].main}</span></div>
                <div className="text-lg">Weather Description: <span>{newData.weather[0].description}</span></div>
                <div className="text-lg">Temperature: <span>{(+newData.main.temp)}</span></div>
                <div className="text-lg">Feels Like: <span>{(+newData.main.feels_like)}</span></div>
                <div className="text-lg">Humidity: <span>{(+newData.main.humidity)}</span></div>
                <div className="text-lg">visibility: <span>{(+newData.visibility)}</span></div>




            </div>
        </>
    }
}

    return <></>


};

export default WeatherData;
