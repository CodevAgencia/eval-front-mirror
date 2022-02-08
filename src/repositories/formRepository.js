import { post } from './http';

// const thematicUrl = '/api/thematic';
const formUrl = '/api/form';
const baseUrl = process.env.REACT_APP_EMPRENDEDOR_API;

const formStructureRepository = {
  getGroup: (groupId, userId) => {
    return post(`${baseUrl}${formUrl}`, {
      userId,
      status: groupId,
    });
  },
  saveResponses: (userId, responses, newStatus) => {
    return post(`${baseUrl}${formUrl}/save-responses`, {
      userId,
      responses,
      newStatus,
    });
  },
};
export default formStructureRepository;
