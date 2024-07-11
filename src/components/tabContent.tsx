import React from 'react';
import { Tabs } from 'antd';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const TabContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onTabChange = (key: string) => {
    navigate(key);
  };

  const items = [
    {
      label: 'Home',
      key: '/',
    },
    {
      label: 'InterestCalculator',
      key: '/InterestCalculator',
    }
  ];

  return (
    <div>
    <Tabs activeKey={location.pathname} onChange={onTabChange} items={items} />
    <Outlet />
  </div>
  );
};

export default TabContent;