import { Autocomplete, TextField } from '@mui/material';

const SharedAutoComplete = ({ id, Data, placeLabel, handle, keyData }) => {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={Data}
      getOptionLabel={(option) => option.label || option.value}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label={placeLabel} />}
      onChange={(event, value) => handle(event, value, keyData)}
    />
  );
};

export default SharedAutoComplete;
