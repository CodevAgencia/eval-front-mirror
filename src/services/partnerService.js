import { partnerRepository } from '../repositories/partnerRepository';

export const partnerService = {
  async getPartners({ userId }) {
    const response = await partnerRepository.getPartners(userId);
    return response.data;
  },
  async savePartners({ userId, parthers }) {
    return partnerRepository.savePatners(userId, parthers);
  },
};
