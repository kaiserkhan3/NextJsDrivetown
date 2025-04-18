import type { Metadata } from "next";
import "../../globals.css";
import InventoryTabs from "@/components/inventory/InventoryTabs";

export const metadata: Metadata = {
  title: "Drive Town",
  description: "Used car sale!!",
};

export default async function ProtectedLayout({
  available,
  sold,
  archive,
}: Readonly<{
  available: React.ReactNode;
  sold: React.ReactNode;
  archive: React.ReactNode;
}>) {
  return (
    <>
      <InventoryTabs
        AvailableInventory={available}
        SoldInventory={sold}
        archiveInventory={archive}
      />
    </>
  );
}
