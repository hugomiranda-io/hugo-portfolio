import { Navbar, NavbarItem } from "@components";
import { NAVBAR_DATA } from "@data";
import "./Header.css";

type HeaderProps = {
  currentPath?: string;
};

export default function Header(props: HeaderProps) {
  const { currentPath } = props;

  return (
    <Navbar>
      {NAVBAR_DATA.map((item) => (
        <NavbarItem
          key={item.href}
          {...item}
          active={item.href === currentPath}
        />
      ))}
    </Navbar>
  );
}
