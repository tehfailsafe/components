interface Props {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button className="text-3xl">{children}</button>;
};
