import { Typography } from '@material-ui/core';

import { useAuth } from '../hooks';

const Results = () => {
  const { logout } = useAuth();

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
      <br />
      <button
        type="button"
        onClick={logout}
        className="w-full bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
      >
        Salir
      </button>
    </div>
  );
};

export default Results;
