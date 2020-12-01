import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

//import appointments  from '../demo-data/today-appointments';

export default function Month() {
  const appointments = [{title: 'Install New Router in Dev Room',
    startDate: '2020-12-23T11:00', endDate: '2020-12-25T12:00',
  }]
   const [ data, setdata ] = useState({
       data: appointments
   ,
    currentDate: new Date(),
  });
    
      
 
      
    return (
      <Paper>
        <Scheduler data={data.data}>
          <ViewState currentDate={data.currentDate}/>
          <MonthView />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
