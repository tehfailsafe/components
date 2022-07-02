import "../../style.css";

interface Props {
  children: React.ReactNode;
}
export const Button: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="text-2xl cursor-pointer">{children}</div>
    </>
  );
};
