import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Button } from 'antd';
import * as actions from 'frontend/redux/actions';
import { Row, Col } from 'antd';

const PhotosHeader = ({sortBy}) => {
  return (
    <Row align="end">
      <Col>
        <Button onClick={() => sortBy('name')} size="large">Name</Button>
        <Button onClick={() => sortBy('size')} size="large">Size</Button>
        <Button onClick={() => sortBy('lastModified')} size="large">Modified</Button>
      </Col>
    </Row>
  );
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  sortBy: data => {
    dispatch(actions.sortBy.success(data));
  },
});

PhotosHeader.propTypes = {
  sortBy: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosHeader);
