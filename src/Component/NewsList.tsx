import axios from 'axios';
import { count } from 'console';
import React, { useState, useEffect } from 'react';
import NewsItem from './Newsitem';

interface ArrticlesData {
    
        "source": {
            "id": null | Number|String,
            "name": String
        };
        "author": String;
        "title": String;
        "description": String;
        "url": String;
        "urlToImage": String;
        "publishedAt": String;
        "content": String;

}


const NewsList = () => {
    const [articles, setArticles] = useState<ArrticlesData[]>([])
    const [articleCount, setArticleCount] = useState(0)


    const getArticles = async () => {


        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5ac687e7b1c741168831774a62ce3958').then(data => {
            console.log(data.data)
            setArticles(data.data.articles)
        })
        // console.log(response.data.articles)
        // setArticles(response.data.articles)
        // console.log(articles)
    }
    
    useEffect(() => {
        
        
    }, [articles])

    return (
        <div>
            <div className='d-flex text-center'>
                <button className='btn btn-lg- btn-primary' onClick={() => getArticles()}>Get Latest News</button>
            </div>
           
            {articles.map(article => {
                let art = article as ArrticlesData
                setArticleCount(articleCount+1)

                return (
                    <NewsItem
                        key={articleCount+1}
                        title={art.title}
                        description={art.description}
                        url={art.url}
                        urlToImage={art.urlToImage} 
                        />
                )
            })}
        </div>
    )

}
export default NewsList