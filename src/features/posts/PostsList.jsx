import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectAllPosts, addPost} from './postsSlice';

export default function PostsList() {
    const dispatch = useDispatch();

    const newPost = {
        id: '3',
        title: 'Potatoes are healthy',
        content: 'I love eating potatoes!'
    };

    

    const renderedPosts = useSelector((state)=> selectAllPosts(state)).map((item)=> (
        <article key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content.substring(0, 100)}</p>
            <button onClick={()=> dispatch(addPost(newPost))}>New Post</button>
        </article>
    ));

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};