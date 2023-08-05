import React from 'react'

import { Button} from "@mui/material";

// Mui Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { serverData } from '../../data/serverData';



const DeletePopup = ({ open, close, rowData,allData }) => {

    const handleDelete = (id) => {
        const objWithIdIndex = allData.findIndex((obj) => obj.id === id);
        serverData.splice(objWithIdIndex, 1);
        close()
    }
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ borderRadius: 28 }}
    >
      <DialogTitle
        id="alert-dialog-title"
        fontSize={20}
        style={{textAlign:"center"}}
      >
        Are you sure ?<br/>
      Do you want to delete the selection
      </DialogTitle>
      <DialogContent style={{textAlign:"center"}}>
      {rowData.name}<br />
      {rowData.name_ip}
      </DialogContent>

      <DialogActions>
        <Button onClick={close} style={{backgroundColor:"gray", color:"black"}}>Cancel</Button>
        <Button onClick={() => handleDelete(rowData.id)} style={{backgroundColor:"red", color:"white"}}>Delete</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeletePopup