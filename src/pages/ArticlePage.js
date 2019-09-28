import React from 'react';
import ArticleContent from './Article-content';
import ArticlesList from '../components/ArticlesList';
import StyledArticlePage from '../styles/StyledArticlePage'
import StyledArticlesList from '../styles/StyledArticlesList';
import NotFoundPage from './NotFoundPage';


const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  // will create an array of articles except the current article name
  const otherArticles = ArticleContent.filter((article) => article.name !== name);

  return (
    <StyledArticlePage>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => {
        return (
          <p key={key}>{paragraph}</p>
        )
      })}
      <h1>Recent Articles</h1>
      <StyledArticlesList>
        <ArticlesList articles={otherArticles} />
      </StyledArticlesList>
    </StyledArticlePage>
  )
}

export default ArticlePage;