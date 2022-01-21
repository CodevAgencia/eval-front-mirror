import { KeyboardDatePicker } from '@material-ui/pickers';

const SharedDatePicker = ({ value, label, keyData, handle }) => {
  return (
    <KeyboardDatePicker
      // autoOk
      // variant="inline"
      // inputVariant="outlined"
      // label={label}
      // format="dd/MM/yyyy"
      // value={value}
      // InputAdornmentProps={{ position: 'start' }}
      // onChange={(date) => handle(date, keyData)}
      // // className="w-full sm:w-1/2"
      // className="w-full"

      className="mb-8 mr-8"
      format="dd/MM/yyyy"
      id="fechaInicio"
      inputVariant="outlined"
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
      label="Fecha inicio"
      size="small"
      value={value || ''}
      autoOk
      disableToolbar
      fullWidth
      onChange={handle}
    />
  );
};

export default SharedDatePicker;
