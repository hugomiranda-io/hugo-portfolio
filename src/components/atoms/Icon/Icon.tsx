import type { IconProps } from "@types";
import "./Icon.scss";

export default function Icon(props: IconProps) {
 const { icon: Icon, size, color } = props;

 const classes = ["icon"];

 if (size === "sm") {
  classes.push("icon-sm");
 } else if (size === "lg") {
  classes.push("icon-lg");
 } else if (size === "xl") {
  classes.push("icon-xl");
 } else {
  classes.push("icon-md");
 }

 if (color === "muted") {
  classes.push("icon-muted");
 } else if (color === "inverse") {
  classes.push("icon-inverse");
 } else {
  classes.push("icon-strong");
 }

 return (
  <div className={classes.filter(Boolean).join(" ")}>
   <Icon />
  </div>
 );
}
