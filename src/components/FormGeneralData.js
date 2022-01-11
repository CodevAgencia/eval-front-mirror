import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { top100Films } from '../fake-data/fakeDataAutocompletes';

const FormGeneralData = () => {
  const [nameCompany, setNameCompany] = useState('');
  const [dateCreation, setDateCreation] = useState(new Date());

  const handleChange = (event) => {
    console.log('event', event);
  };

  const handleDateChange = (date) => {
    console.log('date', date);
  };

  return (
    <div className="w-full mt-8">
      <form className="flex flex-col space-y-16">
        <div>
          <h1 className="text-red font-bold">Datos generales</h1>
          <div className="w-full flex flex-col items-center space-y-12 my-8">
            <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
              <TextField
                id="nameCompany"
                label="Nombre de Compañia"
                // error={!!errors.name}
                // helperText={errors.name?.message}
                name="nameCompany"
                type="text"
                value={nameCompany}
                variant="outlined"
                className="w-full sm:w-1/2"
                placeholder="Nombre de la Compañia..."
                onChange={(event) => handleChange(event)}
                size="small"
              />
              <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Fecha de creación"
                format="dd/MM/yyyy"
                value={dateCreation}
                InputAdornmentProps={{ position: 'start' }}
                onChange={(date) => handleDateChange(date)}
                className="w-full sm:w-1/2"
              />
            </div>
            <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
              <div className="w-full sm:w-1/2">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  getOptionLabel={(option) => option.label}
                  sx={{ width: '100%' }}
                  renderInput={(params) => <TextField {...params} label="Etapa de desarrollo" />}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  getOptionLabel={(option) => option.label}
                  sx={{ width: '100%' }}
                  renderInput={(params) => <TextField {...params} label="Sector" />}
                />
              </div>
            </div>
            <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                // sx={{ width: 300 }}
                className="w-full sm:w-1/2 sm:pr-4"
                renderInput={(params) => <TextField {...params} label="Industria" />}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-red font-bold">Situación Previa</h1>
          <div className="w-full flex flex-col items-center space-y-8 my-8">
            <div className="w-full space-y-12">
              <Autocomplete
                // disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="Inversion previa" />}
              />
              <TextField
                id="origin"
                label="Origen de fondos"
                // error={!!errors.name}
                // helperText={errors.name?.message}
                name="origin"
                type="text"
                value=""
                variant="outlined"
                rows={4}
                multiline
                className="w-full"
                placeholder="Origen de fondos..."
                onChange={(event) => handleChange(event)}
                size="small"
              />
            </div>
            <div className="w-full space-y-12 sm:space-y-0 sm:space-x-4">
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                // sx={{ width: 300 }}
                className="w-full"
                renderInput={(params) => (
                  <TextField {...params} label="Alistamiento para el mercado" />
                )}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-red font-bold">Veracidad de los datos</h1>
          <div className="w-full flex flex-col items-center space-y-8 my-8">
            <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-4">
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                // sx={{ width: 300 }}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="Los datos son veraces" />}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormGeneralData;
