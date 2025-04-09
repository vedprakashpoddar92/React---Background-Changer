const Button = ({ colorData, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
      style={{
        backgroundColor: colorData,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
