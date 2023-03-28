import { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom";

import RegapiLogo from "../../assets/regapi-logo.png";

import "./navigation.styles.scss";


function Nav(){
    return (
      <Fragment> 
        <div className="navigation">
            <Link className="logo-container" to="/">
                <img src={RegapiLogo} className="logo" />
            </Link>
            <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Nav;