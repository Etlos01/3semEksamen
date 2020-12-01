import "date-fns";
import { useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import "react-datepicker/dist/react-datepicker.css";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Form, Button } from "react-bootstrap";
function thisDate(d) {
  return (
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2) +
    "T" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2)
  );
}
function allDay(startDate, endDate){
    const startDay = ("0" + startDate.getDate()).slice(-2) + ("0" + (startDate.getMonth() + 1)).slice(-2);
    const endDay = ("0" + endDate.getDate()).slice(-2) + ("0" + (endDate.getMonth() + 1)).slice(-2);
    if (startDay === endDay) {
        return false;
    }else{
        return true
    }

}

export default function MyDatepicker() {
  const today = new Date();

  const initialValue = {
    title: "",
    startDate: "",
    endDate: "",
    allDay: "",
    category: "",
    info: ""
  };
  const [date, setDate] = useState(initialValue);

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const startingDate = thisDate(startDate);
  const endingDate = thisDate(endDate);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.id;
    if (event.target.type === 'checkbox' && !event.target.checked) {
        setDate({
            ...date,
            [name]: value,startDate: startingDate,
            endDate: endingDate, allDay: allDay(startDate, endDate)
          });
    } else {
        setDate({
            ...date,
            [name]: value,startDate: startingDate,
            endDate: endingDate
          });
    }
    
  };
console.log(date)
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
            <Form>
        <Form.Group>
          <Form.Label>All Day</Form.Label>
          <Form.Check id="allDay" type="checkbox" checked={initialValue.allDay} onChange={handleChange}/>
        </Form.Group>
          <DateTimePicker
            value={startDate}
            disablePast
            ampm={false}
            onChange={setStartDate}
            label="Start Date"
            showTodayButton
            id="startDate"
          />
          <DateTimePicker
            value={endDate}
            disablePast
            ampm={false}
            onChange={setEndDate}
            label="End Date"
            id="endDate"
            showTodayButton
          />
       
      
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control id="title" placeholder="Enter title" />
        </Form.Group>
      
        <Button variant="dark" type="submit">
          Add Me
        </Button>
      </Form>
      </MuiPickersUtilsProvider>
     

      <p>{JSON.stringify(date)}</p>
    </>
  );
}
