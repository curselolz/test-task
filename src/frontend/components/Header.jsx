import React from 'react'
import {HeaderStyled} from 'frontend/styles'
import { Input } from 'antd';
const { Search } = Input;

const HeaderWrapper = props => {
  return (
    <HeaderStyled>
      <Search
        placeholder="Search"
        onSearch={value => console.log(value)}
        enterButton
      />
    </HeaderStyled>
  )
}

HeaderWrapper.propTypes = {};

export default HeaderWrapper;
