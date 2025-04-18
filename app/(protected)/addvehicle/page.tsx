import AddVehicleComponent from "@/components/inventory/AddVehicleComponent";
import { Paper } from "@mui/material";
import React from "react";

export default function AddVehicle() {
  return (
    <Paper sx={{ margin: "40px", padding: "20px" }}>
      <AddVehicleComponent />
    </Paper>
  );
}
