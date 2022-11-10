import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerComponent = (props) => {

  // const [startDate, setStartDate] = useState(new Date(props.mindate));
  // const [endDate, setEndDate] = useState(new Date(props.maxdate));
  //console.log(props.startDate)

  return (
    <>
      <DatePicker
        selected={props.startDate}
        onChange={(date) => props.setStartDate(date)}
        selectsStart
        startDate={props.startDate}
        endDate={props.endDate}

      />
      <DatePicker
        selected={props.endDate}
        onChange={(date) => props.setEndDate(date)}
        selectsEnd
        startDate={props.startDate}
        endDate={props.endDate}
        minDate={props.startDate}
      />
    </>
  );
};

export default DatePickerComponent;
