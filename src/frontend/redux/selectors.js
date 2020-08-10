import { createSelector } from 'reselect';
import get from "lodash/get";
const root = state => state.basic;

export const getImages = state => root(state).images;
export const getImagesSize = state => root(state).imagesSize;
export const getImagesSizeID = state => root(state).imagesSize.byId;
export const getTotalSize = state => root(state).imagesSize.sizes;

export const mergedData = createSelector(
  getImages,
  getImagesSizeID,
  (data, dataWithSize) => {
    return data.map((el) => ({
      ...el,
      size: get(dataWithSize, `${[el.filename]}.size`),
    }));
  }
);

export const calcSize = createSelector(
  getTotalSize,
  (data) => {
    return data.reduce((a, b) => a + b, 0)
  }
);