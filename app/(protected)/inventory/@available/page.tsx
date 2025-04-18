import React, { Suspense } from "react";
import * as inventoryService from "@/actions/inventory-actions";
import AvailableInventoryComponent from "@/components/inventory/AvailableInventoryComponent";
import Loading from "@/app/loading";

async function AvailableInventory() {
  const resposne = await inventoryService.getAvailableInventory();
  return (
    <Suspense fallback={<Loading />}>
      <AvailableInventoryComponent rows={resposne} />
    </Suspense>
  );
}

export default AvailableInventory;
