import React, {useState} from 'react';
import Cancel from './Cancel';

const Form = props => {
    const {onSubmitHandler, initialName} = props;
    const [name, setName] = useState(initialName);

    return(
        <form onSubmit={e => {onSubmitHandler(e, {name})}}>
            <p>
                <label>Name:</label>
            </p>
            <p>
                <input type = 'text' onChange = {e => {setName(e.target.value)}} value = {name}/>
            </p>
            <Cancel />
            <input type = 'submit' value = 'Submit' />
        </form>

    )
}

export default Form;