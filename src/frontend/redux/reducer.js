import { createReducer } from 'redux-act';
import produce from 'immer';
import * as actions from './actions';
import { compare, compareTimestamp, compareSize } from "./sort";

const initialState = {
  images:[],
  imagesSize:{
    sizes: [],
    byId: {},
  },
};

export default createReducer(
  {
    [actions.getAllImages.request]: (state) =>
      produce(state, (nextState) => {
        nextState.eduEstablishmentsLoading = true;
      }),
    [actions.getAllImages.success]: (state, payload) =>
      produce(state, (nextState) => {
        nextState.images = payload;
      }),
    [actions.getAllImages.failure]: (state) =>
      produce(state, (nextState) => {
        nextState.eduEstablishmentsLoading = false;
      }),
    [actions.processImageSize.request]: (state) =>
      produce(state, (nextState) => {
        nextState.eduEstablishmentsLoading = true;
      }),

    [actions.processImageSize.success]: (state, payload) =>
      produce(state, (nextState) => {
        nextState.imagesSize = payload.reduce(
          (acc, item) => {
            acc.sizes.push(item.size);
            acc.byId[item.filename] = item;
            return acc;
          },
          { byId: {}, sizes: []}
        );
      }),
    [actions.processImageSize.failure]: (state) =>
      produce(state, (nextState) => {
        nextState.eduEstablishmentsLoading = false;
      }),
    [actions.sortBy.success]: (state, payload) =>
      produce(state, (nextState) => {
        switch (payload) {
          case "size":
            nextState.images = nextState.images.sort(compareSize);
            break;
          case "name":
            nextState.images = nextState.images.sort(compare);
            break;
          case "lastModified":
            nextState.images = nextState.images.sort(compareTimestamp);
            break;
          default:
            console.log("no sort type");
        }
      }),
  },
  initialState
);
