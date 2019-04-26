import React, { Component } from 'react';
import './App.css';
import Header from './components/head';
import Slider from './components/like';
import Addition from './components/addition';
import Footer from './components/footer';
import Addittion2 from './components/addition2';
import Addition3 from './components/addition3';
import Addition4 from './components/addition4';
import Addition5 from './components/addition5';
import Addition6 from './components/addition6';
import Addition7 from './components/addition7';
import Addition8 from './components/addition8';
class App extends Component {

  render() {
    return (
      <div className="App">
          <Header />
          <Slider />
          <Addition />
          <Addittion2 />
          <Addition3 />
          <Addition4 />
          <Addition5 />
          <Addition6 />
          <Addition7 />
        <Addition8 />
          <Footer />
      </div>
      
    );
  }
}

export default App;
