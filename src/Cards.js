// import { ModalManager } from "@mui/base";
// import { Card } from "@mui/material";
import React, {useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import axios from 'axios';
import "./Cards.css";
 
function Cards() {
    // const [data, setData] = useState({hits: []});
    // useEffect(() => {
    //   async function fetchData() {
    // const result = await axios('https://google-news.p.rapidapi.com/v1/top_headlines',
    //     );
    // setData(result.data);
    //     };
    // });
    const [people, setPeople] = useState([]);
    //const people = [ ];
    // setPeople([...people, james Bond, ur mom])
    useEffect(() =>{
        const unsubscribe = database.collection('people').onSnapshot(snapshot =>(
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));
            //copy into format above
        return () =>{
            //cleanup
            unsubscribe();
        }
    }, [people]);
    return (
        <div>
            <div className="card_container">
                {people.map(person => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                        <div style= {{backgroundImage: `url(${person.url})`}}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
           
        </div>
    )
}
 
export default Cards;
 

 

