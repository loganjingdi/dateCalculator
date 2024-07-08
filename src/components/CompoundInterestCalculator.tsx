import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Helmet } from 'react-helmet';

const { Title } = Typography;

const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const calculateCompoundInterest = () => {
    const principalValue = parseFloat(principal);
    const rateValue = parseFloat(rate) / 100;
    const timeValue = parseFloat(time);

    if (!isNaN(principalValue) && !isNaN(rateValue) && !isNaN(timeValue)) {
      const amount = principalValue * Math.pow((1 + rateValue), timeValue);
      setResult(amount.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Helmet>
        <title>复利计算器 - 在线复利计算工具</title>
        <meta name="description" content="使用我们的在线复利计算器，轻松计算复利终值和复利现值，支持按年、月、日多种复利方式计算。" />
        <meta name="keywords" content="复利计算器, 在线复利计算, 复利终值, 复利现值" />
      </Helmet>
      <Title level={2}>复利计算器</Title>
      <Form layout="vertical" onFinish={calculateCompoundInterest}>
        <Form.Item label="存入本金(现值)" required>
          <Input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            addonAfter="元"
          />
        </Form.Item>
        <Form.Item label="利率" required>
          <Input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            addonAfter="%"
            step="0.01"
          />
        </Form.Item>
        <Form.Item label="存入期限" required>
          <Input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            addonAfter="年"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            计算
          </Button>
        </Form.Item>
      </Form>
      <Title level={3}>
        本息合计(终值)： <span>{result !== null ? `${result} 元` : ''}</span>
      </Title>
    </div>
  );
};

export default CompoundInterestCalculator;