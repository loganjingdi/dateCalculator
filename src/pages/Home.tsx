import { useState } from 'react'
import '../App.css'
import { DatePicker, Form, Typography, Flex, Button} from 'antd'
import dayjs from 'dayjs';
const { Title } = Typography;

let formatDay1: string, formatDay2: string, diffedDay;

const onChange = (date: any, dateString: string | string[]) => {
  formatDay1 = dayjs(date).format('YYYY-MM-DD')
  console.log(date, dateString, formatDay1);
}

const onChange2 = (date: any) => {
  formatDay2 = dayjs(date).format('YYYY-MM-DD')
  let diffDay = dayjs(formatDay2).diff(formatDay1, 'day', true);
  console.log('diff', diffDay)
  return diffDay;
}



function Home() {
  const [diffDay, setDiffDay] = useState(0);

  const [diffence, setDiffence] = useState(0);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <title>DateCalculator</title>
        <meta name="description" content="使用我们的在线复利计算器，轻松计算复利终值和复利现值，支持按年、月、日多种复利方式计算。" />
        <meta name="keywords" content="复利计算器, 在线复利计算, 复利终值, 复利现值" />
        <Title level={2}>日期计算器</Title>
        <Form layout="vertical" onFinish={() => setDiffence(diffDay)}>
          <Form.Item label="请输入开始日期" required>
            <Flex vertical gap="small">
              <DatePicker onChange={onChange} size="large">
              </DatePicker>
            </Flex>
          </Form.Item>
          <Form.Item label="请选择结束日期" required>
            <Flex vertical gap="small">
              <DatePicker onChange={(date) => { setDiffDay(onChange2(date)) }} size="large"></DatePicker>
            </Flex>
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType="submit">
            计算
          </Button>
        </Form.Item>
        </Form>
        <Title level={3}>
        两日期相差： <span>{diffence !== null ? `${diffence} 天` : ''}</span>
      </Title>
      </div>

      {/*  
      <div className='startDate'>
      请选择开始日期 <DatePicker onChange = {onChange}>
          
      </DatePicker>
      </div>
      <div className='endDate'>
      请选择结束日期 <DatePicker onChange = {(date) => {setDiffDay(onChange2(date))}}></DatePicker>
      </div>
      <p className="read-the-docs">
        两个日期之间相差 {diffDay} 天
      </p> */}


    </>
  )
}

export default Home
