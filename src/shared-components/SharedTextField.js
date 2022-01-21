import { TextField } from '@mui/material';

const SharedTextField = ({ id, label, name, value, handle, errors }) => {
  return (
    <TextField
      id={id.toString()}
      label={label}
      error={!!errors.name}
      helperText={errors.name?.message}
      name={name}
      type="text"
      value={value}
      variant="outlined"
      className="w-full"
      placeholder={label}
      onChange={handle}
      size="small"
    />
  );
};

export default SharedTextField;
