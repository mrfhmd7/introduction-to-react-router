import React from 'react';

const Friend = ({ friend }) => {
     
     const { email, name, phone, } = friend;
     
     return (
          <div>
               <h3>{name}</h3>
               <p>{email}</p>
               <p>{phone}</p>
          </div>
     );
};

export default Friend;