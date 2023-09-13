import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';


import {addPost} from './postsSlice';
import {selectAllUsers} from '../users/usersSlice';

export default function AddPostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const onAuthorChanged = e => setUserId(e.target.value);

    const users = useSelector((state)=> selectAllUsers(state));

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const savePost = ()=> {
        if (!title || !content) return;

        dispatch(addPost(title, userId, content));

        setTitle('');
        setContent('');
    };

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={savePost}
                >Save Post</button>
            </form>
        </section>
    )
};



