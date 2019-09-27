import React from 'react';
import ArticleContent from './Article-content';
import StyledArticlesList from '../styles/StyledArticlesList';
import { Link } from 'react-router-dom';


const ArticlesList = () => {
  return (
    <StyledArticlesList>
      <h1>Articles List</h1>
      {ArticleContent.map((article, key) => {
        return (
          <div className="article-container">
            <Link key={key} to={`/article/${article.name}`}><h3>{article.title}</h3></Link>
            <p>{article.content[0].substring(0, 150)}...</p>
          </div>
        )
      })}
    </StyledArticlesList>
  )
}

export default ArticlesList
