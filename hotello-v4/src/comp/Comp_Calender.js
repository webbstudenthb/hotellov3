//Detta är en fil som inte används. Vi försökte att ta bort samt flytta koden till ett annat projekt. Men då krashade appen. Därför låter vi dem vara kvar

import React, { useState } from "react";

import "../styles/calender.css";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";


const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      {/* <div className="calenderFormImg">
        <img
          style={{ height: "12px", paddingRight: "8px" }}
          src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/calendar3.svg?v=1664196888370"
          alt="location icon"
        />
      </div>
      <div className="calenderForm">
        <DatePicker
          className="innerCalenderForm"
          placeholderText={'Please select a date'} 
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        ></DatePicker>
      </div>

        <div className="calenderArrow">
            <img
            style={{ height: "14px" }}
            src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/angle-down-solid.svg?v=1665407644925"
            alt="pil neråt"
            />
        </div> */}
    </>
  );
};

export default Calender;
