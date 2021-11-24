import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from "./Header";
import Cards from "./Cards";
import Swipe from "./Swipe";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

  fetch("https://google-news.p.rapidapi.com/v1/top_headlines?lang=en&country=US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "google-news.p.rapidapi.com",
      "x-rapidapi-key": "9b57b01967msh1a270266eefdbecp14b555jsn2b0cdec2c324"
    }
  })
  .then(response => response.json())
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });

function App() {
   

  return (
    <Router>
    {/* <Header /> */}
    <div className="App">
        <Routes>
          <Route path="/chats/:person"
              element={[<Header back='/chats'/>, <ChatScreen /> ]}></Route>
          <Route path='/chats'
            element={[<Header back="/"/>, <Chats />]}></Route>
          <Route path='/' element={[<Cards />,<Swipe/>, <Header />]}></Route>
        </Routes>
    </div>
    </Router>

  );
}

export default App;
