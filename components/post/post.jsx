"use client";
import './post.css';

export default function Post({PostId, username, title, content}) {
    const deletePost = async () => {
        var postData = {
            id: PostId
        };
        await fetch("/api/delete-post", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postData)
        });
    }

    return (
        <div className='post'>
            <h3>{username}</h3>
            <h2>{title}</h2>
            <p>{content}</p>
            <span>2015</span>
            <button onClick={deletePost}>Delete Post</button>
        </div>
    )
}