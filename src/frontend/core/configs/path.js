import React from 'react'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

export default {
  FILES: {
    url: "/files",
    name: "Files",
    icon: <DesktopOutlined />,
  },
  PHOTOS: {
    url: "/photos",
    name: "Photos",
    icon: <AppstoreOutlined />,
  },
  SHARING: {
    url: "/sharing",
    name: "Sharing",
    icon: <MenuUnfoldOutlined />,
  },
  LINKS: {
    url: "/links",
    name: "Links",
    icon: <PieChartOutlined />
  },
  EVENTS: {
    url: "/events",
    name: "Events",
    icon: <ContainerOutlined />
  },
  HOME: {
    url: "/",
    name: "Root",
    icon: <MailOutlined />,
  },
};

