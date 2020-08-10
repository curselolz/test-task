import { actionCreator } from 'frontend/util';

const action = actionCreator('HOME');

export const getAllImages = action('GET_ALL_IMAGES');
export const processImageSize = action('PROCESS_IMAGE_SIZE');

//sort
export const sortBy = action('SORT_BY');
