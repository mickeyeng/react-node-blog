import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomPage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticlesList} />
        <Route path="/article" component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
