const Button = ({ children, onClick, variant = "primary", className = "", ...props }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-medium transition-all duration-200 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-teal-400 text-white shadow-lg shadow-purple-500/20",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
    danger: "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;