import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ProgressBar = React.forwardRef(
  ({ className = "", value = 0, variant = "default", ...props }, ref) => {
    const progressClasses = classNames("h-full w-full flex-1 transition-all", {
      "bg-sky-600": variant === "default",
      "bg-emerald-700": variant === "success",
    });

    return (
      <div
        ref={ref}
        className={classNames(
          "relative h-4 w-full overflow-hidden rounded-full bg-gray-200",
          className
        )}
        {...props}
      >
        <div
          className={progressClasses}
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

ProgressBar.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  variant: PropTypes.oneOf(["default", "success"]),
};

export { ProgressBar };
