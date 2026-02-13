import React from "react";

const InputBox = ({
  onChange,
  value,
  required,
  maxLength,
  max,
  min,
  placeholder,
  pattern,
  disabled,
  readOnly,
  type,
  id,
  name,
  label,
}) => {
  return (
    <div className="flex flex-col gap-1 items-start justify-start group">
      <label
        htmlFor={id}
        className="text-zinc-700 group-focus-within:text-theme font-medium text-sm tracking-tight"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        pattern={pattern}
        max={max}
        min={min}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        className="peer w-full text-black font-semibold text-base tracking-light py-1 px-3 rounded-md border-2 border-zinc-300 focus:outline-none focus:border-theme focus:border-2 focus:ring-2 focus:ring-theme/50"
        autoComplete="off"
      />
    </div>
  );
};

export default InputBox;
