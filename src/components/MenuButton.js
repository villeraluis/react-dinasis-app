import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";

export default function BotonesNavegacionFoot() {
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          style={{
            //#3f51b5
            background: "linear-gradient(0deg, #5a6887 0%, #96a0b4 50%, #5a6887 100%)",
            color: "#fff",
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/menu"
            label="Menú"
            style={{ color: "#fff" }}
            icon={<GridViewIcon />}
          />

          <BottomNavigationAction
            component={Link}
            to="/cotizaciones"
            label="Cotizaciones"
            style={{ color: "#fff" }}
            icon={<ShoppingCartCheckoutIcon />}
            value={"ventas"}
          />

          <BottomNavigationAction
            component={Link}
            to="/ventas"
            label="Ventas"
            style={{ color: "#fff" }}
            icon={<ArchiveIcon />}
            value={"ventas"}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
