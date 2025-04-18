"use server";
import { IAvailableInventory, ISoldInventory } from "@/models/inventory.model";

export async function getAvailableInventory() {
  let result;
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_API_URL + "api/ftpinventory/1/a",
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    }
  );
  if (response.ok) {
    result = (await response.json()) as IAvailableInventory[];
  }

  return result;
}

export async function getSoldInventory() {
  let result;
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_API_URL + "api/ftpinventory/1/s",
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    }
  );
  if (response.ok) {
    result = (await response.json()) as ISoldInventory[];
  }

  return result;
}
