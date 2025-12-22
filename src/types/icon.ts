import type React from "react";

export type IconProps = {
 icon: React.ComponentType;
 size: "sm" | "md" | "lg";
 priority: "low" | "high" | "theme";
};
