import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Statistic } from "antd";
import { Menu, Row, Col, Progress, Button } from 'antd';
import { calcSize } from 'frontend/redux/selectors';
import { nanoid } from "nanoid";
import {NAV} from 'frontend/core/configs'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import { LikeOutlined } from '@ant-design/icons';
const { Sider } = Layout;

const SidebarWrapper = ({ totalFileSize }) => {
  return (
    <Sider>
      <Row>
        <Col span={24}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            {NAV.map(el => (
              <Menu.Item key={nanoid()} icon={el.icon}>
                <Link to={el.url}>
                  {el.name}
                </Link>
              </Menu.Item>

            ))}
          </Menu>
          <Statistic title="Unmerged" value={totalFileSize} suffix="/kb" />
        </Col>
      </Row>
    </Sider>
  )
}

SidebarWrapper.propTypes = {

}


const mapStateToProps = (state) => ({
  totalFileSize: calcSize(state),
});

export default connect(mapStateToProps, null)(SidebarWrapper);


