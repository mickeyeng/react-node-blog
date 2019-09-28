import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomPage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import StyledPageWrapper from './styles/StyledPageWrapper';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <StyledPageWrapper>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </StyledPageWrapper>
    </Router>
  );
}

export default App;
