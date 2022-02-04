import { TextField } from '@mui/material';

const SharedTextField = ({ id, label, name, value, keyData, handle, errors }) => {
  return (
    <TextField
      id={id}
      label={label}
      error={!!errors?.name}
      helperText={errors?.name?.message}
      name={name}
      type="text"
      value={value}
      variant="outlined"
      className="w-full"
      placeholder={label}
      onChange={(event) => {
        handle(event, event.target.value, keyData);
      }}
      size="small"
    />
  );
};

export default SharedTextField;
