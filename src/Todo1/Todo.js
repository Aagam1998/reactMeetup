import React , { useState} from 'react'
import { Model } from './Model'

export const Todo = (props) => {

    let var2 =  "1"
    const [state, setstate] = useState(var2);

    const deleteHandler = () => {
        let var1 = "hello"
       setstate(var1);
       console.log(var1);
    }

    return (
        <div>
            <div>
                {props.title}
            </div>
            <div>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}
