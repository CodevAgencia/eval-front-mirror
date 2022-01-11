import { Autocomplete, TextField } from '@mui/material';
import { top100Films } from '../../fake-data/fakeDataAutocompletes';

const FoundersInvolved = () => {
  return (
    <div className="w-full mt-8">
      <form className="flex flex-col space-y-16">
        <h1 className="text-red font-bold">founders involved</h1>
        <div className="w-full flex flex-col items-center space-y-12 my-8">
          <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
            <div className="w-full">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="Fundadores involucrados" />}
              />
            </div>
          </div>
          <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
            <TextField
              id="compromiso"
              label="Compromiso del equipo mínimo requerido"
              // error={!!errors.name}
              // helperText={errors.name?.message}
              name="compromiso"
              type="text"
              value=""
              variant="outlined"
              className="w-full"
              placeholder="Compromiso del equipo mínimo requerido..."
              onChange={(event) => console.log(event)}
              size="small"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FoundersInvolved;
