"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

interface SidebarButtonProps {
  href: string;
  children: React.ReactNode;
}

const SidebarButton = ({ children, href }: SidebarButtonProps) => {
  const pathname = usePathname();
  return (
    <Button
      variant={pathname === `${href}` ? "secondary" : "ghost"}
      className="justify-start"
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default SidebarButton;
