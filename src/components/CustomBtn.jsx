// Add Hover Effect

const CustomBtn = ({
  children = "Custom Button",
  type = "submit",
  colorScheme = "whiteBg",
  padding = "p-3",
  margin = "mt-1",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`text-lg font-semibold ${
        colorScheme === "whiteBg"
          ? "text-black bg-white"
          : "text-white bg-black"
      } ${padding} ${margin}`}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
