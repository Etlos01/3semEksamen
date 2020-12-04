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
  
  const appointments = [
    {
      endDate: "2020-12-31T24:00",
      startDate: "2020-12-31T22:00",
      title: "Nytårsaftensdag",
    },
  ];
  const [data, setdata] = useState({
    date: appointments,
    currentDate: new Date(),
  });
  function PutArray() {
    setdata({ ...data, date: JSON.stringify(Holidays()) });
  }

  return (
    <>
      <Paper>
        <Scheduler data={Holidays()}>
          <ViewState currentDate={data.currentDate} />
          <MonthView />
          <Appointments />
        </Scheduler>
      </Paper>
    </>
  );
}
