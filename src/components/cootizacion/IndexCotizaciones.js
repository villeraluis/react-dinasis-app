import * as React from "react";
import {Typography,Paper}from "@mui/material";
import BtnAdd from "./BtnAdd";
import { Routes, Route } from "react-router-dom";
import FormCotizacion from "./FormCotizacion";
import ListadoCotizaciones from "./ListadoCotizaciones";


const Index = () => {
  return(
  <React.Fragment>
    <Paper elevation={3} sx={{background:'linear-gradient(0deg, #5a6887 0%, #96a0b4 50%, #5a6887 100%)',color:'#fff',padding:0.5,mb:1 }} >
    <Typography variant="h6" component="div" textAlign="center">
      Listado Cotizaciones
    </Typography>
    </Paper>
    

    <ListadoCotizaciones />
    

    <BtnAdd link="/cotizaciones/new" label="Nueva Cotización" />
   
  </React.Fragment>)
};

export default function IndexCotizaciones() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/new/*" element={<FormCotizacion />} />
    </Routes>
  );
}
