import type React from "react";
import "./icon.css";

export type IconProps = {
  icon: React.ComponentType;
  size: "sm" | "md" | "lg";
  priority: "low" | "high" | "theme";
};

export default function Icon(props: IconProps) {
  const { icon: Icon, size, priority } = props;

  const classes = ["icon"];

  if (size === "sm") {
    classes.push("icon-size--sm");
  } else if (size === "lg") {
    classes.push("icon-size--lg");
  } else {
    classes.push("icon-size--md");
  }

  if (priority === "low") {
    classes.push("icon-priority--low");
  } else if (priority === "theme") {
    classes.push("icon-priority--theme");
  } else {
    classes.push("icon-priority--high");
  }

  return (
    <div className={classes.filter(Boolean).join(" ")}>
      <Icon />
    </div>
  );
}
