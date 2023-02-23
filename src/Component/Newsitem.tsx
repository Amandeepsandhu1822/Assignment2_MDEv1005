import React from "react"
import { NavLink } from "react-router-dom"
// import "./newsItem.css"

interface Article {
    title : String,
    description : String,
    url : String,
    urlToImage : String|any
}
const NewsItem = ({ title, description, url, urlToImage } : Article) => {

    return (
        <div className="news-app">
            <div className="news-item"></div>
            <img className="news-img" src={urlToImage}  />
            <h3><a href={url.toString()}> {title} </a></h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem