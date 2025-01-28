import type { Metadata } from "next";
import "./globals.css";
import LayoutComponent from "@/components/global/LayoutComponent";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata: Metadata = {
  title: "Drive Town",
  description: "Used car sale!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <LayoutComponent children={children} />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
