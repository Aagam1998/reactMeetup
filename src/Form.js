import React , {useState} from 'react';
import './from.css';
const Form = () => {
    
    const [fullname, setName] = useState({
        fname : '',
        lname : '',
        email : '',
        number : '',
    });
  
    const inputEvent = (event) => {
        const {name , value} = event.target;

        setName( (preVal) => {
            return{
                ...preVal,
                [name] : value,
            }
        });
    }

    return(
        <>
          <form onSubmit={onsubmit}>
            <div>
              
                <h1>Hello {fullname.fname} {fullname.lname}</h1>
                <p>{fullname.email}</p>
                <p>{fullname.number}</p>
                <input 
                    type='text'
                    name='fname'
                    onChange = {inputEvent}
                    value={fullname.fname}
                />
                 <input 
                    type='text'
                    name='lname'
                    onChange = {inputEvent}
                    value={fullname.lname}
                />

                <input 
                    type='text'
                    name='email'
                    onChange = {inputEvent}
                    value={fullname.email}
                />
                <input 
                    type='number'
                    name='number'
                    onChange = {inputEvent}
                    value={fullname.number}
                />
                <button type='submit'>Add Content 👍</button>
               
            </div>
            </form>
        </>
    )
}

export default Form;