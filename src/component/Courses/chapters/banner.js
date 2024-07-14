import React from "react";
import { AlertTriangle, CheckCircle } from "react-feather"; // Replace with appropriate icon components for Lucide icons

// Utility function to handle classNames
// const cn = (...classes) => classes.filter(Boolean).join(" ");

const bannerVariants = (variant) => {
  const baseClasses = "border text-center p-4 text-sm flex items-center w-full";
  switch (variant) {
    case "warning":
      return `${baseClasses} bg-yellow-200/80 border-yellow-30 text-primary dark:bg-yellow-500/80 dark:border-yellow-400 dark:text-primary`;
    case "success":
      return `${baseClasses} bg-emerald-700 border-emerald-800 text-black`;
    default:
      return baseClasses; // Default variant
  }
};

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircle,
};

const Banner = ({ label, variant = "warning" }) => {
  const Icon = iconMap[variant];

  return (
    <div className={bannerVariants(variant)}>
      <Icon className="h-4 w-4 mr-2" />
      {label}
    </div>
  );
};

export default Banner;
