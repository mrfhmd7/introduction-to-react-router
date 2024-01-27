import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {

     const friends = useLoaderData();
     
     return (
          <div>
               <h1>This is Friend.</h1>
               <div>
                    {
                         friends.map((friend) => <Friend
                              key={friend.id}
                              friend={friend}
                         />)
                    }
               </div>
          </div>
     );
};

export default Friends;