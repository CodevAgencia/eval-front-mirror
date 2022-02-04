import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const generalSchema = yup.object().shape({
  DG_1: yup.string().required('Ingrese el nombre de la compañia'),
  DG_2: yup.string().required('Ingrese una fecha'),
  DG_3: yup.string().required('Seleccione una Etapa de Desarrollo'),
  DG_4: yup.string().required('Seleccione un Sector Económico'),
  DG_5: yup.string().required('Seleccione una Industria'),
});

export const previousSituationSchema = yup.object().shape({
  S_1: yup.string().required('Seleccione una opción'),
  S_2: yup.string().required('Ingrese el Origien de los fondos'),
  S_3: yup.string().required('Seleccione una opción'),
});

export const dataAccuracySchema = yup.object().shape({
  VD_1: yup.string().required('Seleccione una opción'),
});
