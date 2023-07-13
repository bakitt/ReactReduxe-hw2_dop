import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../css/PostDetails.css'

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="oneuser">
      {post ? (
        <><div className="user">
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link className="buttonOnUser" to="/posts">Back</Link>
        </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PostDetails;
