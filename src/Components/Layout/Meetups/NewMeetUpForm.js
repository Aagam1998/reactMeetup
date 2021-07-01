import React, {useRef} from 'react'
import Card from '../../UI/Card';
import classes from './NewMeetupForm.module.css';

export default function NewMeetUpForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    const submitHandler = (e) => {
        e.preventDefault();

        const enterTitle = titleInputRef.current.value;
        const enterImage = imageInputRef.current.value;
        const enterAddress = addressInputRef.current.value;
        const enterDescription = descriptionInputRef.current.value;

        const meetupData = {
            title : enterTitle,
            image : enterImage,
            address : enterAddress,
            description :  enterDescription,
        }

        props.onAddMeetUp(meetupData);
       
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Tilte</label>
                    <input type='text' id='title' required ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image Url</label>
                    <input type='url' id='image' required ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' required ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' rows='5' required ref={descriptionInputRef} ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add MeetUp</button>
                </div>
            </form>
        </Card>
    )
}
