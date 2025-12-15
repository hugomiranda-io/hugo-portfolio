import "./Navbar.css";

type NavbarProps = {
  children: React.ReactNode;
};

export default function Navbar(props: NavbarProps) {
  const { children } = props;

  return <nav className="navbar">{children}</nav>;
}
