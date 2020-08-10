import { api } from 'frontend/util';

import { ENDPOINTS } from 'frontend/core/configs';

export const fetchImages = () => {
  return api.get(`${ENDPOINTS.MOCK_DATA}`);
};