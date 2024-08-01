import { PieChartOutlined, CalendarOutlined } from '@ant-design/icons'
import React from 'react'

export const sideBarItems = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Overview',
    onClick: () => alert('overview'),
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Tickets',
    onClick: () => alert('Tickets'),
  },
]
