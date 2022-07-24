

import React from "react";

const NavBar = ({brand}) => {
    return ( 
        <>
        <nav className="navbar navbar-light bg-white shadow mb-5 font-weight-bold">
          <div className="container">
            <a className="navbar-brand text-uppercase text-strong" href="home">
              <img src='data:image/jpeg;base64,
              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' width="80" height="80" alt=""/>
            {brand}</a>
            
            <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/me">MarkoGuevara</a>

      </li></ul>
          </div>
  
        </nav>
        </>
     );
}
 
export default NavBar
