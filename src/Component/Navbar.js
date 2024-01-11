import React from 'react'
import './navbar.css'
function Navbar() {
return(
    <nav className="main-nav">
        <div className="logo1">
            <h2>Course Finder</h2>
        </div>
        <div className="logo2">
            <h4>Course Found:100</h4>
        </div> 
        
        <div className="menu">
        <input type="search" id="Course" name="Course" placeholder="Course"></input> &nbsp;
        <input type="search" id="child subject" name="child subject" placeholder="child subject"></input> &nbsp;
        <input type="date" id="date" name="date"></input> &nbsp;
        <input type="checkbox" id="self pace" name="self paced"></input> &nbsp;
        <label for="self paced">Self Paced</label> &nbsp;&nbsp;
        <button type="button">Search</button> &nbsp;&nbsp;
        <button type="button">Reset</button>
        </div>

    </nav>
)
}
export default Navbar;
