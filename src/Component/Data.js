import React, { useState, useEffect } from "react";
import Axios from "axios";
import './data.css';
import ReactPaginate from 'react-paginate';
import moment from "moment";

function Data() {
  const [info, setInfo] = useState([]);
  const [output, setOutput] = useState([]);
  const [coursename, setCoursename] = useState('');
  const [childsubject, setChildsubject] = useState('');
  const [sessiondate, setSessiondate] = useState('');
  const [courseresult, setCourseresult] = useState([]);
  const [childresult, setChildresult] = useState([]);
  const [dateresult, setDateresult] = useState([]);
  const [checkboxresult, setCheckboxresult] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:9000/posts")
      .then((response) => {
        const detail = response.data;
        const newdetail = detail.slice(0, 100); //limit the response to 100
        setInfo(newdetail);
        setOutput(newdetail);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const usersperpage = 6;
  const pagesvisited = pageNumber * usersperpage;

  const handleCourse = (e) => {
    setCoursename(e.target.value);
  };

  const handleChild = (e) => {
    setChildsubject(e.target.value);
  };

  const handleCheckbox = (e) => {
    // Handle checkbox logic if needed
  };

  const handleDate = (e) => {
    const date = e.target.value;
    setSessiondate(moment(date).format("Do MMM, YYYY"));
  };


  const handleReset = () => {
    window.location.reload();
  };

  const handleAll = () => {
    if (coursename !== "") {
      setCourseresult(info.filter((info) => info['Course Name'].toLowerCase().includes(coursename.toLowerCase())));
    }
    if (childsubject !== "") {
      setChildresult(courseresult.filter((courseresult) => courseresult['Child Subject'].toLowerCase().includes(childsubject.toLowerCase())));
    }
    if (sessiondate !== "") {
      const result = childresult.filter((childresult) => childresult['Next Session Date'] === sessiondate);
      setDateresult(result);
    }
    if (sessiondate) {
      const result = childresult.filter((childresult) => childresult['Next Session Date'] === "Self paced");
      setCheckboxresult(result);
    }
  };

  const pageCount = Math.ceil(info.length / usersperpage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayusers = output.slice(pagesvisited, pagesvisited + usersperpage).map((output) => {
    return (
      <div className="d" key={output['Course Id']}>
        <h3>{output['Course Id']} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{output['Next Session Date']}</h3>
        <h5>Provider</h5>
        <h4>{output['Provider']}</h4>
        <h5>Course Name</h5>
        <i><h4>{output['Course Name']}</h4></i>
        <h5>Universities/Institutions</h5>
        <h4>{output['Universities/Institutions']}</h4>
        <h5>Parent Subject</h5>
        <h4>{output['Parent Subject']}</h4>
        <h5>Child Subject</h5>
        <h4>{output['Child Subject']}</h4>
      </div>
    );
  });

  return (
    <div className="data">
      {console.log(courseresult)}
      {console.log(childresult)}
      {console.log(dateresult)}
      {console.log("check box", checkboxresult)}
      <div className="head">
        <input onChange={(e) => handleCourse(e)} id="course" type="text" placeholder="Course Name" value={coursename}></input>
        <input onChange={(e) => handleChild(e)} id="child" type="text" placeholder="Child Subject" value={childsubject}></input> &nbsp;
        <input onChange={(e) => handleDate(e)} type="date" id="date" name="date" value={sessiondate}></input> &nbsp;
        <input onChange={(e) => handleCheckbox(e)} value="Self paced" type="checkbox" id="mycheckbox" checked={sessiondate}></input>
        <label><b>Self Paced</b></label> &nbsp;&nbsp;

        <button onClick={() => handleAll()} type="button">Search</button> &nbsp;
        <button onClick={handleReset} type="button">Reset</button>
      </div>

      {displayusers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
export default Data;
