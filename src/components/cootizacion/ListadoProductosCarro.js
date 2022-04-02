import * as React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import RemoveIcon from "@mui/icons-material/Remove";
import InputBase from "@mui/material/InputBase";

const ListadoProductosCarro = ({ productosEnCarro, setproductosEnCarro }) => {
  ////
  const cantidadP={
    c:0
  }

  ///funcion para aumentar un producto en carrito
  const handleClickUpCantidadProductoEnCarro = (idProd) => {
    const newProductosEnCarro = productosEnCarro.map((producto) => {
      if (producto.id === idProd) {
        const cant=producto.cantidad + 1
        return { ...producto, cantidad:cant, precioTotal: cant * producto.ProInPrecio  };
      }
      return producto;
    });
    setproductosEnCarro(newProductosEnCarro);
  };

  ///funcion para disminuir un producto en carrito
  const handleClickDownCaProductoEnCarro = (idProd) => {
    const newProductosEnCarro = productosEnCarro.map((producto) => {
      if (producto.id === idProd && producto.cantidad > 1) {
        const cant=producto.cantidad - 1
        return { ...producto, cantidad:cant,  precioTotal: cant * producto.ProInPrecio, };
      }
      return producto;
    });
    setproductosEnCarro(newProductosEnCarro);
  };

  ///funcion para eliminar un producto en carro
  const handleDeleteProductoCarro = (idProd) => {
    const newProductosEnCarro = productosEnCarro.filter(
      (productos) => productos.id !== idProd
    );
    setproductosEnCarro(newProductosEnCarro);
  };

  //funcion para cambiar cantidad manualmente
  const onChancheCantidad = (e, idProd) => {
    
    let valorC=e.target.value

    const newProductosEnCarro = productosEnCarro.map((producto) => {
      if (producto.id === idProd) {
      
        return {
          ...producto,
          cantidad: (isNaN(valorC) || valorC==='' )?parseInt(valorC) :'',
          precioTotal: parseInt(valorC) * producto.ProInPrecio,
        };
      }
      return producto;
    });
    setproductosEnCarro(newProductosEnCarro);
  };

  ///cambiar precion de un producto digitando
  const onChanchePrecio = (newPrecio, idProd) => {
    const newProductosEnCarro = productosEnCarro.map((producto) => {
      if (producto.id === idProd) {
        return {
          ...producto,
          ProInPrecio: newPrecio,
          precioTotal: newPrecio * producto.cantidad,
        };
      }
      return producto;
    });
    setproductosEnCarro(newProductosEnCarro);
  };

  const CcatidadProducto = (id) => {
    const prod = productosEnCarro.find((prod) => prod.id === id);
    return prod ? prod.cantidad : 0;
  };

  if (productosEnCarro) {
    return (
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List>
              {productosEnCarro.map((producto) => {
                if(producto.precioTotal === undefined){
                  producto.precioTotal =producto.ProInPrecio
                }


                if (!producto.id) {
                  return (
                    <Paper
                      key="noHay"
                      sx={{
                        p: "4px 4px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {producto.ProStDescripcion}
                    </Paper>
                  );
                }

                return (
                  <React.Fragment key={producto.id}>
                    <Paper elevation={3} sx={{ my: 1 }}>
                      <ListItem
                        alignItems="flex-start"
                        secondaryAction={
                          <React.Fragment>
                            <Fab
                              variant="extended"
                              size="small"
                              style={{ borderRadius: 15 }}
                              color="primary"
                            >
                              <RemoveIcon
                                onClick={() =>
                                  handleClickDownCaProductoEnCarro(producto.id)
                                }
                              />

                              <input type="text"  onChange={(e) =>
                                  onChancheCantidad(e, producto.id)
                                } 

                                value={producto.cantidad} 
                                style={{
                                  outline: `0 solid transparent`,
                                  maxWidth: 30,
                                  backgroundColor: "#bb6566",
                                }}/>

                             

                              <AddIcon
                                onClick={() =>
                                  handleClickUpCantidadProductoEnCarro(
                                    producto.id
                                  )
                                }
                              />
                            </Fab>
                          </React.Fragment>
                        }
                      >
                        <ListItemAvatar>
                          {producto.ProIdInProducto}
                        </ListItemAvatar>

                        <ListItemText
                          primary={
                            <React.Fragment>
                              {producto.ProStDescripcion}
                            </React.Fragment>
                          }
                          sx={{ maxWidth: "60%" }}
                          secondary={
                            <React.Fragment>
                              Precio U: $
                              <Typography
                                suppressContentEditableWarning={true}
                                contentEditable={true}
                                component="span"
                                onBlur={(e) => {
                                  onChanchePrecio(
                                    e.target.innerText,
                                    producto.id
                                  );
                                }}
                                sx={{
                                  display: "inline",
                                  outline: `0 solid transparent`,
                                  maxWidth: "80px",
                                  backgroundColor: "#d1d1d1",
                                }}
                              >
                                {producto.ProInPrecio}
                              </Typography>
                              <Typography
                                component="span"
                                sx={{
                                  display: "block",
                                  outline: `0 solid transparent`,
                                }}
                              >
                                Precio T: {producto.precioTotal}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </Paper>
                  </React.Fragment>
                );
              })}

              {productosEnCarro.length > 1 ? (
                <Paper elevation={3}>
                  <ListItem key={"nou"} disablePadding>
                    <ListItemAvatar />
                    <ListItemText
                      id={"no"}
                      primary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "block", fontWeight: "bold" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            SUBTOTAL COTIZACION : {123123123}
                          </Typography>
                          <Typography
                            sx={{ display: "block", fontWeight: "bold" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Valor Iva : {123123123}
                          </Typography>
                          <Typography
                            sx={{ display: "block", fontWeight: "bold" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            TOTAL COTIZACIÓN : {123123123}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </Paper>
              ) : (
                ""
              )}
            </List>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default ListadoProductosCarro;
