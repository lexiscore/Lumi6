
import { ReactNode, useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

interface TestCreationLayoutProps {
  children: ReactNode;
}

export function TestCreationLayout({ children }: TestCreationLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 ml-[var(--sidebar-width)]" style={{ marginLeft: sidebarOpen ? "var(--sidebar-width)" : "var(--sidebar-width-icon)" }}>
        <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main className="p-6 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Speaking Assessment</h1>
            <p className="text-gray-600 mt-1">Generate a new English Speaking Test for candidates</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
