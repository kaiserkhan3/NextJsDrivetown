"use client";
import { Box, Button, TextField } from "@mui/material";
import { error } from "console";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const submitHandler = (formData: FormData) => {
    const formValues = Object.fromEntries(formData);
    let data = new FormData();
    data.append("user_Name", formValues.userName);
    data.append("uPassword", formValues.password);

    fetch("http://apinew.drivetowininv.com/api/validateuser", {
      body: data,
      method: "post",
    })
      .then((response) => {
        if (response.ok) {
          console.log("success");
          router.replace("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form action={submitHandler}>
      <Box
        display="flex"
        rowGap="20px"
        flexDirection="column"
        sx={{ minWidth: "250px" }}
      >
        <Box>
          <TextField
            id="userName"
            label="User Name"
            variant="standard"
            name="userName"
            sx={{ minWidth: "250px", fontSize: "2rem" }}
          />
        </Box>
        <Box>
          <TextField
            type="password"
            id="password"
            label="Password"
            variant="standard"
            name="password"
            sx={{ minWidth: "250px" }}
          />
        </Box>
        <Button type="submit" variant="contained" color="success">
          Submit
        </Button>
      </Box>
    </form>
  );
}
