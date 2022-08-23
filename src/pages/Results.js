import { useHistory } from 'react-router';
import { Typography } from '@material-ui/core';

import { useAuth } from '../hooks';
import { GROUPS_FORM } from '../common/constants';

const Results = () => {
  const { logout } = useAuth();
  const { push } = useHistory();

  const goBack = () => {
    push(`/formulario/${GROUPS_FORM[GROUPS_FORM.length - 1]}`);
  };

  // Return message with "La información de tu startup ha sido enviada con éxito"
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto flex-grow overflow-x-auto overflow-y-auto">
      <br />
      <br />
      <div className="flex flex-1 items-center justify-center">
        <Typography color="textSecondary" className="text-center" variant="h5">
          La información de tu startup ha sido enviada con éxito
        </Typography>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-row">
        <button
          onClick={(e) => {
            e.preventDefault();
            goBack();
          }}
          type="button"
          className="w-full variant:outlined bg-blue-50 hover:bg-cyan-600 hover:text-white text-cyan-400 font-bold mx-4 py-2 px-4 rounded"
        >
          Atrás
        </button>
        <button
          type="button"
          onClick={logout}
          className="w-full bg-cyan-400 hover:bg-cyan-600 text-white font-bold mx-4 py-2 px-4 rounded"
        >
          Salir
        </button>
      </div>
    </div>
  );
};

export default Results;
