import React from 'react';
import axios from 'axios';

const Delete = props => {
    const {id} = props;

    const onDelete = e => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <button onClick={onDelete}>Delete</button>
    )
}

export default Delete;