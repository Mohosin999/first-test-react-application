const variant = {
  primary: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#000",
  },
  error: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
  warning: {
    backgroundColor: "#ff9800",
    color: "#000",
  },
  info: {
    backgroundColor: "#80d8ff",
    color: "#000",
  },
};

const sizes = {
  small: { padding: "0.5rem 1rem" },
  medium: { padding: "1rem 2rem" },
  large: { padding: "1.5rem 3rem" },
};

const Button = (props) => {
  const userVariant = variant[props.variant];
  const userSize = sizes[props.size];
  const type = props.type;

  return (
    <button
      style={{
        fontSize: "0.9rem",
        border: "none",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontWeight: "bold",
        borderRadius: "0.15rem",
        cursor: "pointer",
        ...userVariant,
        ...userSize,
      }}
      type={type}
    >
      {props.text}
    </button>
  );
};

export default Button;
