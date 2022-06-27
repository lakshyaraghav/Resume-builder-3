import React, { Component } from "react";
import Button from '@mui/material/Button';


class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="nav-extended">
          <div class="nav-wrapper" style={{backgroundColor: "white", width:"100%"}}>
            <a href="/" class="brand-logo" style={{color:"blue", fontSize:"1.5rem"}}>
              Resume Builder
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
              <Button variant="outlined">Import</Button>
              </li>
              <li>
              <Button variant="contained" style={{marginLeft:"1rem"}}>Export</Button>
              </li>              
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
