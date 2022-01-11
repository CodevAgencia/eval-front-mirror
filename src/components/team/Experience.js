import { Autocomplete, TextField } from '@mui/material';
import { top100Films } from '../../fake-data/fakeDataAutocompletes';

const Experience = () => {
  return (
    <div className="w-full mt-8">
      <form className="flex flex-col space-y-16">
        <h1 className="text-red font-bold">experience</h1>
        <div className="w-full flex flex-col items-center space-y-12 my-8">
          <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
            <div className="w-full sm:w-1/3">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="Experiencia laboral" />}
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField {...params} label="Experiencia como emprendedores" />
                )}
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="Experiencia en el tema" />}
              />
            </div>
          </div>
          <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
            <div className="w-full">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField {...params} label="Tipo de experiencia en el tema" />
                )}
              />
            </div>
          </div>
          <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
            <div className="w-full">
              <TextField
                id="origin"
                label="Trayectoria de equipo"
                // error={!!errors.name}
                // helperText={errors.name?.message}
                name="origin"
                type="text"
                value=""
                variant="outlined"
                rows={4}
                multiline
                className="w-full"
                placeholder="Trayectoria de equipo..."
                onChange={(event) => console.log(event.target.value)}
                size="small"
              />
            </div>
          </div>
          <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
            <div className="w-full">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.label}
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField {...params} label="Experiencia del Emprendimiento en el ecosistema" />
                )}
              />
            </div>
          </div>
          <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
            <div className="w-full">
              <TextField
                id="origin"
                label="Tipo de experiencia del Emprendimiento en el ecosistema"
                // error={!!errors.name}
                // helperText={errors.name?.message}
                name="origin"
                type="text"
                value=""
                variant="outlined"
                rows={4}
                multiline
                className="w-full"
                placeholder="Tipo de experiencia del Emprendimiento en el ecosistema..."
                onChange={(event) => console.log(event.target.value)}
                size="small"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Experience;
