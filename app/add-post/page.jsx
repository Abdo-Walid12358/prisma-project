"use client";

import Link from "next/link";
import styles from "../page.module.css";
import { useState } from "react";

export default function AddPost() {
    const [titleValue, setTitleValue] = useState('');
    const [contentValue, setContentValue] = useState('');

    const addPost = async (e) => {
        e.preventDefault();

        try{
            var postData = {
                title: titleValue,
                content: contentValue
            };
            await fetch("/api/add-post", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(postData)
            });

            setTitleValue('');
            setContentValue('');
        }catch(err){
            alert(err);
        }
    }

    return (
        <main className={styles.main}>
            <h1>Add Post</h1>
            <Link href="/">Posts</Link>
            <form>
                <label>Title:</label><br/>
                <input value={titleValue} type="text" name="title" onChange={(e) => setTitleValue(e.target.value)} /><br/><br/>
                <label>Content:</label><br/>
                <textarea value={contentValue} name="content" rows="4" cols="50" onChange={(e) => setContentValue(e.target.value)}></textarea><br/><br/>
                <input type="submit" value="Submit" onClick={addPost} />
            </form>
        </main>
    );
}