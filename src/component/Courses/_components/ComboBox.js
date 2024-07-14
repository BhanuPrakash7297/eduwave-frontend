import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

const ComboBox = ({
  options,
  onChange,
  value,
  placeholder,
  onCreateOption,
}) => {
  const [inputValue, setInputValue] = useState("");

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
      borderColor: "#ccc",
      padding: "5px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#aaa",
      },
    }),
    input: (provided) => ({
      ...provided,
      color: "#333",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#ddd"
        : state.isFocused
        ? "#eee"
        : "#fff",
      color: "#333",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333",
    }),
  };

  const handleCreateOption = (inputValue) => {
    if (onCreateOption) {
      onCreateOption(inputValue);
    }
  };

  const handleInputChange = (newValue, actionMeta) => {
    if (actionMeta.action === "input-change") {
      setInputValue(newValue);
    }
  };

  return (
    <CreatableSelect
      styles={customStyles}
      options={options}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onCreateOption={handleCreateOption}
      isClearable
    />
  );
};

export default ComboBox;
