import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DatePicker } from 'antd'
import dayjs from 'dayjs';

let formatDay1:string , formatDay2:string;

const onChange = (date:any, dateString:string | string[]) => {
  formatDay1 = dayjs(date).format('YYYY-MM-DD')
  console.log(date, dateString, formatDay1);
}

const onChange2 = (date:any) => {
  formatDay2 = dayjs(date).format('YYYY-MM-DD')
  let diffDay = dayjs(formatDay2).diff(formatDay1, 'day', true);
  console.log('diff', diffDay)
  return diffDay;
}

function App() {
  const [diffDay, setDiffDay] = useState(0);



  return (
    <>
      <div>
      <h1>Date Calculator</h1>
      <title>DateCalculator</title>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
 
      <div className='startDate'>
      请选择开始日期 <DatePicker onChange = {onChange}>
          
      </DatePicker>
      </div>
      <div className='endDate'>
      请选择结束日期 <DatePicker onChange = {(date) => {setDiffDay(onChange2(date))}}></DatePicker>
      </div>
      <p className="read-the-docs">
        两个日期之间相差 {diffDay} 天
      </p>
    </>
  )
}

export default App
