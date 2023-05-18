import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{ flexGrow: 1, textAlign: "center", height: "150", my: 3 }}
      maxWidth="xl"
    >
      <Typography color="primary" variant="subtitle1">
        Bike Center All rights Revered 2023
      </Typography>
    </Container>
  );
};

export default Footer;
