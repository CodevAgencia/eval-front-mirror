import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

export const InputList = ({ id, name, title, errors, control, options, subtitle }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          disablePortal
          placeholder={title}
          id={id}
          options={options}
          onChange={(_e, value) => {
            field.onChange({
              target: {
                value,
                name,
              },
            });
          }}
          sx={{ width: '100%' }}
          size="small"
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!errors[name]}
              helperText={errors[name]?.message}
              label={subtitle}
            />
          )}
        />
      )}
    />
  );
};

InputList.propTypes = {
  errors: PropTypes.any,
  control: PropTypes.any,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
