import React from "react";

const Checkbox = ({ label, register, name }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={name}
        {...register(name)}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
