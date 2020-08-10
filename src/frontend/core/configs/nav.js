import React from 'react'
import PATH from './path'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
export default [
  {
    url: PATH.FILES.url,
    icon: <DesktopOutlined />,
    name: "Files",
  },
  {
    url: PATH.PHOTOS.url,
    icon: <AppstoreOutlined />,
    name: "Photos",
  },
  {
    url: PATH.SHARING.url,
    icon: <MenuUnfoldOutlined />,
    name: "Sharing",
  },
  {
    url: PATH.LINKS.url,
    icon: <PieChartOutlined />,
    name: "Links",
  },
  {
    url: PATH.EVENTS.url,
    icon: <ContainerOutlined />,
    name: "Events",
  },
  {
    url: PATH.HOME.url,
    icon: <MailOutlined />,
    name: "Root",
  },
]