import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useApp, usePartnert } from '../hooks';
import SharedCircularProgress from '../shared-components/SharedCircularProgress';

const TeamPage = () => {
  const { loading } = useApp();
  // eslint-disable-next-line no-unused-vars
  const { partners, savePartners } = usePartnert([]);
  const [currentPartners, setCurrentPartners] = useState();

  useEffect(() => {
    setCurrentPartners(partners?.map((partner) => partner.name));
  }, [partners]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    savePartners(currentPartners);
  };

  return loading ? (
    <SharedCircularProgress />
  ) : (
    <div className="w-full flex flex-col justify-center space-y-12">
      <form className="w-full flex flex-col" onSubmit={handleOnSubmit}>
        <h1 className="font-bold">Ingresa los miembros de tu equipo seguido de la tecla Enter</h1>
        <div className="w-full flex flex-col items-center space-y-12 my-8">
          <Autocomplete
            multiple
            id="partners-input"
            options={[]}
            defaultValue={partners.map((p) => p.name)}
            freeSolo
            value={currentPartners}
            onChange={(event, newValue) => {
              setCurrentPartners(newValue);
            }}
            style={{ width: '90%' }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Nombre personas del equipo"
                placeholder="..."
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default TeamPage;
