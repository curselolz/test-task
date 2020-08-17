import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Layout } from "antd";
import PhotosHeader from 'frontend/components/content/PhotosHeader'
import { getImagesSize, mergedData } from 'frontend/redux/selectors';
import * as actions from 'frontend/redux/actions';
import { Card, Row, Col} from 'antd';
import { nanoid } from "nanoid";
import data from 'backend/data.json'
import { convertImgToDataURLviaCanvas } from './imageConverter';

const { Content } = Layout;

const { Meta } = Card;

const ContentWrapper = ({
  processImageSize,
  getImages,
}) => {
  useEffect(() => {
    const newData = [...data];
    var responseWithSize = [];
    newData.forEach((element) => {
      convertImgToDataURLviaCanvas(element.url, (base64) => {
        if (base64) {
          var base64str = base64.split("base64,")[1];
          var decoded = atob(base64str);
          responseWithSize = [
            ...responseWithSize,
            {
              filename: element.filename,
              url: element.url,
              size: decoded.length,
            },
          ];
          processImageSize(responseWithSize);
        }
      });
    });
  }, [processImageSize]);

  return (
    <>
      <PhotosHeader />
      <Content>
        <Row gutter={16}>
          {getImages.map((el) => (
            <Col className="gutter-row" span={6} key={nanoid()} align="middle">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.url} />}
              >
                <Meta
                  title={el.filename}
                  description={`File size: ${el.size / 1000}  kb`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  getImages: mergedData,
  getImagesSize: getImagesSize
});

const mapDispatchToProps = (dispatch) => ({
  processImageSize: (data) => {
    dispatch(actions.processImageSize.success(data));
  },
});

ContentWrapper.propTypes = {
  getImages: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentWrapper);


