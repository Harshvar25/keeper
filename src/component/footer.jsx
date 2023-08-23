import React from 'react';

var year = new Date().getFullYear();

// the below function is an example of functional component
function Copyright(){
   return <footer>
    <p>Copyright {year} </p>
   </footer>
}

export default Copyright ;