import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  type = "button",
  onClick,
  disabled = false,
  children,
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 rounded-lg text-lg font-semibold transition-all ${className}`}
    >
      {children}
    </button>
  );
};
