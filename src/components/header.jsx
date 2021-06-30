import {NavLink} from "react-router-dom";
import React from "react";


function AppHeader(props) {
  return (
   <div style={{width: '200px', display: 'flex', justifyContent: 'space-around', marginTop: '30px'}}>
     <NavLink to='/'>Solution</NavLink>
     <NavLink to='/comments'>Comments</NavLink>
   </div>
  );
}

export default AppHeader