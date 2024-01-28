import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
     
     const { email, name, phone, id} = friend;
     
     return (
          <div className='friends'>
               <h3>Name: {name}</h3>
               <p>Email: {email}</p>
               <p>Phone: {phone}</p>
               <p><Link to={`/friend/${id}`}>See more details</Link></p>
          </div>
     );
};

export default Friend;