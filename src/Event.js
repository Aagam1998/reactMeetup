import React , {useState} from 'react';

 const Event = () => {

    let color = 'yellow'
    const [bg, setbg] = useState(color)
    const [btnName, setbtnName] = useState('Click Me')

    const bgChange = () => {
        const colorUpdate = '#8e44ad'
       
        setbg(colorUpdate);
        setbtnName('Nope 🤙')
    }

    const dbClick = () => {
        const colorUpdate = '#34495e'

        setbg(colorUpdate);
        setbtnName('Double Click 🚀')
    }
    return(
        <>
        <div style={{backgroundColor : bg}}>
            <button onClick={bgChange} onDoubleClick={dbClick}>
              {btnName}
            </button>
        </div>
        </>
    )
}


export default Event;