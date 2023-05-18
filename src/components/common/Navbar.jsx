import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import { Button, Container, Grid } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    onClick={() => navigate("/")}
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 3, cursor: "pointer" }}
                  >
                    Bike Rental Center
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    target="_blank"
                    href="https://www.linkedin.com/in/danielbellacicco/"
                  >
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ fontWeight: 3, cursor: "pointer" }}
                    >
                      CONTACT
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
