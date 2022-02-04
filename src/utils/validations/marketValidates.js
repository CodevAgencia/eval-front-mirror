import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const targetPopulationSchema = yup.object().shape({
  POPN_1: yup.string().required('Seleccione un rango de edad'),
  POPN_2: yup.string().required('Seleccione el nivel de ingresos'),
  POPN_3: yup.string().required('Seleccione un género'),
  POPJ_1: yup.string().required('Seleccione el tamaño de sus empresas clientes'),
  POPJ_2: yup.string().required('Seleccione el tamaño en no. empleados'),
  POPJ_3: yup.string().required('Seleccione el nivel de madurez'),
  REG_1: yup.string().required('Seleccione una región'),
  REG_2: yup.string().required('Seleccione una zona'),
  POUS_1: yup.string().required('Seleccione un rango de edades'),
  POUS_2: yup.string().required('Seleccione un nivel de ingresos'),
  POUS_3: yup.string().required('Seleccione un género'),
});

export const lengthMarketSchema = yup.object().shape({
  TAM: yup.string().required('Ingrese el mercado total'),
  SAM: yup.string().required('Ingrese el mercado atendible'),
  TARGET_1: yup.string().required('Ingrese el mercado objetivo año 1'),
  TARGET_2: yup.string().required('Ingrese el mercado objetivo año 2'),
  TARGET_3: yup.string().required('Ingrese el mercado objetivo año 3'),
  BEACHHEAD: yup.string().required('Ingrese el mercado inicial'),
});

export const entryBarriersSchema = yup.object().shape({
  BER_1: yup.string().required('Seleccione una opción'),
  BER_2: yup.string().required('Seleccione una opción'),
});

export const expansionPlanSchema = yup.object().shape({
  TRL: yup.string().required('Seleccione el nivel de TRL'),
  PEXP_1: yup.string().required('Seleccione una opción'),
  PEXP_2: yup.string().required('Ingrese el tiempo para iniciar la expansión'),
});

export const localRegionalCompetitorsSchema = yup.object().shape({
  COMP_1: yup.string().required('Seleccione una opción'),
  COMP_2: yup.string().required('Seleccione una opción'),
  COMP_3: yup.string().required('Seleccione el nivel de amenaza'),
  COMP_4: yup.string().required('Seleccione el nivel de rivalidad'),
});
