import React from "react";
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
