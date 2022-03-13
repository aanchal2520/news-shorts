import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import NewsItem from './NewsItem';


const News = (props) => {
    const [newsArticles, setNewsArticles] = useState([]);
    const { category, setProgress } = props;

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`

    const updateNews = () => {
        setProgress(10);
        fetch(url)
            .then((response) => {
                setProgress(30);
                return response.json()
            })
            .then((data) => {
                setProgress(70);
                setNewsArticles(data.articles);
                setProgress(100);
            })
    }

    useEffect(() => {
        updateNews();
    }, [])

    useEffect(() => {
        updateNews();
    }, [url])

    return (
        <Box>
            {newsArticles.map((article) => {
                return <NewsItem key={article.publishedAt} title={article.title} description={article.description} url={article.url} image={article.urlToImage} />
            })}
            <NewsItem />
        </Box>
    );
}

export default News;