import './data.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcards } from './Reducer/Action';
import ReactPaginate from 'react-paginate';
import moment from 'moment'; // Import moment library separately
//import Action from './Reducer/Action';


const Carddata = () => {
  const [output, setOutput] = useState([]);
  const [coursename, setCoursename] = useState('');
  const [childsubject, setChildsubject] = useState('');
  const [sessiondate, setSessiondate] = useState('');
  const [ischeck, setIscheck] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();
  const cards = useSelector((state) => state.reducer.data);
  const loading = useSelector((state) => state.reducer.loading);

  useEffect(() => {
    dispatch(fetchcards());
  }, [dispatch]);

  const cardsperpage = 6;
  const pagesvisited = pageNumber * cardsperpage;

  const handleDate = (e) => {
    const date = e.target.value;
    setSessiondate(moment(date).format('Do MMM, YYYY'));
  };

  const handleCourse = (e) => {
    setCoursename(e.target.value);
  };

  const handleChild = (e) => {
    setChildsubject(e.target.value);
  };

  const handleCheckbox = (e) => {
    setIscheck(e.target.checked);
  };

  const handleReset = () => {
    setCoursename('');
    setChildsubject('');
    setSessiondate('');
    setIscheck(false);
    setOutput(cards); // Reset to the original data
  };

  const handleAll = () => {
    const filtereddata = cards
      .filter((item) => item['Course Name'].toLowerCase().includes(coursename.toLowerCase()))
      .filter((item) => item['Child Subject'].toLowerCase().includes(childsubject.toLowerCase()))
      .filter((item) => {
        if (sessiondate === '') {
          return true;
        } else if (item['Next Session Date'] === sessiondate) {
          return true;
        }
        return false;
      })
      .filter((item) => {
        if (ischeck === false) {
          return true;
        } else if (item['Next Session Date'] === 'Self paced' && ischeck === true) {
          return true;
        }
        return false;
      });

    setOutput(filtereddata);
  };

  const handlenotfound = () => {
    if (output.length === 0 && loading === false) {
      return (
        <div className="notfound">
          <h2>No Course Found</h2>
        </div>
      );
    }
  };

  const pageCount = Math.ceil(output.length / cardsperpage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayusers = output.slice(pagesvisited, pagesvisited + cardsperpage).map((output) => {
    return (
      <div className="d" key={output['Course Id']}>
        <h3>
          {output['Course Id']} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{output['Next Session Date']}
        </h3>
        <h5>Provider</h5>
        <h4>{output['Provider']}</h4>
        <h5>Course Name</h5>
        <i>
          <h4>{output['Course Name']}</h4>
        </i>
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
    <div className="main">
      <nav className="main-nav">
        <div className="logo1">
          <h1>Course Finder</h1>
        </div>
        <div className="logo2">
          <h4>Courses Found: {cards.length}</h4>
        </div>
        <div className="head">
          <input onChange={(e) => handleCourse(e)} id="course" type="text" placeholder="Course Name" value={coursename} />
          <input onChange={(e) => handleChild(e)} id="child" type="text" placeholder="Child Subject" value={childsubject} /> &nbsp;
          <input onChange={(e) => handleDate(e)} type="date" id="date" name="date" value={sessiondate} /> &nbsp;
          <input onChange={(e) => handleCheckbox(e)} value="Self paced" type="checkbox" id="mycheckbox" checked={ischeck} />
          <label>
            <b>Self Paced</b>
          </label>
          &nbsp;&nbsp;
          <button onClick={() => handleAll()} type="button">
            Search
          </button>
          &nbsp;
          <button onClick={() => handleReset()} type="button">
            Reset
          </button>
        </div>
      </nav>

      {displayusers}
      {handlenotfound()}

      <div className="paginate">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationBttns"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      </div>
    </div>
  );
};

export default Carddata;
