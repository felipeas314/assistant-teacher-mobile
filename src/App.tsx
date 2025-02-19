import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProviderWrapper } from "./theme/themeContext";
import { Navigation } from "./navigation";
import { queryClient } from "./services/queryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper>
        <Navigation />
      </ThemeProviderWrapper>
    </QueryClientProvider>
  );
}
