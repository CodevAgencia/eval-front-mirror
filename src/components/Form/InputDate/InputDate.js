import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/lab';
import { Controller } from 'react-hook-form';

export const InputDate = ({ id, name, title, control, defaultValue }) => {
  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister
      defaultValue={defaultValue}
      render={({ field }) => (
        <MobileDatePicker
          {...field}
          id={id}
          label={title}
          onChange={(date) => {
            field.onChange({
              target: {
                value: date,
                name,
              },
            });
          }}
          inputFormat="dd/MM/yyyy"
          renderInput={(params) => <TextField size="small" className="w-full" {...params} />}
        />
      )}
    />
  );
};

InputDate.propTypes = {
  errors: PropTypes.any,
  control: PropTypes.any,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

InputDate.defaultProps = {
  defaultValue: new Date().toString(),
};
