import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';

const Edit = props => {
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false); // Why do we have this loaded?
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err));
    }, [id]);

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, data)
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
            <p>Edit this author:</p>
            {errors.map((err, idx) => <p key={idx}>{err}</p>)}
            {loaded &&
                <Form 
                    onSubmitHandler={onSubmitHandler}
                    initialName={author.name}
                />
            }
        </div>
    )
}

export default Edit;