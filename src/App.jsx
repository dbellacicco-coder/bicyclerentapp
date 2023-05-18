/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import APPRouter from "./APPRouter";
import { ReservationInfoProvider } from "./context/reservationInfoProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReservationInfoProvider>
        <BrowserRouter>
          <Container sx={{ mt: 9 }} maxWidth="xl">
            <APPRouter />
          </Container>
        </BrowserRouter>
      </ReservationInfoProvider>
    </>
  );
}

export default App;
