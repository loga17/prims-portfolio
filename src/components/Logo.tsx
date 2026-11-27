import logoP from '../assets/logo-p.svg';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <img src={logoP} alt="Logo Prims" className="w-8 h-8" />
      <span className="text-xl font-bold tracking-wide">PRIMS</span>
    </div>
  );
};

export default Logo;