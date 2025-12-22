import { Navbar, NavbarItem } from "@components";
import { NAVBAR_DATA } from "@data";
import "./Header.css";

type HeaderProps = {
 currentPath?: string;
};

export default function Header(props: HeaderProps) {
 const { currentPath } = props;

 return (
  <div className="header">
   <Navbar>
    {NAVBAR_DATA.map((item) => (
     <NavbarItem key={item.href} {...item} active={item.href === currentPath} />
    ))}
   </Navbar>
  </div>
 );
}
