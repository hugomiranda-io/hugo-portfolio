import "./NavbarItem.scss";
import type { NavbarItemProps } from "@types";

export default function NavbarItem(props: NavbarItemProps) {
 const { href, label, variant = "default", active } = props;
 const classes = ["navbar__item"];
 if (variant === "fixed") classes.push("navbar__item--subtle");
 if (active) classes.push("navbar__item--active");

 return (
  <a className={classes.join(" ")} href={href}>
   {label}
  </a>
 );
}
