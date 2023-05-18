import { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import ReservationInfoContext from "../../context/reservationInfoProvider";

const BicycleCard = (bike) => {
  const { setSelectedBicycle } = useContext(ReservationInfoContext);
  const navigate = useNavigate();
  const { name, img, type } = bike.bike;

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Box>
          <img
            style={{ width: "100%", height: "250px" }}
            src={`/${type}/${img}`}
            alt="bike"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                navigate("/reservation");
                setSelectedBicycle(bike);
              }}
              variant="contained"
              fullWidth
              size="small"
            >
              Click for Rent
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default BicycleCard;
