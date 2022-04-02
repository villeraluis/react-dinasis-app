import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#5a6887",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  textAlign: "center",
  height: "100px",
  color:"#fff",
  "&:hover": {
    backgroundColor: "#92a0bf",
    opacity: [0.9, 0.8, 0.7],
    cursor:'pointer'
  },
}));

const menus = [
  { icono: "add_shopping_cart", label: "VENTAS" ,action:'/ventas'},
  { icono: "shopping_cart", label: "COMPRAS",action:'/compras' },
  { icono: "shopping_basket", label: "COTIZACONES",action:'/cotizaciones' },

  
];

export default function MenuGrid() {
  let action=''
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
    
        {menus.map((menu) => {
          action=menu.action
         return(<Grid item xs={4} md={3} key={menu.label}>
            <Item   
            component={Link}
            to={action}>
            <Icon sx={{  fontSize: 50 }} >{menu.icono}</Icon>  
               {menu.label}
            </Item>
          </Grid>) 
        })}
      </Grid>
    </Box>
  );
}
