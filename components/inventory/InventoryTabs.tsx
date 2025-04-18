"use client";
import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type InventoryTabProps = {
  AvailableInventory?: React.ReactNode;
  SoldInventory?: React.ReactNode;
  archiveInventory?: React.ReactNode;
};

function InventoryTabs({
  AvailableInventory,
  SoldInventory,
  archiveInventory,
}: InventoryTabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Available" {...a11yProps(0)} />
          <Tab label="Sold" {...a11yProps(1)} />
          <Tab label="Archive" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {AvailableInventory}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {SoldInventory}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {archiveInventory}
      </CustomTabPanel>
    </Box>
  );
}

export default InventoryTabs;
