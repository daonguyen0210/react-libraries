import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect( ()=>{
        // the axios return an promise
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then( /* res- response */ res =>{
                console.log(res);
                // the problems is when the setPosts is called, the render method is call again and rendering is higher property.
                setPost( res.data);
            })
            .catch(err /* err-error */ =>{
                console.log(err);
            })
    }, [idFromButtonClick]);

    let handleClickButton = () =>{
        setIdFromButtonClick( id);
    };

    return (
        <div>
            <input type="text" value={id} onChange={ (e)=> setId(e.target.value)}/>
            <button type="button" onClick={handleClickButton}>Fetch Post</button>
            <div>
               {post.title}
            </div>
        </div>
    )
}

export default DataFetching
