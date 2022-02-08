import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
function ContactDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();
  const onSubmit = (data) => {
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    if (data) {
      history("/robots");
    }
  };
  return (
    <React.Fragment>
      <Box mt={25}>
        <Grid container justifyContent="center">
          <Grid item lg={4} md={5} sm={6} xs={10}>
            <Card sx={{ width: "100%", borderRadius: "7px" }}>
              <CardContent sx={{ paddingTop: "30px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    autoComplete="name"
                    autoFocus
                    {...register("name", {
                      required: "Enter name",
                    })}
                    error={!!errors?.name}
                    helperText={errors?.name ? errors.name.message : null}
                  />
                  <Box mt={3}>
                    <TextField
                      id="outlined-basic"
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      autoComplete="email"
                      autoFocus
                      {...register("email", {
                        required: "Enter email address",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid email address",
                        },
                      })}
                      error={!!errors?.email}
                      helperText={errors?.email ? errors.email.message : null}
                    />
                  </Box>
                  <CardActions>
                    <Box
                      sx={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "14px",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          paddingLeft: "100px",
                          paddingRight: "100px",
                          textTransform: "capitalize",
                          fontSize: "15px",
                        }}
                        type="submit"
                      >
                        Enter
                      </Button>
                    </Box>
                  </CardActions>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default ContactDetails;
