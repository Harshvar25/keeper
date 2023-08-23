import React from 'react';

// the below function is an example of functional component
// with passing props in it 
function Note(props) {

    return <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={() => {
            props.delete(props.id);
        }}>Delete</button>
    </div>
};

export default Note;