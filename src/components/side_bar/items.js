import { CalendarOutlined, PieChartOutlined } from '@ant-design/icons'
import React from 'react'
import { deleteLocalStorage } from '../../utilities/handleStorage'
export const sideBarItems = (navigate) => [
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
  {
    key: '3',
    icon: <CalendarOutlined />,
    label: 'LOGOUT',
    onClick: () => {
      navigate('/')
      deleteLocalStorage()
    },
  },
]
