import { useContext, useEffect, useState } from "react";

import {
  Container,
  Grid,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import BicycleCard from "../components/Bicycles/BicycleCard";
import ReservationInfoContext from "../context/reservationInfoProvider";
import MyReservatrions from "../components/common/MyReservations";

export const Home = () => {
  const { bicycles, reservations } = useContext(ReservationInfoContext);

  const [loading, setLoading] = useState(true);
  const [bicyclesData, setBicyclesData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBicyclesData(bicycles);
      setLoading(false);
    }, 1500);
  }, [bicycles]);

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">Bicycles to Rent</Typography>
            </Box>
            {reservations.length > 0 && (
              <>
                <Typography variant="h6">My reservations</Typography>
                <Box style={{ display: "flex" }}>
                  <MyReservatrions reservations={reservations} />
                </Box>
              </>
            )}
            <Typography color="primary" variant="h2">
              Normal
            </Typography>
            <Grid sx={{ my: 2 }} container alignItems="center" spacing={2}>
              {bicyclesData[0]?.map((bike) => {
                return (
                  <Grid key={bike.id} item>
                    <BicycleCard bike={bike} />
                  </Grid>
                );
              })}
            </Grid>
            <Typography variant="h4">Electric</Typography>
            <Grid sx={{ my: 2 }} container alignItems="center" spacing={2}>
              {bicyclesData[1]?.map((bike) => {
                return (
                  <Grid key={bike.id} item>
                    <BicycleCard bike={bike} />
                  </Grid>
                );
              })}
            </Grid>
            <Typography variant="h4">Old</Typography>
            <Grid sx={{ my: 2 }} container alignItems="center" spacing={2}>
              {bicyclesData[2]?.map((bike) => {
                return (
                  <Grid key={bike.id} item>
                    <BicycleCard bike={bike} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Home;
