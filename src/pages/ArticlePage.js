import React from 'react';
import ArticleContent from './Article-content';


const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const articles = ArticleContent.find((article) => article.name === name);

  if (!articles) return <h1>Article does not exist</h1>;

  return (
    <>
      <h1>{name}</h1>
      {articles.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
    </>
  )
}

export default ArticlePage;