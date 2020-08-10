import styled from "styled-components";
import { Layout, Col, Row, Statistic } from "antd";
const { Header } = Layout;

export const HeaderStyled = styled(Header)`
  background-color:#f2f2f2;
`;
export const LayoutStyled = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledCol = styled(Col)`
  height:100%;
  position: relative;
`;

export const StyledRow = styled(Row)`
  height:100%;
`;

export const StyledStatistic = styled(Statistic)`
  position: absolute;
  bottom: 0;
  left: 10px;
`;