import React from 'react';
import './Friend.css';

const Friend = ({ friend }) => {
     
     const { email, name, phone, } = friend;
     
     return (
          <div className='friends'>
               <h3>{name}</h3>
               <p>{email}</p>
               <p>{phone}</p>
          </div>
     );
};

export default Friend;