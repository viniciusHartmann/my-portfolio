import React from "react";
import { Card as AntCard, CardProps as AntCardProps } from "antd";

export type CardVariant = "outlined" | "borderless";

interface CardProps extends AntCardProps {
  variant?: CardVariant;
}

export function Card({
  variant = "outlined",
  ...props
}: CardProps) {
  return (
    <AntCard
      {...props}
      variant={variant as "outlined" | "borderless" | undefined}
    />
  );
}
