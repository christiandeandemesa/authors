import React from 'react';
import {useHistory} from 'react-router-dom';

const EditButton = props => {
    const history = useHistory();
    const {id} = props;

    const editPage = () => {
        history.push('/edit/' + id);
    }

    return (
        <button onClick={editPage}>Edit</button>
    )
}

export default EditButton;