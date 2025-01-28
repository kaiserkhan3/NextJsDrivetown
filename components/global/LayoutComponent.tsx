"use client";
import Topbar from "./TopbarComponent";
import { ColorModeContext, useMode } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function LayoutComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
