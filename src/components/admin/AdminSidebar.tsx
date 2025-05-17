
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  FileText, 
  Settings, 
  Users, 
  LogOut,
  Book,
  Mic
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function AdminSidebar({ isOpen, setIsOpen }: AdminSidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard");
  
  return (
    <aside 
      className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } fixed left-0 top-0 z-30`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
          <div className={`flex items-center ${isOpen ? "justify-between" : "justify-center"}`}>
            {isOpen ? (
              <Link to="/admin-dashboard" className="flex items-center">
                <span className="text-xl font-bold text-blue-600">Lexi</span>
                <span className="text-xl font-semibold">Score</span>
              </Link>
            ) : (
              <Link to="/admin-dashboard" className="flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">L</span>
              </Link>
            )}
            {isOpen && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M15 6L9 12L15 18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            )}
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <SidebarItem 
            icon={BarChart} 
            label="Dashboard" 
            isActive={activeItem === "dashboard"}
            isOpen={isOpen}
            onClick={() => setActiveItem("dashboard")}
            to="/admin-dashboard"
          />
          <SidebarItem 
            icon={FileText} 
            label="Tests" 
            isActive={activeItem === "tests"}
            isOpen={isOpen}
            onClick={() => setActiveItem("tests")}
            to="/admin/tests"
          />
          <SidebarItem 
            icon={Book} 
            label="Proficiency" 
            isActive={activeItem === "proficiency"}
            isOpen={isOpen}
            onClick={() => setActiveItem("proficiency")}
            to="/admin/proficiency"
          />
          <SidebarItem 
            icon={Mic} 
            label="Speaking" 
            isActive={activeItem === "speaking"}
            isOpen={isOpen}
            onClick={() => setActiveItem("speaking")}
            to="/admin/speaking"
          />
          <SidebarItem 
            icon={Users} 
            label="Candidates" 
            isActive={activeItem === "candidates"}
            isOpen={isOpen}
            onClick={() => setActiveItem("candidates")}
            to="/admin/candidates"
          />
          <SidebarItem 
            icon={Settings} 
            label="Settings" 
            isActive={activeItem === "settings"}
            isOpen={isOpen}
            onClick={() => setActiveItem("settings")}
            to="/admin/settings"
          />
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <SidebarItem 
            icon={LogOut} 
            label="Logout" 
            isActive={false}
            isOpen={isOpen}
            onClick={() => {}}
            to="/admin-login"
          />
        </div>
      </div>
    </aside>
  );
}

interface SidebarItemProps {
  icon: React.FC<{ size?: number | string }>;
  label: string;
  isActive: boolean;
  isOpen: boolean;
  onClick: () => void;
  to: string;
}

function SidebarItem({ icon: Icon, label, isActive, isOpen, onClick, to }: SidebarItemProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className={`w-full justify-start ${
        isActive ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
      } ${isOpen ? "px-3" : "px-0 justify-center"}`}
      onClick={onClick}
    >
      <Link to={to} className="flex items-center">
        <Icon size={20} />
        {isOpen && <span className="ml-3">{label}</span>}
      </Link>
    </Button>
  );
}
