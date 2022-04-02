import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import MenuButton from "./components/MenuButton";
import IndexCotizaciones from "./components/cootizacion/IndexCotizaciones";
import IndexMenu from "./components/menuPrincipal/IndexMenu";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const color1 = "#b70002";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: "#9b080a",
      main: color1,
      dark: "#9b080a",
    },
  },
});



export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Navbar />

      

      <Container component="main" maxWidth="sm" sx={{ p: { xs: 1, md: 3 } }}>
        <Routes>
          <Route path="/" element={<IndexMenu />} />
          <Route path="/menu" element={<IndexMenu />} />
          <Route path="/cotizaciones/*" element={<IndexCotizaciones />} />
        </Routes>
      </Container>
      <MenuButton></MenuButton>
    </ThemeProvider>
  );
}
