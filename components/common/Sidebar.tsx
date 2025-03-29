"use client";

import type * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Code,
  FileText,
  Layers,
  CloudLightningIcon as Lightning,
  Settings,
  Zap,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample documentation data
const docsNavigation = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
        icon: BookOpen,
      },
      {
        title: "Installation",
        href: "/docs/installation",
        icon: Zap,
      },
    ],
  },
  {
    title: "Advanced Usage",
    items: [
      // {
      //   title: "API Reference",
      //   href: "/docs/api-reference",
      //   icon: Code,
      // },
      // {
      //   title: "Configuration",
      //   href: "/docs/configuration",
      //   icon: Settings,
      // },
      {
        title: "Examples",
        href: "/docs/examples",
        icon: FileText,
      },
    ],
  },
];

export function DocsSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {docsNavigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={
                          isActive
                            ? "bg-transparent text-pink-accent font-bold !border-l-4 border-pink-accent !border-sidebar-active"
                            : ""
                        }
                      >
                        <Link href={item.href}>
                          <item.icon
                            className={`h-4 w-4 ${
                              isActive
                                ? "text-pink-accent [&>*]:text-pink-accent"
                                : ""
                            }`}
                          />
                          <span
                            className={`${isActive ? "text-pink-accent" : ""}`}
                          >
                            {isActive ? item.title : item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
