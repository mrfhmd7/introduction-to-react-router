import { useRouteError } from "react-router-dom";
import React from 'react';

const Error = () => {
     const error = useRouteError();
     console.error(error);
     return (
          <div id="error-page">
               <h1>Oops!😢😢</h1>
               <h3>Sorry, an unexpected error has occurred.</h3>
               <p>
                    <i>{error.statusText || error.message}</i>
               </p>
          </div>
     );
};

export default Error;