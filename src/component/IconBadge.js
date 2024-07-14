import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";


// Replicating Shadcn's Component Styling System
const backgroundVariants = (variant, size) => {
  const baseClasses = "rounded-full flex items-center justify-center";
  const variantClasses = {
    default: "bg-sky-100",
    success: "bg-emerald-100",
  };
  const sizeClasses = {
    default: "p-2",
    sm: "p-1",
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

const iconVariants = (variant, size) => {
  const baseClasses = "";
  const variantClasses = {
    default: "text-sky-700",
    success: "text-emerald-700",
  };
  const sizeClasses = {
    default: "h-8 w-8",
    sm: "h-4 w-4",
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

const IconBadge = ({ icon: Icon, variant = "default", size = "default" }) => {
  return (
    <div className={cn(backgroundVariants(variant, size))}>
      <Icon className={cn(iconVariants(variant, size))} />
    </div>
  );
};

export default IconBadge;
