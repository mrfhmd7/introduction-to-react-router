import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
     
     const { email, name, phone, id} = friend;
     
     return (
          <div className='friends'>
               <h3>{name}</h3>
               <p>{email}</p>
               <p>{phone}</p>
               <p><Link to={`/friend/${id}`}>See more details</Link></p>
          </div>
     );
};

export default Friend;