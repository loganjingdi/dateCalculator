import React, { useState } from 'react';
import { Form, Input, Button, Typography, Radio, Table } from 'antd';

const { Title } = Typography;

interface Payment {
  month: number;
  payment: number;
  principal: number;
  interest: number;
}

const MortgageCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [years, setYears] = useState<string>('');
  const [paymentType, setPaymentType] = useState<string>('等额本息');
  const [monthlyPayments, setMonthlyPayments] = useState<Payment[]>([]);

  const calculateMonthlyPayments = () => {
    const principalValue = parseFloat(principal);
    const rateValue = parseFloat(rate) / 100 / 12;
    const months = parseFloat(years) * 12;

    if (!isNaN(principalValue) && !isNaN(rateValue) && !isNaN(months)) {
      let payments: Payment[] = [];
      if (paymentType === '等额本息') {
        const monthlyPayment = (principalValue * rateValue) / (1 - Math.pow(1 + rateValue, -months));
        for (let i = 1; i <= months; i++) {
          const interest = (principalValue - (monthlyPayment * (i - 1))) * rateValue;
          const principalPayment = monthlyPayment - interest;
          payments.push({ month: i, payment: parseFloat(monthlyPayment.toFixed(2)), principal: parseFloat(principalPayment.toFixed(2)), interest: parseFloat(interest.toFixed(2)) });
        }
      } else {
        const monthlyPrincipal = principalValue / months;
        for (let i = 1; i <= months; i++) {
          const interest = (principalValue - monthlyPrincipal * (i - 1)) * rateValue;
          const monthlyPayment = monthlyPrincipal + interest;
          payments.push({ month: i, payment: parseFloat(monthlyPayment.toFixed(2)), principal: parseFloat(monthlyPrincipal.toFixed(2)), interest: parseFloat(interest.toFixed(2)) });
        }
      }
      setMonthlyPayments(payments);
    } else {
      setMonthlyPayments([]);
    }
  };

  const columns = [
    {
      title: '月份',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: '还款额 (元)',
      dataIndex: 'payment',
      key: 'payment',
    },
    {
      title: '本金 (元)',
      dataIndex: 'principal',
      key: 'principal',
    },
    {
      title: '利息 (元)',
      dataIndex: 'interest',
      key: 'interest',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>房贷计算器</Title>
      <Form layout="vertical" onFinish={calculateMonthlyPayments}>
        <Form.Item label="贷款金额" required>
          <Input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            addonAfter="元"
          />
        </Form.Item>
        <Form.Item label="年利率" required>
          <Input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            addonAfter="%"
            step="0.01"
          />
        </Form.Item>
        <Form.Item label="贷款期限" required>
          <Input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            addonAfter="年"
          />
        </Form.Item>
        <Form.Item label="还款方式" required>
          <Radio.Group value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
            <Radio value="等额本息">等额本息</Radio>
            <Radio value="等额本金">等额本金</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            计算
          </Button>
        </Form.Item>
      </Form>
      <Title level={3}>每月还款额：</Title>
      <Table dataSource={monthlyPayments} columns={columns} rowKey="month" pagination={{ pageSize: 10 }} />
    </div>
  );
};

export default MortgageCalculator;