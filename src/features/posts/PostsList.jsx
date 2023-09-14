import React from 'react';
import {useSelector} from 'react-redux';


import {selectAllPosts} from './postsSlice';
import {selectAllUsers} from '../users/usersSlice';
import TimeAgo from './TimeAgo';

export default function PostsList() {
    const allUsers = useSelector((state)=> selectAllUsers(state));
    
    const renderedPosts = useSelector((state)=> selectAllPosts(state)).map((item)=> {
        const  author = allUsers.find((element)=> element.id === item.userId);
        return (
            <article key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content.substring(0, 100)}</p>
                <p className='postCredit'>{`by ${author.name}`}</p>
                <TimeAgo time={item.time}/>
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