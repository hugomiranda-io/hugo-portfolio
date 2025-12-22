import "./NavbarItem.css";
import type { NavbarItemProps } from "@types";

export default function NavbarItem(props: NavbarItemProps) {
 const { href, label, priority, active } = props;
 const classes = ["navbar__item"];
 if (priority === "high") classes.push("navbar__item--solid");
 if (active) classes.push("navbar__item--active");

 return (
  <a className={classes.join(" ")} href={href}>
   {label}
  </a>
 );
}
