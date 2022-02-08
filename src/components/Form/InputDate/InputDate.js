import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/lab';
import { Controller } from 'react-hook-form';

export const InputDate = ({ id, name, title, control }) => {
  return (
    <Controller
      name={name}
      control={control}
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  errors: PropTypes.any,
  control: PropTypes.any,
};
