import http from '../services/http';

const thematicUrl = '/api/thematic';
const groupUrl = '/api/group';
const questionUrl = '/api/question';

const formStructureRepository = {
  getThematic: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${thematicUrl}`);
    } catch (error) {
      throw error;
    }
  },
  getGroup: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${groupUrl}`);
    } catch (error) {
      throw error;
    }
  },
  getQuestion: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await http.get(`${questionUrl}`);
    } catch (error) {
      throw error;
    }
  },
};
export default formStructureRepository;
