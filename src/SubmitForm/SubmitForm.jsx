import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../NavBar/NavBar';
import './submitform.scss';
import Period1 from './Period1';
import Period2 from './Period2';
import Period3 from './Period3';
import Period4 from './Period4';

function SubmitForm() {
  const [page, setPage] = useState(0);

  const FormTitles = ['Period 1', 'Period 2', 'Period 3', 'Period 4'];

  const PageDisplay = () => {
    if (page === 0) {
      return <Period1 />;
    } else if (page === 1) {
      return <Period2 />;
    } else if (page === 2) {
      return <Period3 />;
    } else {
      return <Period4 />;
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setPage((currPage) => currPage - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setPage((currPage) => currPage + 1);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main className="main-content">
        <form method="get" className="form">
          <div className="body">
            <div className="form-container">
              <div className="progressbar">
                <div></div>
              </div>
              <h4 className="form-title">{FormTitles[page]}</h4>
              {PageDisplay()}

              <div className="footer">
                <button disabled={page === 0} onClick={handlePrev}>
                  Prev
                </button>
                {page === 3 ? (
                  <button className="submit-button">Submit</button>
                ) : (
                  <button
                    disabled={page === FormTitles.length - 1}
                    onClick={handleNext}
                  >
                    {' '}
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SubmitForm;
