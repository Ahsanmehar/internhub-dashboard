import { useId } from "react";

export default function FormInput({
  type = "text",
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
}) {
  const id = useId();

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-3 mr-2 text-sm font-medium text-body"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border text-body placeholder:text-sm font-normal bg-white  rounded-md outline-none focus:border-none focus:ring-2 transition-all duration-300 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-body/50 focus:ring-primary"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
