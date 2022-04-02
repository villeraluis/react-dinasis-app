import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import {InputBase,TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import { Link } from 'react-router-dom';
import InputDate from "../generales/InputDate";


const ListadoCot=[
    {id:1, cliente:'nombre Cliente1',idCliente:'11345282828', valor:1234.3, fecha:new Date().toLocaleString()},
    {id:2, cliente:'nombre Cliente2',idCliente:'11345282828', valor:1234.3, fecha:new Date().toLocaleString()},
    {id:3, cliente:'nombre Cliente3',idCliente:'11345282828', valor:1234.3, fecha:new Date().toLocaleString()},
    {id:4, cliente:'nombre Cliente4',idCliente:'11345282828', valor:1234.3, fecha:new Date().toLocaleString()},
    {id:5, cliente:'nombre Cliente5',idCliente:'11345282828', valor:1234.3, fecha:new Date().toLocaleString()}
]

export default function ListadoCotizaciones() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [cotizaciones, setCotizaciones] = React.useState(ListadoCot);

  ////

  const [cambios, setCambios] = React.useState(false);
  
/*   React.useEffect(() => {
    const getCotizaciones = () => {
      fetch("http://localhost:9000/api")
        .then((res) => res.json())
        .then((res) => {
          setCotizaciones(res);
          setSearchResults(res);
        });
    };
    getCotizaciones();
  }, []); */



 
  const handleChangeInput = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const results = cotizaciones.filter((cotizacion) =>
      cotizacion.cliente.toLowerCase().includes(searchTerm)
    );

    if (results.length <= 10) {
      if (searchTerm.length >= 3) {
        const getCotizaciones = () => {
          fetch("http://localhost:9000/api/cotizacion=" + searchTerm)
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              setSearchResults(
                res.length === 0
                  ? [{ ProStDescripcion: "No Hay cotizaciones" }]
                  : res
              );
            });
        };
        getCotizaciones();
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
              placeholder="Buscar Cotización"
              inputProps={{ "aria-label": "Buscar Cotización" }}
              type="text"
              value={searchTerm}
              onChange={handleChangeInput}
            />
          </Paper>

          <List>
            {cotizaciones.map((cotizacion) => {
             
              return (
                <React.Fragment key={cotizacion.id}>
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
                        <PreviewOutlinedIcon/>
                        </Fab>
                      </React.Fragment>
                    }
                  >
                    <ListItemAvatar>
                       {cotizacion.id}
                    </ListItemAvatar>

                    <ListItemText
                      primary={cotizacion.cliente}
                      sx={{ maxWidth: "60%" }}
                      secondary={
                        <React.Fragment>

                            <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Id Cliente : {cotizacion.idCliente}
                          </Typography>

                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Precio : {cotizacion.valor}
                          </Typography>
                          

                          <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Fecha : {cotizacion.fecha}
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

  
      
 
    </Box>
  );
}
