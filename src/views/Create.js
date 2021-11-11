import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';

const Create = props => {
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', data)
            .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
        history.push('/');
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={'/'}>Home</Link>
            <p>Add a new author:</p>
            {errors.map((err, idx) => <p key={idx}>{err}</p>)}
            <Form 
                onSubmitHandler={onSubmitHandler}
                initialName=''
            />
        </div>
    )

}

export default Create;