import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = () => {
     return (
          <NavLink
               to={`contacts/${contact.id}`}
               className={({ isActive, isPending }) =>
                    isActive
                         ? "active"
                         : isPending
                              ? "pending"
                              : ""
               }
          >
               {/* other code */}
          </NavLink>
     );
};

export default ActiveLink;