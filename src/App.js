import React from "react";
import Navbar from "./Component/Navbar"
//import Card from "./Component/Card";
import './App.css';
import Carddata from './Component/Carddata';
function App() {
    // If you are using the provided data directly without an API call
    // const postsData = postsData;
  
    return (

    <div className="App">   
    <Navbar/>
    <Carddata/>
    
    {/*<div className="row">
    <div className="column">
    <div className="box">
    <Card
    id="101"
    info="Oct,2011"
    pr="Provider"
    prname="Udacity"
    course="Course Name"
    cn="Introduction to Artificial Intelligence"
    u="Universities/Institutions"
    uname="Stanford University"
    ps="Parent Subject"
    psname="Computer Science"
    cs="Child Subject"
    csname="Artificial Intelligence"
    >
    </Card>
    </div></div>

    <div className="column">
    <div className="box">
    <Card
    id="102"
    info="Oct,2011"
    pr="Provider"
    prname="Udacity"
    course="Course Name"
    cn="Introduction to Machine Learning"
    u="Universities/Institutions"
    uname="Stanford University"
    ps="Parent Subject"
    psname="Computer Science"
    cs="Child Subject"
    csname="Machine Learning"
    >
    </Card>
    </div></div>

    <div className="column">
    <div className="box">
    <Card
    id="103"
    info="Oct,2011"
    pr="Provider"
    prname="Udacity"
    course="Course Name"
    cn="Introduction to Data Science"
    u="Universities/Institutions"
    uname="Stanford University"
    ps="Parent Subject"
    psname="Computer Science"
    cs="Child Subject"
    csname="Data Science"
    >
    </Card>
    </div></div>
    </div>*/}
    </div>
      
    );
  } 
export default App;