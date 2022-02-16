import { post, get } from './http';

const path = '/api/partner';
const baseUrl = process.env.REACT_APP_EMPRENDEDOR_API;

export const partnerRepository = {
  savePatners(userId, parthers) {
    return post(baseUrl + path, {
      userId,
      parthers,
    });
  },
  getPartners(userId) {
    return get(`${baseUrl}${path}/${userId}`);
  },
};
