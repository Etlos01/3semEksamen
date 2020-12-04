import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Holidays } from "./holiday_component/holidays";



export default function Month() {
  let holiday_array = Holidays();

  
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
        <Scheduler data={holiday_array}>
          <ViewState currentDate={new Date()} />
          <MonthView />
          <Appointments />
        </Scheduler>
      </Paper>
    </>
  );
}
