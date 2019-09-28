import React from 'react';
import ArticleContent from './Article-content';
import ArticlesList from '../components/ArticlesList';


const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find((article) => article.name === name);

  if (!article) return <h1>Article does not exist</h1>;

  const otherArticles = ArticleContent.filter((article) => article.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      <ArticlesList articles={otherArticles} />
    </>
  )
}

export default ArticlePage;