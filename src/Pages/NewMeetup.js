import React from 'react';
import { useHistory } from 'react-router';
import NewMeetUpForm from '../Components/Layout/Meetups/NewMeetUpForm';
function NewMeetup(params) {
    const history = useHistory();
    const addMeetupHandler = (meetupData) => {
        fetch('https://react-get-started-7c139-default-rtdb.firebaseio.com/meetups.json',
            {
                method : 'POST',
                body: JSON.stringify(meetupData),
                headers : {
                    'Content-Type' : 'application/json'
                },

            }
        ).then(() => {
            history.replace('/');
        })
    }

    return(

        <div>
            <h1>NewMeetup</h1>
            <NewMeetUpForm onAddMeetUp={addMeetupHandler}/>
        </div>
    )
}

export default NewMeetup;