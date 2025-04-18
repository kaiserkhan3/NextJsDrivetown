"use client";
import { Box, Button, IconButton, Stack, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import classes from "./TopbarComponent.module.css";

type TopbarProps = {
  fullName: string;
  email: string;
};

const Topbar = ({ fullName, email }: TopbarProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between">
      {/* SEARCH BAR */}
      <Box
        display="flex"
        borderRadius="3px"
        sx={{ bgcolor: colors.indigo[800] }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex" sx={{ paddingRight: "2rem" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <div className={classes.userIcon}>
          <PersonOutlinedIcon />
        </div>
        <div className={classes.hide}>
          <Stack spacing={1}>
            <label>Welcome {fullName}</label>
            <label>User Name {email}</label>
          </Stack>
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "20px" }}
          >
            Logout
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Topbar;
