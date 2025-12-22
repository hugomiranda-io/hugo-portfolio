import "./Navbar.css";
import type { NavbarProps } from "@types";

export default function Navbar(props: NavbarProps) {
 const { children } = props;

 return <nav className="navbar">{children}</nav>;
}
