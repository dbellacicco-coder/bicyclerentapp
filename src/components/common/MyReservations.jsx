import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";

const MyReservatrions = ({ reservations }) => {
  return (
    <Box>
      {reservations.map((reservation) => {
        return (
          <Box
            style={{ backgroundColor: "grey", padding: "7px" }}
            key={reservation.bike}
          >
            <Typography variant="body1">
              Bike Name : {reservation.bike}
            </Typography>
            <Typography variant="body1">
              Price: {reservation.price} $
            </Typography>
            <Typography variant="body1">Date: {reservation.date} </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default MyReservatrions;
