import React from 'react'
import { Link } from 'react-router-dom';
import { Layout } from "antd";
import { Menu } from 'antd';
import { calcSize } from 'frontend/redux/selectors';
import { nanoid } from "nanoid";
import {NAV} from 'frontend/core/configs'
import { connect } from 'react-redux';
import { StyledCol, StyledRow, StyledStatistic } from "frontend/styles";

const { Sider } = Layout;

const SidebarWrapper = ({ totalFileSize }) => {
  return (
    <Sider>
      <StyledRow align="middle">
        <StyledCol span={24}>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
          >
            {NAV.map((el) => (
              <Menu.Item key={nanoid()} icon={el.icon}>
                <Link to={el.url}>{el.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
          <StyledStatistic
            title="Unmerged"
            valueStyle={{ color: "#3f8600" }}
            theme="light"
            value={totalFileSize}
            suffix="/kb"
          />
        </StyledCol>
      </StyledRow>
    </Sider>
  );
}

const mapStateToProps = (state) => ({
  totalFileSize: calcSize(state),
});

export default connect(mapStateToProps, null)(SidebarWrapper);


