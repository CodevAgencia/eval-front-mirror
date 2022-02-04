import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const financingSchema = yup.object().shape({
  FI_1: yup.string().required('Seleccione una opción'),
  FI_2: yup.string().required('Ingrese el porcentaje de ingresos'),
});

export const unitEconomicsSchema = yup.object().shape({
  UE_1: yup.string().required('Ingrese el tiquete promedio'),
  UE_2: yup.string().required('Ingrese el costo de adquisición'),
  UE_3: yup.string().required('Ingrese el valor a largo plazo'),
  UE_4: yup.string().required('Ingrese el margen de contribución'),
  UE_5: yup.string().required('Ingrese el EBITDA'),
  UE_6: yup.string().required('Ingrese las ventas de hoy'),
  UE_7: yup.string().required('Ingrese el margen de contribución'),
  UE_8: yup.string().required('Ingrese la rentabilidad'),
});

export const breakevenSchema = yup.object().shape({
  PE_1: yup.string().required('Ingrese el punto de validación'),
  PE_2: yup.string().required('Ingrese el punto de inflexión'),
  PE_3: yup.string().required('Ingrese el punto de equilibrio'),
  PE_4: yup.string().required('Ingrese el punto de expansión'),
  PE_5: yup.string().required('Ingrese el punto de consolidación'),
});

export const availabilityOfFundsSchema = yup.object().shape({
  DF_1: yup.string().required('Ingrese la disponibilidad de fondos'),
});

export const numberOfEmployeesSchema = yup.object().shape({
  NE_0: yup.string().required('Ingrese el número de empleados actual'),
  NE_1: yup.string().required('Ingrese el número de empleados en el año 1'),
  NE_2: yup.string().required('Ingrese el número de empleados en el año 2'),
  NE_3: yup.string().required('Ingrese el número de empleados en el año 3'),
});
