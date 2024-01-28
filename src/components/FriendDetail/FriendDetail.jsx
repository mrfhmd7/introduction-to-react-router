import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
     const friend = useLoaderData();
     console.log(friend);

     return (
          <div>
               <h2>All about this friend.</h2>
               <h3>Name: {friend.name}</h3>
               <p>Email: {friend.email}</p>

          </div>
     );
};

export default FriendDetail;