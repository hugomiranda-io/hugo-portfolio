import { Navbar, NavbarItem } from "@components";
import { NAVBAR_DATA } from "@data";
import "./Header.css";

type HeaderProps = {
 currentPath?: string;
};

function normalizePathname(pathname?: string) {
 if (!pathname) return "/";

 let path = pathname.split(/[?#]/, 1)[0] ?? "/";

 const baseUrl = import.meta.env.BASE_URL ?? "/";
 const baseNoTrailingSlash = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
 if (
  baseNoTrailingSlash &&
  baseNoTrailingSlash !== "/" &&
  path.startsWith(`${baseNoTrailingSlash}/`)
 ) {
  path = path.slice(baseNoTrailingSlash.length);
 }

 if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
 return path || "/";
}

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
