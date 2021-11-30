// import { ModalManager } from "@mui/base";
// import { Card } from "@mui/material";
import React, {useState} from "react";
import TinderCard from "react-tinder-card";
// import database from "./firebase";
import axios from 'axios';
import "./Cards.css";
 
function Cards() {
    const [data, setData] = useState([]);
    console.log(`Before setData: ${typeof(data)} | ${data} |`);

    async function fetchData() {
        console.log('test');
        const options = {
          method: 'GET',
          url: 'https://bing-news-search1.p.rapidapi.com/news',
          params: {safeSearch: 'Off', textFormat: 'Raw'},
          headers: {
            'x-bingapis-sdk': 'true',
            'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
            'x-rapidapi-key': '9b57b01967msh1a270266eefdbecp14b555jsn2b0cdec2c324'
          }
        };
        let response = await axios.request(options);
        console.log(response.data.value); 
        await setData(response.data.value);
        console.log(`After setData: ${typeof(data)} | ${data} |`);
    }; 
    // const [people, setPeople] = useState([]);
    //const people = [ ];
    // setPeople([...people, james Bond, ur mom])
    // useEffect(() =>{
    //     const unsubscribe = database.collection('people').onSnapshot(snapshot =>(
    //         setPeople(snapshot.docs.map(doc => doc.data()))
    //     ));
    //         //copy into format above
    //     return () =>{
    //         //cleanup
    //         unsubscribe();
    //     }
    // }, [people]);
    return (
        <div>
            <div className="card_container">
                <button onClick = {fetchData}> test </button>
                {/* <u1>{data.hits.map(item => (
                    <TinderCard className="swipe">
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    </TinderCard>
                   
                ))}
                </u1> */}
                {/* {people.map(person => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                        <div style= {{backgroundImage: `url(${person.url})`}}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))} */}
            </div>
           
        </div>
    )
}
 
export default Cards;
 
 
 
 
 
