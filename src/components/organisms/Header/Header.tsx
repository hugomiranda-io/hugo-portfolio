import { Navbar, NavbarItem } from "@components";
import { NAVBAR_DATA } from "@data";
import "./Header.scss";
import { normalizePathname } from "@utils/paths";

type HeaderProps = {
 currentPath?: string;
};

export default function Header(props: HeaderProps) {
 const { currentPath } = props;
 const normalizedCurrentPath = normalizePathname(currentPath);

 return (
  <div className="header">
   <Navbar>
    {NAVBAR_DATA.map((item) => (
     <NavbarItem
      key={item.href}
      {...item}
      active={item.href.startsWith("/") && normalizePathname(item.href) === normalizedCurrentPath}
     />
    ))}
   </Navbar>
  </div>
 );
}
