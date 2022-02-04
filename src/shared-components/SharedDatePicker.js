import { TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/lab';

const SharedDatePicker = ({ value, label, keyData, handle }) => {
  return (
    <MobileDatePicker
      label={label}
      inputFormat="dd/MM/yyyy"
      value={value}
      // onChange={(event) => {
      //   // console.log(format(event, 'dd/MM/yyyy'));
      //   handle('', format(event, 'dd/MM/yyyy'), keyData);
      // }}
      onChange={(date) => handle(date, keyData)}
      renderInput={(params) => <TextField size="small" className="w-full" {...params} />}
    />
  );
};

export default SharedDatePicker;
