"use client";
import { IAvailableInventory } from "@/models/inventory.model";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { useForm, Form } from "../hookComponents/useForm";

const initialValues: IAvailableInventory = {
  inventory_Id: 0,
  vin: "",
  vehicleMake_Id: undefined,
  battery: "",
  checkEngineLight: "",
};

export default function AddVehicleComponent() {
  const { values, handleOnchange } = useForm(initialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="VIN"
            name="vin"
            value={values.vin}
            onChange={handleOnchange}
          />
          <TextField
            variant="outlined"
            label="Make"
            value={values.vehicleMake_Id}
            name="vehicleMake_Id"
            onChange={handleOnchange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>BATTERY</FormLabel>
            <RadioGroup
              row
              value={values.battery}
              name="battery"
              onChange={handleOnchange}
            >
              <FormControlLabel value="good" control={<Radio />} label="GOOD" />
              <FormControlLabel value="bad" control={<Radio />} label="BAD" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              CHECK ENGINE LIGHT
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="checkEngineLight"
              value={values.checkEngineLight}
              onChange={handleOnchange}
            >
              <FormControlLabel value="on" control={<Radio />} label="ON" />
              <FormControlLabel value="off" control={<Radio />} label="OFF" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}
