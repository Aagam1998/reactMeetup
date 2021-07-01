import React from 'react'
import classes from './MeetupList.module.css';
import { MeetUpItems } from './MeetUpItems';

export const MeetUpList = (props) => {
    return (
        <ul className={classes.list}>
           {props.meetups.map((meetup) => {
              return(
                <MeetUpItems key={meetup.id}  
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address = {meetup.address}
                description = {meetup.description}
                />
              )
           })
           }
        </ul>
    )
}

