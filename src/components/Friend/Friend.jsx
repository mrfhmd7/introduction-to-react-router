import React from 'react';
import './Friend.css';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
     
     const { email, name, phone, id } = friend;
     
     const navigate = useNavigate();
     
     const handleButton = () => {
          navigate(`/friend/${id}`);
     }

     return (
          <div className='friends'>
               <h3>Name: {name}</h3>
               <p>Email: {email}</p>
               <p>Phone: {phone}</p>
               <p><Link to={`/friend/${id}`}>See more details</Link></p>
               <Link to={`/friend/${id}`}><button>See details</button></Link>
               <button onClick={handleButton}>See with button</button>
          </div>
     );
};

export default Friend;