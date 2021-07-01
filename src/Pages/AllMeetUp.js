
import { useState , useEffect} from 'react';
import React from 'react'
import { MeetUpList } from '../Components/Layout/Meetups/MeetUpList';



export default function AllMeetUp() {
  const [loding, setLoding] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setLoding(true);
    fetch(
      'https://react-get-started-7c139-default-rtdb.firebaseio.com/meetups.json'
  ).then(response => {
    return response.json();
  }).then(data => {
    const meetups = [];

    for (const key in data) {
      
        const meetup = {
          id : key,
          ...data[key],
        };
        
        meetups.push(meetup);
    }

    setLoding(false);
    setloadedMeetups(meetups);
  })
  },[])

  
      
  if(loding){
    return(
      <section>
        <p>Loading...</p>
      </section>
    )
  }
    return (
        <section>
            <h1>All MeetUp</h1>
            <MeetUpList meetups={loadedMeetups} />
           
        </section>
    )
}
