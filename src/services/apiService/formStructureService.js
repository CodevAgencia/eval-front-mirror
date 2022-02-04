import formStructureRepository from '../../repositories/formStructureRepository';

const FormStructureService = {
  getThematic: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await formStructureRepository.getThematic();
    } catch (error) {
      throw error;
    }
  },
  getGroup: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await formStructureRepository.getGroup();
    } catch (error) {
      throw error;
    }
  },
  getQuestion: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await formStructureRepository.getQuestion();
    } catch (error) {
      throw error;
    }
  },
};

export default FormStructureService;
