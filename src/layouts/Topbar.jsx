import { AlignJustify, Bell, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Topbar = ({ showSidebar, setShowSidebar }) => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="p-[6px] rounded border border-neutral lg:hidden"
          >
            {showSidebar ? (
              <X className="text-body cursor-pointer" size={20} />
            ) : (
              <AlignJustify className="text-body cursor-pointer" size={20} />
            )}
          </button>
          <h2 className="text-lg font-semibold text-black">
            Welcome to <span className="text-primary">InternHub</span>
          </h2>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button className="p-2 rounded-full border border-neutral hover:bg-gray-50 transition-colors">
            <Bell
              strokeWidth={1}
              size={20}
              className="text-body cursor-pointer"
            />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
              alt={user?.name}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
            />

            <div className="sm:flex flex-col hidden">
              <span className="text-sm font-medium text-slate-black">
                {user?.name || "N/A"}
              </span>

              <span className="text-xs font-thi text-body">
                Frontend developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
