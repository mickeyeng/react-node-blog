import React from 'react';
import ArticleContent from './Article-content';
import StyledArticlesList from '../styles/StyledArticlesList';
import ArticlesList from '../components/ArticlesList';


const ArticlesPage = () => {
  return (
    <StyledArticlesList>
      <h1>Articles List</h1>

      <ArticlesList articles={ArticleContent} />
    </StyledArticlesList>
  )
}

export default ArticlesPage
