import React , {useState} from 'react'


    
   


export default function Couter() {


    let time = new Date().toLocaleTimeString();

    const [count, setcount] = useState(time);

    let TimeUpdate = () =>{
        let updateTime = new Date().toLocaleTimeString();
        setcount(updateTime);
    }

    setInterval(TimeUpdate,1000);

    return (
        <div className="slot_inner">
            <h1>{count}</h1>
            <button onClick={TimeUpdate}>Counter</button>
          
            {/* <button onClick={DecNum}>Decriment Counter</button> */}
        </div>
    )
}
