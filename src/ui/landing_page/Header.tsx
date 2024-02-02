import HEADER from "@/core/data/header";
const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-4">
      <h1>{HEADER.title}</h1>
      <p className="subtitle">{HEADER.subtitle}</p>
    </header>
  );
};

export default Header;
