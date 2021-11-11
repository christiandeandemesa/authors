import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditButton from '../components/EditButton';
import Delete from '../components/Delete';

const Index = props => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [authors]); // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={'/new'}>Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                {authors.map((author, idx) => {
                    return (
                        <tbody key={idx}>
                            <tr>
                                <td>{author.name}</td>
                                <td><EditButton id={author._id} /><Delete id={author._id} /></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}

export default Index;