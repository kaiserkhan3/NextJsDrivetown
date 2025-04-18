"use client";
import { IAvailableInventory } from "@/models/inventory.model";
import React from "react";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import moment from "moment";
import useTable from "../hookComponents/useTable";

const headCells = [
  { id: "days", label: "Days" },
  { id: "onlineDays", label: "Online-Days" },
  { id: "vehicleDetails", label: "Vehicle Details" },
  { id: "purchaseDetails", label: "Purchase Details" },
  { id: "titleStatus", label: "Title Status" },
  { id: "inspectionStatus", label: "Inspection Status" },
  { id: "costDetails", label: "Cost Details" },
];

type AvailableInventoryProps = {
  rows?: IAvailableInventory[];
};
function AvailableInventoryComponent({ rows }: AvailableInventoryProps) {
  const { TblContainer, TblHead } = useTable(headCells);

  const getBgColor = (days?: number): string => {
    let bgColor = "";
    switch (true) {
      case days! < 30:
        bgColor = "#36e34b";
        break;
      case days! > 30 && days! < 60:
        bgColor = "#d17341";
        break;
      case days! > 60:
        bgColor = "#e61607";
        break;
      default:
        bgColor = "#36e34b";
        break;
    }
    return bgColor;
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: "85vh" }}>
        <TblContainer>
          <TblHead />
          <TableBody className="text-lg">
            {rows?.map((row, index) => (
              <TableRow key={row.vin! + index}>
                <TableCell sx={{ background: getBgColor(row.days) }}>
                  {row.days}
                </TableCell>
                <TableCell sx={{ background: getBgColor(row.days) }}>
                  {row.onlineDays}
                </TableCell>
                <TableCell>
                  vin: {row.vin}
                  <br />
                  Make: {row.vehicleMake_Name} Model: {row.vehicleModel_Name}
                  <br />
                  Year: {row.iYear} Color: {row.color}
                </TableCell>
                <TableCell>
                  Purchase Date: {moment(row.purchaseDate).format("MM/DD/YYYY")}
                  <br />
                  Purchase From: {row.purchaseFrom}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.isInspection ? "Done" : "Not Done"}</TableCell>
                <TableCell>
                  {row.originalCost && row.originalCost !== 0 && (
                    <>
                      Original Cost: row.originalCost <br />
                      Total Cost: row.originalCost
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
      </TableContainer>
    </>
  );
}

export default AvailableInventoryComponent;
