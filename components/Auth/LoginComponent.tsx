"use client";
import { Box, Button, TextField } from "@mui/material";
import { Fragment, useActionState } from "react";
import { validateUser } from "@/actions/auth-actions";

export default function Login() {
  // const [formState, formAction] = useActionState(validateUser, {
  //   errors: { userName: "", password: "", message: "", success: true },
  // });

  const [formState, formAction, isPending] = useActionState(
    validateUser,
    undefined
  );
  return (
    <form action={formAction}>
      <Box
        display="flex"
        rowGap="20px"
        flexDirection="column"
        sx={{ minWidth: "300px" }}
      >
        <Box>
          {formState?.errors &&
            Object.keys(formState?.errors).map((key) => {
              if (key === "message") {
                return (
                  <Fragment key={key}>
                    <label key={key} style={{ color: "red" }}>
                      {formState?.errors[key]}
                    </label>
                  </Fragment>
                );
              }
            })}
        </Box>
        <Box>
          <TextField
            id="userName"
            label="User Name"
            variant="standard"
            name="userName"
            sx={{ minWidth: "300px" }}
          />
          {formState?.errors &&
            Object.keys(formState?.errors).map((key) => {
              if (key === "userName") {
                return (
                  <span
                    style={{
                      display: "block",
                      paddingTop: "5px",
                      color: "red",
                    }}
                    key={key}
                  >
                    {formState?.errors[key]}
                  </span>
                );
              }
            })}
        </Box>
        <Box>
          <TextField
            type="password"
            id="password"
            label="Password"
            variant="standard"
            name="password"
            sx={{ minWidth: "300px" }}
          />
          {formState?.errors &&
            Object.keys(formState?.errors).map((key) => {
              if (key === "password") {
                return (
                  <span
                    style={{
                      display: "block",
                      paddingTop: "5px",
                      color: "red",
                    }}
                    key={key}
                  >
                    {formState?.errors[key]}
                  </span>
                );
              }
            })}
        </Box>
        <Button
          disabled={isPending}
          type="submit"
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}
