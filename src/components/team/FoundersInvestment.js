import { TextField } from '@mui/material';

const FoundersInvestment = () => {
  return (
    <div className="w-full mt-8">
      <form className="flex flex-col space-y-16">
        <h1 className="text-red font-bold">founders investment</h1>
        <div className="w-full flex flex-col items-center space-y-12 my-8">
          <div className="w-full space-y-12 sm:space-y-0 sm:flex sm:space-x-8">
            <TextField
              id="accionarios"
              label="Monto invertido por los fundadores"
              // error={!!errors.name}
              // helperText={errors.name?.message}
              name="compromiso"
              type="text"
              value=""
              variant="outlined"
              className="w-full"
              placeholder="Monto invertido por los fundadores..."
              onChange={(event) => console.log(event)}
              size="small"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FoundersInvestment;
