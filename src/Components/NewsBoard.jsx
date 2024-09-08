import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles)
            })
    }, [category])
  return (
    <div>
        <h2 className="text-center bg-danger fs-1 fw-bold p-2">Latest <span className="text-light fs-1">News</span></h2>
        <div className="row g-3 p-5">
            {articles.map((news, index) => {
                return <NewsItem key={index} title = {news.title} description = {news.description} src = {news.urlToImage} url = {news.url} />
            })}
        </div>
    </div>
  )
}
NewsBoard.propTypes = {
  category: PropTypes.string.isRequired
};

export default NewsBoard