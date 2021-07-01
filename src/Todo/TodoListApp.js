import React from 'react';
import './style.css';


export const TodoListApp = () => {
    return (

        <div className='main-div'>
            
            <div className='card'>
                <br/>
                <h1>Todo List App</h1>
                <div className='child-div'>
                    <input type='text' placeholder="Add Some Text" />
                    <button>⏬</button>
                </div>
            </div>
        </div>
    )
}
