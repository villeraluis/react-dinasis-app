import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const BtnAdd = ({link,label}) => {
  
  return (
    <div style={{
      position: 'fixed',
      margin: 'auto',
      display: 'block',
      width: 'fit-content',
      bottom: 66,
     
    }}>
      <Fab variant="extended" color="primary" aria-label="agregar" size="small" style={{ borderRadius: 17}}  component={Link} to={link}>
        <AddIcon/>
        {label}
      </Fab>
    </div>
  );
}
  
export default BtnAdd;