/* eslint-disable no-console */
import formStructureRepository from '../repositories/formRepository';

export const FormService = {
  getGroupWithData: ({ groupId, userId }) => {
    return formStructureRepository.getGroup(groupId, userId);
  },
  saveResponses: ({ userId, responses, newStatus }) => {
    return formStructureRepository.saveResponses(userId, responses, newStatus);
  },
};
