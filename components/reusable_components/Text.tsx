type Children = {
  children: React.ReactNode;
};

function Text({ children }: Children) {
  return (
    <span className=" bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text">
      {children}
    </span>
  );
}

export default Text;
