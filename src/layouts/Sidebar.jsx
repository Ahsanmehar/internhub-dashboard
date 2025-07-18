import {
  LayoutDashboard,
  Users2,
  Briefcase,
  UserCircle,
  LogOut,
  Building2,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { logout } = useAuth();

  const navItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      path: "/dashboard/candidates",
      label: "Candidates",
      icon: Users2,
    },
    {
      path: "/dashboard/internships",
      label: "Internships",
      icon: Briefcase,
    },
    {
      path: "/dashboard/profile",
      label: "Profile",
      icon: UserCircle,
    },
  ];

  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 transform ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 z-50 w-64 bg-white shadow-md flex flex-col border-r border-neutral transition-transform duration-300 ease-in-out`}
    >
      <div className="px-4 py-[13px] border-b border-neutral">
        <h1 className="text-xl font-bold text-black flex items-center gap-2 letter-1">
          <span className="p-2 rounded-md bg-primary">
            <Building2 size={18} className="text-white" />
          </span>
          Intern<span className="text-primary -m-2">Hub</span>
        </h1>
      </div>
      <nav className="p-4 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
                  onClick={() => setShowSidebar(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary border-r-2"
                        : "text-slate-black hover:bg-neutral/40"
                    }`
                  }
                >
                  <Icon size={20} strokeWidth={1.2} className="shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-neutral">
        <button
          onClick={logout}
          className="flex items-center w-full p-2 rounded-lg text-gray-600 hover:bg-red-100 transition-colors hover:text-red-500"
        >
          <LogOut size={20} strokeWidth={1.2} className="mr-3" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>

      <div className="absolute top-14 right-0 z-1 opacity-60">
        <svg
          width="55"
          height="99"
          viewBox="0 0 55 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
          <mask
            id="mask0_94:899"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="99"
            height="99"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
          </mask>
          <g mask="url(#mask0_94:899)">
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="url(#paint0_radial_94:899)"
            />
            <g opacity="0.8" filter="url(#filter0_f_94:899)">
              <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_94:899"
              x="12.4852"
              y="-15.1763"
              width="82.7646"
              height="82.7646"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_94:899"
              />
            </filter>
            <radialGradient
              id="paint0_radial_94:899"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
            >
              <stop stopOpacity="0.47" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-24 left-0 z-1">
        <svg
          width="79"
          height="94"
          viewBox="0 0 79 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            fill="url(#paint0_linear_94:889)"
          />
          <rect
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            stroke="url(#paint1_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
            fill="url(#paint2_linear_94:889)"
          />
          <path
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
            stroke="url(#paint3_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
            fill="url(#paint4_linear_94:889)"
          />
          <path
            d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
            stroke="url(#paint5_linear_94:889)"
            strokeWidth="0.7"
          />
          <defs>
            <linearGradient
              id="paint0_linear_94:889"
              x1="-41"
              y1="21.8445"
              x2="36.9671"
              y2="59.8878"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f46e5" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4f46e5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_94:889"
              x1="25.6675"
              y1="95.9631"
              x2="-42.9608"
              y2="20.668"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f46e5" stopOpacity="0" />
              <stop offset="1" stopColor="#4f46e5" stopOpacity="0.51" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_94:889"
              x1="20.325"
              y1="-3.98039"
              x2="90.6248"
              y2="25.1062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f46e5" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4f46e5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_94:889"
              x1="18.3642"
              y1="-1.59742"
              x2="113.9"
              y2="80.6826"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f46e5" stopOpacity="0" />
              <stop offset="1" stopColor="#4f46e5" stopOpacity="0.80" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_94:889"
              x1="61.1098"
              y1="62.3249"
              x2="-8.82468"
              y2="58.2156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f46e5" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4f46e5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_94:889"
              x1="65.4236"
              y1="65.0701"
              x2="24.0178"
              y2="41.6598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f46e5" stopOpacity="0" />
              <stop offset="1" stopColor="#4f46e5" stopOpacity="0.80" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </aside>
  );
};

export default Sidebar;
