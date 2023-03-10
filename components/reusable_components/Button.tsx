type Props = {
  children: React.ReactNode;
  style: string;
};

function Button({ children, style }: Props) {
  return (
    <button
      className={style + " " + "bg-gradient-to-r from-secondary to-primary"}
    >
      {children}
    </button>
  );
}

export default Button;
