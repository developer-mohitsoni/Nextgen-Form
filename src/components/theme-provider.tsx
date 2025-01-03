"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ModeToggle } from "./ThemeToggle";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <div className="min-h-screen">{children}</div>
      <ModeToggle className="absolute top-6 right-6" />
    </NextThemesProvider>
  );
}
