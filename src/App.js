import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
// import ReactGA from 'react-ga';

// function initializeAnalytics() {
//   ReactGA.initialize('UA-foo');
//   ReactGA.pageview('/index');
// }

function App() {
  // initializeAnalytics()
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;