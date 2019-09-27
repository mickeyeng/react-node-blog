import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomPage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import StyledPageWrapper from './styles/StyledPageWrapper';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <StyledPageWrapper>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/article/:name" component={ArticlePage} />
        </div>
      </StyledPageWrapper>
    </Router>
  );
}

export default App;
