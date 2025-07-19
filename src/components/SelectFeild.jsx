import { useId } from "react";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
}) => {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-3 mr-2 text-sm font-medium text-body"
      >
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full p-3 text-black border rounded-md shadow-sm focus:outline-none focus:ring-primary ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-body/50 focus:border-primary"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default SelectField;
