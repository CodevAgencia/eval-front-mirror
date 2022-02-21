import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export const InputText = ({ id, type, name, title, control, errors, InputProps, defaultValue }) => {
  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          id={id}
          name={name}
          label={title}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          type={type}
          defaultValue={field.value}
          variant="outlined"
          className="w-full"
          placeholder={title}
          size="small"
          InputProps={InputProps}
        />
      )}
    />
  );
};

InputText.propTypes = {
  errors: PropTypes.any,
  type: PropTypes.string,
  control: PropTypes.any,
  subtitle: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  InputProps: PropTypes.shape(PropTypes.any),
};

InputText.defaultProps = {
  type: 'text',
  defaultValue: '',
};
