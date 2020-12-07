import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Holidays } from "./holiday_component/holidays";
import { Event } from "./event_components/event_fetcher"



export default function Month() {
  let holiday_array = Holidays();

 let appointments_array = Event();
 console.log("array",appointments_array)
  const appointments = [
    {
      endDate: "2020-12-31T24:00",
      startDate: "2020-12-31T22:00",
      title: "Nytårsaftensdag",
    },
  ];
  
 

  return (
    <>
      <Paper>
        <Scheduler data={appointments_array}>
          <ViewState currentDate={new Date()} />
          <MonthView />
          <Appointments />
        </Scheduler>
      </Paper>
    </>
  );
}
