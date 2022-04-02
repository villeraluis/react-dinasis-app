import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ButtonGroup from "@mui/material/ButtonGroup";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';

export default function ListadoProductos({productosEnCarro,setproductosEnCarro}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [productos, setProductos] = React.useState([]);

  React.useEffect(() => {
    const getProductos = () => {
      fetch("http://localhost:9000/api")
        .then((res) => res.json())
        .then((res) => {
          setProductos(res);
          setSearchResults(res);
        });
    };
    getProductos();
  }, []);


  const handleClickAgregarProductoEnCarro = (producto) => {
     
      const newProducto={
        id: productosEnCarro.length + 1,
        ProIdInProducto: producto.ProIdInProducto,
        ProStDescripcion: producto.ProStDescripcion,
        ProInPrecio: producto.ProInPrecio,
        cantidad: 1,
      }
      setproductosEnCarro([...productosEnCarro,newProducto]);
    
    console.log(productosEnCarro);
  };

 
  const handleChangeInput = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const results = productos.filter((producto) =>
      producto.ProStDescripcion.toLowerCase().includes(searchTerm)
    );

    if (results.length <= 10) {
      if (searchTerm.length >= 3) {
        const getProductos = () => {
          fetch("http://localhost:9000/api/producto=" + searchTerm)
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              setSearchResults(
                res.length === 0
                  ? [{ ProStDescripcion: "No Hay Productos" }]
                  : res
              );
            });
        };
        getProductos();
      } else {
        setSearchResults(
          results.length === 0
            ? [{ ProStDescripcion: "Digite mas Letras Para seguir buscando" }]
            : results
        );
      }
    } else {
      setSearchResults(results);
    }
  }, [searchTerm]);



  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 , maxHeight:'80vh'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            component="form"
            sx={{ p: "4px 4px", display: "flex", alignItems: "center" }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="buscar">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar Productos"
              inputProps={{ "aria-label": "Buscar Productos" }}
              type="text"
              value={searchTerm}
              onChange={handleChangeInput}
            />
          </Paper>

          <List>
            {searchResults.map((producto) => {
              if (!producto.ProIdInProducto) {
                return (
                  <Paper
                    key="noHay"
                    sx={{ p: "4px 4px", display: "flex", alignItems: "center" }}
                  >
                    {producto.ProStDescripcion}
                  </Paper>
                );
              }

              return (
                <React.Fragment key={producto.ProIdInProducto}>
                  <ListItem
                    alignItems="flex-start"
                    secondaryAction={
                      <React.Fragment>
                        <Fab
                          variant="extended"
                          size="small"
                          style={{ borderRadius: 15 }}
                          color="primary"
                          onClick={() => handleClickAgregarProductoEnCarro(producto)}
                        >
                        <AddIcon/>
                        </Fab>
                      </React.Fragment>
                    }
                  >
                    <ListItemAvatar>
                       {producto.ProIdInProducto}
                    </ListItemAvatar>

                    <ListItemText
                      primary={producto.ProStDescripcion}
                      sx={{ maxWidth: "60%" }}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Precio : {producto.ProInPrecio}
                          </Typography>

              
                          
                        </React.Fragment>
                      }

                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              );
            })}
          </List>
        </Grid>
      </Grid>

      <div style={{
      position: 'fixed',
      margin: 'auto',
      display: 'block',
      width: 'fit-content',
      bottom: 66,
     
    }}>
      <Fab variant="extended" color="primary" aria-label="agregar" size="small" style={{ borderRadius: 20}} component={Link} to="/cotizaciones/new">  
        Continuar Cotización
      </Fab>
      <Fab variant="extended" color="primary" aria-label="agregar" size="small" style={{ borderRadius: 20,marginLeft:'10px'}} >  
         {productosEnCarro.length} Productos Añadidos  - 
         <ShoppingCartCheckoutIcon/>
      </Fab>
    </div>
    </Box>
  );
}
