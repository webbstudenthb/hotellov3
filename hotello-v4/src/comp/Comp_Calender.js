// import { useState } from "react";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file

// function Calender() {
//   const [calender, setCalender] = useState([
//     {
//       startDate: new Date(),
//       endDate: null,
//       key: "selection",
//       color: "red",
//     },
//   ]);

//   const handleSelect = (date) => {
//     setCalender(format(date, "MM/dd/yyy"));
//   };

//   return (
//     <>
//       <input value={calender} readOnly />

//       <DateRange
//         editableDateInputs={true}
//         onChange={(item) => setState([item.selection])}
//         moveRangeOnFirstSelection={false}
//         ranges={state}
//       />
//     </>
//   );
// }

// export default Calender;
