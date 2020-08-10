import styled from "styled-components";
import { Layout} from "antd";
const { Header } = Layout;

export const HeaderStyled = styled(Header)`
  background-color:#f2f2f2;
`;
export const LayoutStyled = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

