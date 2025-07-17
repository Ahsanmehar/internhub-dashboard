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

      <div className="absolute top-0 right-0 z-1 opacity-60">
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
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
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
