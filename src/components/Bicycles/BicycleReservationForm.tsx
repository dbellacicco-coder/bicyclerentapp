import React, { useEffect, useState, useContext } from "react";
import {
  Alert,
  Box,
  CardContent,
  Container,
  Dialog,
  DialogTitle,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { formValidator } from "../../utils/formValidator";
import { reservationPriceCalculator } from "../../utils/reservationPricerCalculator";
import ReservationInfoContext from "../../context/reservationInfoProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const BicycleReservationForm = () => {
  const navigate = useNavigate();
  const { selectedBicycle, setReservations } = useContext(
    ReservationInfoContext
  );
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isReservationSucces, setIsReservationSucces] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  const [openReservationPrice, setOpenReservationPrice] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const [userLogInInfo, setUserLogInInfo] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userDays: "",
  });

  const logInData = (e) => {
    setUserLogInInfo({ ...userLogInInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidator
      .validate(userLogInInfo)
      .then(() => {
        const finalPrice = reservationPriceCalculator(
          date.getDate(),
          userLogInInfo.userDays,
          selectedBicycle
        );
        setFinalPrice(finalPrice!);
        console.log("FINAL PRICE", finalPrice);
        setOpenReservationPrice(true);
      })
      .catch((error) => {
        setOpen(true);
        setFormMessage(error);
      });
  };

  return (
    <Container maxWidth="sm">
      {open && (
        <Snackbar open={open} autoHideDuration={6000}>
          <Alert severity="error">{`${formMessage}`}</Alert>
        </Snackbar>
      )}

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
        textAlign="center"
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Bike Reservation Form
            </Typography>
            <Grid item>
              {selectedBicycle && (
                <Box>
                  <img
                    style={{ width: "100%", height: "200px" }}
                    src={`/${selectedBicycle.bike.type}/${selectedBicycle.bike.img}`}
                    alt="bike"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {selectedBicycle.bike.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Type : {selectedBicycle.bike.type.toUpperCase()} - Price :
                      10$ / day
                    </Typography>
                  </CardContent>
                </Box>
              )}
            </Grid>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="userName"
                fullWidth
                type="text"
                label="Name"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={logInData}
              />

              <TextField
                name="userEmail"
                fullWidth
                type="email"
                label="Email"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={logInData}
              />
              <TextField
                name="userPhone"
                fullWidth
                type="text"
                label="Phone Number"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={logInData}
              />
              <Box>
                <Box style={{ display: "flex" }}>
                  <Typography variant="body1">
                    Select starting date :
                  </Typography>
                  <DatePicker
                    onChange={(dateSelection) => {
                      if (dateSelection) {
                        setDate(dateSelection);
                      }
                    }}
                    selected={date}
                  />
                </Box>
                <Typography style={{ margin: "15px" }} variant="body2">
                  Note : if your reservation is placed afer half of the month
                  the BASE PRICE will be 12 $
                </Typography>
                <TextField
                  name="userDays"
                  type="text"
                  label="Days"
                  sx={{ mt: 1.5, mb: 1.5 }}
                  onChange={logInData}
                />
              </Box>

              <Button
                style={{ marginBottom: "10px" }}
                //   onClick={handleReservation}
                type="submit"
                variant="contained"
                fullWidth
                size="small"
              >
                Create a Revervation
              </Button>

              <Button
                onClick={() => navigate("/")}
                variant="outlined"
                fullWidth
                size="small"
              >
                Cancel Revervation
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={openReservationPrice}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isReservationSucces}
          autoHideDuration={6000}
        >
          <Alert severity="success">Reservation placed</Alert>
        </Snackbar>
        <Typography
          style={{ margin: "15px", textAlign: "center" }}
          variant="h6"
        >
          Reservation price: {finalPrice} $
        </Typography>
        <Box style={{ margin: "15px" }}>
          <Button
            style={{ marginBottom: "10px" }}
            onClick={() => {
              setReservations((prevState) => [
                ...prevState,
                {
                  bike: selectedBicycle.bike.name,
                  price: finalPrice,
                  date: dayjs(date).locale("es").format("DD/MMMM/YYYY"),
                },
              ]);
              setIsReservationSucces(true);
              setTimeout(() => {
                navigate("/");
              }, 2500);
            }}
            variant="contained"
            fullWidth
            size="small"
          >
            Place and Accept Reservation
          </Button>

          <Button
            onClick={() => setOpenReservationPrice(false)}
            variant="outlined"
            fullWidth
            size="small"
          >
            Cancel
          </Button>
        </Box>
      </Dialog>
    </Container>
  );
};

export default BicycleReservationForm;
