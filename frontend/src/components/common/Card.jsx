const Card = ({ children, className = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;