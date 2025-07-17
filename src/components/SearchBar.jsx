const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4f46e5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-search-icon lucide-search bi bi-search text-primary curosr-pointer absolute top-[50%] left-2 translate-y-[-50%] cursor-pointer"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </div>
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 border text-body bg-white border-body/50 rounded-md outline-none focus:border-none focus:ring-2 focus:ring-primary tarnsition-all duration-300"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
