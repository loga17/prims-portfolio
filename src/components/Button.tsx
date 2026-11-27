import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) => {
  
  // Classes de base pour tous les boutons
  const baseClasses = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  
  // Classes spécifiques au variant choisi
  const variantClasses = {
    primary: "bg-prims-orange text-white hover:bg-orange-600 hover:scale-105",
    secondary: "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-prims-orange hover:text-prims-orange",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };
  
  // Si fullWidth est true, on ajoute la classe w-full
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;