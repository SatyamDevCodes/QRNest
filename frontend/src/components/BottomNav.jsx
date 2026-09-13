import { NavLink } from "react-router-dom";
import { Home, QrCode, Scan, Settings } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/generate", icon: QrCode, label: "Generate" },
    { to: "/scan", icon: Scan, label: "Scan" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-lg border-t border-white/10 px-4 py-3">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-xs ${
                isActive ? "text-purple-400" : "text-gray-400"
              }`
            }
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;