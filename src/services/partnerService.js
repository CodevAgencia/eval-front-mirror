import { partnerRepository } from '../repositories/partnerRepository';

export const partnerService = {
  async getPartners({ userId }) {
    const response = await partnerRepository.getPartners(userId);
    return response.data;
  },
  async savePartners({ userId, partners }) {
    return partnerRepository.savePatners(userId, partners);
  },
};
