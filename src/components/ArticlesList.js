import React from 'react';
import { Link } from 'react-router-dom';


const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article, key) => {
        return (
          <div className="article-container">
            <Link key={key} to={`/article/${article.name}`}><h3>{article.title}</h3></Link>
            <p>{article.content[0].substring(0, 150)}...</p>
          </div>
        )

      })}
    </>


  )
}

export default ArticlesList