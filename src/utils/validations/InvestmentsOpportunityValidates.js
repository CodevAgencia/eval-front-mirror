import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const investmentRoundSchema = yup.object().shape({
  RI_1: yup.string().required('Seleccione la ronda de inversión'),
});

export const companyValuationSchema = yup.object().shape({
  VC_1: yup.string().string().required('Ingrese la valoración de la compañía'),
});

export const tradingConditionsSchema = yup.object().shape({
  CN_1: yup.string().required('Seleccione una opción'),
  CN_2: yup.string().required('Seleccione una opción'),
  CN_3: yup.string().required('Seleccione una opción'),
  CN_4: yup.string().required('Seleccione una opción'),
  CN_5: yup.string().required('Seleccione una opción'),
  CN_6: yup.string().required('Seleccione una opción'),
  CN_7: yup.string().required('Seleccione una opción'),
});

export const potentialToAddValueSchema = yup.object().shape({
  PAV_1: yup.string().required('Seleccione una opción'),
  PAV_2: yup.string().required('Seleccione una opción'),
  PAV_3: yup.string().required('Seleccione una opción'),
  PAV_4: yup.string().required('Seleccione una opción'),
});
