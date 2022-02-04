// eslint-disable-next-line import/prefer-default-export
export const findIndexList = (listValues, value) => {
  const index = listValues.findIndex((item) => item.value === value);
  return index > -1 ? index : 0;
};
