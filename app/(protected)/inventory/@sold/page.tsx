import SoldInventoryComponent from "@/components/inventory/SoldInventoryComponent";
import React, { Suspense } from "react";
import * as inventoryService from "@/actions/inventory-actions";
import Loading from "../loading";

async function SoldInventory() {
  const response = await inventoryService.getSoldInventory();
  const result = response?.slice(0, 400);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SoldInventoryComponent rows={result} />
      </Suspense>
    </>
  );
}

export default SoldInventory;
