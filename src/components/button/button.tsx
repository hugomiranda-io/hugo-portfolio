import type React from "react";

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  label?: string;
  children?: React.ReactNode;
  leftIcon?: React.ComponentType;
  rightIcon?: React.ComponentType;
} & Omit<NativeButtonProps, "children">;

export default function Button({
  label,
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  ...buttonProps
}: ButtonProps) {
  const content = children ?? label;
  const mergedClassName = className
    ? `btn btn-soft ${className}`
    : "btn btn-soft";

  return (
    <button className={mergedClassName} {...buttonProps}>
      {LeftIcon ? <LeftIcon /> : null}
      <span className="btn__label">{content}</span>
      {RightIcon ? <RightIcon /> : null}
    </button>
  );
}
