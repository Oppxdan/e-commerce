import { Routes, Route, Outlet } from "react-router-dom";


function Nav(){
    return (
      <div> 
        <div>
          <h1>I am the Nav Bar</h1>
        </div>
        <Outlet />
      </div>
    )
  }

  export default Nav;