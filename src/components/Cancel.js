import React from 'react';
import {useHistory} from 'react-router-dom';

const Cancel = props => {
    const history = useHistory();

    const onCancel = e => {
        history.push('/');
    }

    return (
        <button onClick={onCancel}>Cancel</button>
    )
}

export default Cancel;