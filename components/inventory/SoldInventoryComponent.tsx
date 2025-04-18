"use client";
import { ISoldInventory } from "@/models/inventory.model";
import React from "react";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import moment from "moment";
import useTable from "../hookComponents/useTable";

const headCells = [
  { id: "details", label: "Vehicle Details" },
  { id: "pDate", label: "Purchase Date" },
  { id: "saleDetails", label: "Sale Details" },
  { id: "customerDetails", label: "Customer Details" },
  { id: "refferedBy", label: "Reffered By" },
  { id: "saleType", label: "Sale Type" },
  { id: "title", label: "Title" },
  { id: "inspection", label: "Inspection" },
  { id: "costDetails", label: "Cost Details" },
];

type SoldInventoryProps = {
  rows?: ISoldInventory[];
};
function SoldInventoryComponent({ rows }: SoldInventoryProps) {
  const { TblContainer, TblHead } = useTable(headCells);

  return (
    <>
      <TableContainer sx={{ maxHeight: "85vh" }}>
        <TblContainer>
          <TblHead />
          <TableBody className="text-lg">
            {rows?.map((row, index) => (
              <TableRow key={row.vin + index}>
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
                <TableCell>
                  Sold Date: {moment(row.saleDate).format("MM/DD/YYYY")}
                  <br />
                  Sold Type: {row.typeOfSale}
                </TableCell>
                <TableCell>
                  Name: {row.customerName}
                  <br />
                  Phone: {row.customerPhoneNumber}
                </TableCell>
                <TableCell>{row.soldBy}</TableCell>
                <TableCell>{row.typeOfSale}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.isInspection ? "Done" : "Pending"}</TableCell>
                <TableCell>{row.soldCostDetails}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
      </TableContainer>
    </>
  );
}

export default SoldInventoryComponent;
