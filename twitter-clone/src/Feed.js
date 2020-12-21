import React, {useState} from 'react';
import TweetBox from "./TweetBox";
import Post from "./Post";
import './Feed.css';


function Feed() {
    const [posts, setPosts] =useState([]);
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post
                displayName="Seung"
                username="seungej"
                verified={true}
                text="This is working"
                avatar=" "
                image=" "
            />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed;
