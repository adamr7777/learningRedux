import React from 'react';
import {useSelector} from 'react-redux';

import {selectAllPosts} from './postsSlice';
import {selectAllUsers} from '../users/usersSlice';

export default function PostsList() {
    const allUsers = useSelector((state)=> selectAllUsers(state));
    console.log(allUsers);
    const renderedPosts = useSelector((state)=> selectAllPosts(state)).map((item)=> {
        const  author = allUsers.find((element)=> element.id === item.id)
        return (
            <article key={item.id}>
                <h5>{author.name}</h5>
                <h3>{item.title}</h3>
                <p>{item.content.substring(0, 100)}</p>
            </article>

        );
});

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};