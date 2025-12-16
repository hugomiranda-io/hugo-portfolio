import { Navbar, NavbarItem, type NavbarItemProps } from "@components";
import "./Header.css";

type HeaderProps = {
  currentPath?: string;
};

export default function Header(props: HeaderProps) {
  const { currentPath } = props;

  const navItems: NavbarItemProps[] = [
    { href: "/", label: "Accueil", priority: "low" },
    { href: "/career", label: "Parcours", priority: "low" },
    { href: "#contact", label: "Contact", priority: "high" },
  ];

  return (
    <Navbar>
      {navItems.map((item) => (
        <NavbarItem
          key={item.href}
          {...item}
          active={item.href === currentPath}
        />
      ))}
    </Navbar>
  );
}
