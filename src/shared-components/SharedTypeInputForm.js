import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { MobileDatePicker } from '@mui/lab';

// eslint-disable-next-line consistent-return
const SharedTypeInputForm = ({
  type,
  question,
  control,
  errors,
  setValue,
  data,
  setData,
  handle,
  listIndex,
}) => {
  return (
    <>
      {type === 'Text' && (
        <Controller
          name={question.identifierQuestion}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id={question.identifierQuestion}
              label={question.title}
              error={!!errors[question.identifierQuestion]}
              helperText={errors[question.identifierQuestion]?.message}
              value={data[question.identifierQuestion]}
              onChange={(e) => handle(e.target.value, question.identifierQuestion)}
              type="text"
              variant="outlined"
              className="w-full"
              placeholder={question.title}
              size="small"
            />
          )}
        />
      )}
      {type === 'Fecha' && (
        <Controller
          name={question.identifierQuestion}
          control={control}
          render={({ field }) => (
            <MobileDatePicker
              label={question.title}
              inputFormat="dd/MM/yyyy"
              value={data[question.identifierQuestion]}
              onChange={(date) => {
                handle(date, question.identifierQuestion);
              }}
              renderInput={(params) => <TextField size="small" className="w-full" {...params} />}
            />
          )}
        />
      )}
      {type === 'Lista' && (
        <Controller
          name={question.identifierQuestion}
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              disablePortal
              id={question.identifierQuestion}
              options={question.values}
              getOptionLabel={(option) => option.value}
              sx={{ width: '100%' }}
              size="small"
              value={question.values.find(
                (option) => option.value === data[question.identifierQuestion]
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!errors[question.identifierQuestion]}
                  helperText={errors[question.identifierQuestion]?.message}
                  label={question.subtitle}
                />
              )}
              onChange={(event, valueList) => {
                setValue(question.identifierQuestion, valueList?.value);
              }}
            />
          )}
        />
      )}
    </>
  );
};

export default SharedTypeInputForm;
