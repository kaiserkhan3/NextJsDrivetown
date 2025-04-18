import type { Metadata } from "next";
import "../globals.css";
import LayoutComponent from "@/components/global/LayoutComponent";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Topbar from "@/components/global/TopbarComponent";
import { getLoggedInUserDetails } from "@/actions/auth-actions";
import SideMenu from "@/components/global/SideMenu";

export const metadata: Metadata = {
  title: "Drive Town",
  description: "Used car sale!!",
};

export default async function InventoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userDetails = await getLoggedInUserDetails();
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <LayoutComponent>
        <SideMenu />
        <Topbar fullName={userDetails.fullName} email={userDetails.userName} />

        <div style={{ paddingLeft: "12%" }}>{children}</div>
      </LayoutComponent>
    </AppRouterCacheProvider>
  );
}
