import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
     const friend = useLoaderData();
     // console.log(friend);

     const navigate = useNavigate();

     const handleGoBack = () => {
          navigate(-1);
     }

     return (
          <div>
               <h2>All about this friend: {friend.id}</h2>
               <h3>Name: {friend.name}</h3>
               <p>Email: {friend.email}</p>
               <button onClick={handleGoBack}>Goo back</button>
          </div>
     );
};

export default FriendDetail;