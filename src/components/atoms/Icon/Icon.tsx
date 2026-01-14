import type { IconProps } from "@types";
import "./Icon.scss";

export default function Icon(props: IconProps) {
 const { icon: Icon, size, color } = props;

 const classes = ["icon"];

 if (size === "sm") {
  classes.push("icon-size--sm");
 } else if (size === "lg") {
  classes.push("icon-size--lg");
 } else {
  classes.push("icon-size--md");
 }

 if (color === "muted") {
  classes.push("icon-color--muted");
 } else if (color === "inverse") {
  classes.push("icon-color--inverse");
 } else {
  classes.push("icon-color--strong");
 }

 return (
  <div className={classes.filter(Boolean).join(" ")}>
   <Icon />
  </div>
 );
}
