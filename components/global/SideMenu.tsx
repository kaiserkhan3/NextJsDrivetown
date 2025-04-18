"use client";
import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";

const useStyles = makeStyles(() => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: 0,
    width: "10%",
    height: "100%",
  },
  breadCrumbIcon: {
    display: "flex",
    height: "40px",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "10px",
  },
  icon: {
    marginRight: "10px",
  },
  menu: {
    marginTop: "40px",
  },
  menuItem: {
    display: "block",
    padding: "10px",
    marginTop: "5px",
  },
}));

export default function SideMenu() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sideMenu}>
        <div className={classes.breadCrumbIcon}>
          <MenuIcon />
        </div>
        <div className={classes.menu}>
          <Link href="/dashboard" className={classes.menuItem}>
            <WidgetsIcon className={classes.icon} /> Dash Board
          </Link>
          <Link href="/inventory" className={classes.menuItem}>
            <ListIcon className={classes.icon} /> Inventory
          </Link>
          <Link href="/addvehicle" className={classes.menuItem}>
            <ListIcon className={classes.icon} /> Add Vehicle
          </Link>
        </div>
      </div>
    </>
  );
}
