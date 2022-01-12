const Header = () => {
  return (
    <div className="w-full h-32 flex items-center sticky top-0 bg-cyan-400 py-4">
      <div className="flex flex-col sm:flex-row h-32 mx-auto" style={{ width: '90%' }}>
        <div className="w-full sm:w-1/3 flex items-center sm:justify-center h-32">
          <h4 className="font-bold text-white text-10 md:text-11">Zonna Innfinita</h4>
        </div>
        <div className="w-full flex items-center sm:justify-center h-32">
          <h4 className="font-bold text-white text-10 md:text-11">Evaluación Emprendedor</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
