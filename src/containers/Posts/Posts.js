import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import {Redirect, Route} from 'react-router-dom';
import Post from '../../components/Post/Post';
import PostWithComments from '../PostWithComments/PostWithComments';
import './Posts.css';

const Posts = (props) => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
       getPosts();
   }, [])

   const getPosts = async () => {
       axios.get(`posts/`)
            .then(response => {
                const posts = [...response.data];
                setPosts(posts.splice(0, 10)
        )});
   }

    const showCommentsButtonHandler = async (postId) => {
        props.history.push(props.match.url + `/id=${postId}/category=comments`);
        //props.history.goBack();
    }
   

   const postsArray = [...posts];
   const postsComponents = postsArray.map((post) => {
       return (
            <Post
                key={post.id}
                postId={post.id}
                title={post.title}
                body={post.body}
                showCommentsButtonHandler={showCommentsButtonHandler}
                buttonLabel="Show Comments"
            />
       )
   })
    return (
        <div>
            <div className="Posts">
                {/* <Route path={`/posts/postId=:id/comments`} exact component={PostWithComments}/> */}
                <h3>All Posts</h3> 
                {postsComponents}                
            </div>
        </div>
    )
}

export default Posts;