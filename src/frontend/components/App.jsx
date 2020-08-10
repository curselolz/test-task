import React, {useEffect} from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import SidebarWrapper from 'frontend/components/Sidebar.jsx'
import HeaderWrapper from 'frontend/components/Header'
import { LayoutStyled } from "frontend/styles";
import * as actions from 'frontend/redux/actions';
import { Redirect, Switch, Route } from 'react-router-dom'
import routes from 'frontend/routes'
import {nanoid } from 'nanoid'
import { PATH } from 'frontend/core/configs'

import * as selectors from 'frontend/redux/selectors'

const AppComponent = ({ fetchAllImages }) => {
  useEffect(() => {
    fetchAllImages()
  },[])

  return (
    <LayoutStyled>
      <SidebarWrapper />
      <LayoutStyled>
        <HeaderWrapper />
          <Switch>
              {routes.map((route) => {
                return route.component ? (
                  <Route
                    key={nanoid(4)}
                    path={route.path}
                    name={route.name}
                    render={(props) => <route.component payload={route} {...props} />}
                  />
                ) : null
              })}
          <Redirect from={PATH.HOME.url} to={PATH.HOME.url} />
          </Switch>
      </LayoutStyled>
    </LayoutStyled>
  );
}


const mapStateToProps = createStructuredSelector({
  getImages: selectors.getImages,
});

const mapDispatchToProps = {
  fetchAllImages: actions.getAllImages.request,
  fetchProcessedImage: actions.processImageSize.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
