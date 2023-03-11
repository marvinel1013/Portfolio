type Props = {
  children: React.ReactNode;
  style: string;
};

function Button({ children, style }: Props) {
  return (
    <button
      className={
        style +
        " " +
        "bg-gradient-to-r hover:from-primary hover:to-secondary from-secondary to-primary duration-300 ease-in hover:scale-105"
      }
    >
      {children}
    </button>
  );
}

export default Button;
