import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';


const Posts = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onBackClick = () => {
    // navigate(-1);
    navigate(location.state?.from || "/")
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
}

export default Posts;
