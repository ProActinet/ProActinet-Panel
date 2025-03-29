import type React from "react";
import { DocsSidebar } from "@/components/common/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[100%%] w-full items-center absolute overflow-scroll z-[-1] flex-col bg-black">
      <div className="flex flex-1">
        <SidebarProvider>
          <DocsSidebar className="hidden md:flex" />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-4 md:p-6 max-w-4xl">
              <div className="flex items-center mb-4">
                <SidebarTrigger className="md:hidden" />
                <div className="md:hidden ml-4 text-lg font-bold">
                  Documentation
                </div>
              </div>
              {children}
            </div>
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
