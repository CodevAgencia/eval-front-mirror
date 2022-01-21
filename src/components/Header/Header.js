import Logo from '../../images/Logo-v2.png';
import useLogin from '../../hooks/useLogin';

const Header = () => {
  const { isLoggedIn } = useLogin();

  if (!isLoggedIn) return null;

  return (
    <div className="w-full h-44 flex items-center sticky bg-white z-10 top-0 py-4 border-b-2 border-cyan-400">
      <div className="flex flex-col justify-center h-32 mx-auto" style={{ width: '90%' }}>
        <div className="w-full flex items-center justify-center space-x-8">
          <img
            src={Logo}
            alt="logo"
            className="block h-28 object-contain"
            style={{ maxWidth: 'max-content' }}
          />
          <h4 className="font-bold text-black text-10 md:text-11">Zona Innfinita</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
