"use client";

import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

const ThemeProvider = ({
  children,
  ...props
}: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props}>
      ThemeProvider
    </NextThemesProvider>
  );
};

export default ThemeProvider;
