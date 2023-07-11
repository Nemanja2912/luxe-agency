const Button = ({ children, secondary = false }) => {
  return (
    <div
      className="button"
      style={{ borderColor: secondary ? "black" : "white" }}
    >
      {children}
    </div>
  );
};

export default Button;
