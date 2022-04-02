import * as React from "react";

import TextField from "@mui/material/TextField";
import SelectSearch from "./SelectSearch";
import AddIcon from "@mui/icons-material/Add";
import InputDate from "../generales/InputDate";

import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Grid, Divider, Typography, Button } from "@mui/material";
import ListadoProductos from "./ListadoProductos";
import ListadoProductosCarro from "./ListadoProductosCarro";


export default function FormCotizacion() {
  const [productosEnCarro, setproductosEnCarro] = React.useState([]);
 
  return (
    <Routes>
      <Route
        path="/"
        element={
         <FormCotizaciones productosEnCarro={productosEnCarro} setproductosEnCarro={setproductosEnCarro}/>
        }
      />
      <Route path="/productos" element={<ListadoProductos productosEnCarro={productosEnCarro} setproductosEnCarro={setproductosEnCarro}/>} />
    </Routes>
  );
}


const FormCotizaciones = ({productosEnCarro,setproductosEnCarro}) => {
  console.log('p2',productosEnCarro)

  return(
    <React.Fragment>
            
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ mt: 2 }} textAlign="center">
        <InputDate />
      </Grid>

      <Grid item xs={12} style={{ paddingTop: '10px'}} textAlign="center">
        <Fab
          variant="extended"
          color="primary" aria-label="agregar" size="small" style={{ borderRadius: 20,width:'100%'}}
          component={Link}
          to="/cotizaciones/new/productos"
        >
        <AddIcon sx={{ mr: 1 }} />
          Selecionar Productos
        </Fab>
      </Grid>

      <Grid item xs={12} style={{ paddingTop: '10px'}} textAlign="center">
      <ListadoProductosCarro productosEnCarro={productosEnCarro} setproductosEnCarro={setproductosEnCarro}/>
      </Grid>

     

   {/*    <Grid item xs={12} md={6}>
        <SelectSearch />
      </Grid> */}
{/* 
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardNumber"
          label="Card number"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
        />
      </Grid> */}
    </Grid>
  </React.Fragment>

  )
};


