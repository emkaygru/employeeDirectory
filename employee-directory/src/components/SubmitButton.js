import React from 'react';

const SubmitButton = (props) =>{
    return (
        <div className="container">
            <button className="btn btn-primary mt-5 mb-5" onClick={props.handleSubmit}>First Name Sort</button>
        </div>
    )
}

export default SubmitButton;