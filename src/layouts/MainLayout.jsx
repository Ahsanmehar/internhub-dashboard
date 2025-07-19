import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="relative z-1 flex h-screen">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {showSidebar && (
        <div
          className="fixed inset-0 backdrop-blur-xs opacity-90 bg-opacity-50 z-30 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className="flex-1 overflow-y-auto p-4 z-10 md:p-6">
          <Outlet />
        </main>
      </div>

      <div className="absolute top-0 right-0 z-1 opacity-100">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="1" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="1" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-0 w-full overflow-hidden opacity-70">
        <svg
          width="100%"
          height="200"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 150 C100 130, 200 180, 300 150 C400 120, 500 170, 600 140 C700 110, 800 160, 900 130 C1000 100, 1100 150, 1200 120 C1300 90, 1400 140, 1440 130"
            stroke="#4A6CF7"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />

          <g transform="translate(200, 120)">
            <circle cx="0" cy="0" r="8" fill="#4A6CF7" fillOpacity="0.5" />
            <path
              d="M0 -12 L4 -4 L12 0 L4 4 L0 12 L-4 4 L-12 0 L-4 -4 Z"
              fill="#4A6CF7"
              fillOpacity="0.3"
            />
          </g>

          <g transform="translate(500, 150)">
            <circle cx="0" cy="0" r="6" fill="#4A6CF7" fillOpacity="0.4" />
            <path
              d="M0 -10 L3 -3 L10 0 L3 3 L0 10 L-3 3 L-10 0 L-3 -3 Z"
              fill="#4A6CF7"
              fillOpacity="0.2"
            />
          </g>

          <g transform="translate(800, 130)">
            <circle cx="0" cy="0" r="7" fill="#4A6CF7" fillOpacity="0.5" />
            <path
              d="M0 -11 L3.5 -3.5 L11 0 L3.5 3.5 L0 11 L-3.5 3.5 L-11 0 L-3.5 -3.5 Z"
              fill="#4A6CF7"
              fillOpacity="0.3"
            />
          </g>

          <g transform="translate(1100, 140)">
            <circle cx="0" cy="0" r="9" fill="#4A6CF7" fillOpacity="0.4" />
            <path
              d="M0 -14 L5 -5 L14 0 L5 5 L0 14 L-5 5 L-14 0 L-5 -5 Z"
              fill="#4A6CF7"
              fillOpacity="0.2"
            />
          </g>

          <path
            d="M150 160 Q180 140, 210 160 Q220 170, 210 180 Q180 200, 150 180 Q140 170, 150 160 Z"
            fill="#4A6CF7"
            fillOpacity="0.2"
          />

          <path
            d="M450 170 Q480 150, 510 170 Q520 180, 510 190 Q480 210, 450 190 Q440 180, 450 170 Z"
            fill="#4A6CF7"
            fillOpacity="0.2"
          />

          <path
            d="M950 165 Q980 145, 1010 165 Q1020 175, 1010 185 Q980 205, 950 185 Q940 175, 950 165 Z"
            fill="#4A6CF7"
            fillOpacity="0.2"
          />

          <rect
            width="100%"
            height="100%"
            fill="url(#floralGradient)"
            opacity="0.1"
          />

          <defs>
            <linearGradient
              id="floralGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-1">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1D4ED8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="240.397"
              y1="239.134"
              x2="13.7994"
              y2="292.969"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1D4ED8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>

          <g opacity="0.5">
            <path
              d="M270.21 55.2922C201.398 41.7328 109.391 43.7106 64.7724 68.5767C20.1536 93.4427 23.1734 140.803 74.4571 173.287C125.741 205.771 210.762 222.379 273.305 209.172C335.847 195.964 375.481 153.962 371.009 113.374"
              stroke="url(#paint0_linear_72:302)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M270.21 55.2922C201.398 41.7328 109.391 43.7106 64.7724 68.5767C20.1536 93.4427 23.1734 140.803 74.4571 173.287C125.741 205.771 210.762 222.379 273.305 209.172C335.847 195.964 375.481 153.962 371.009 113.374"
              stroke="url(#paint1_linear_72:302)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default MainLayout;
