import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const marketFitSchema = yup.object().shape({
  PMF_1: yup.string().required('Seleccione una opción'),
  PMF_2: yup.string().required('Seleccione una opción'),
  PMF_3: yup.string().required('Seleccione una opción'),
  PMF_4: yup.string().required('Seleccione una opción'),
  PMF_5: yup.string().required('Seleccione un nivel de Product-Market'),
});

export const performanceProductSchema = yup.object().shape({
  DPP_1: yup.string().required('Seleccione una opción'),
});

export const disruptiveTechnologySchema = yup.object().shape({
  TD_1: yup.string().required('Seleccione una opción'),
  TD_2: yup.string().required('Seleccione una opción'),
  TD_3: yup.string().required('Seleccione una opción'),
});
