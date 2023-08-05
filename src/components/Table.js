import {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { serverData } from '../data/serverData';
import { Button} from "@mui/material";

import DeletePopup from './popups/DeletePopup';

// Mui Icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";





export default function DataGridDemo() {

    
    const [deletePopup, setDeletePopup] = useState(false);
    const [rowData, setRowData] = useState(null);

    const openDeletePopup = (row) => {
        setDeletePopup(true);
        setRowData(row);
    }

    const handleClose = () => {
        setDeletePopup(false);
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'provider',
          headerName: 'PROVIDER',
          width: 150,
        },
        {
          field: 'name',
          headerName: 'NAME',
          width: 150,
        },
        {
          field: 'name_ip',
          headerName: 'NAME IP',
          width: 150,
        },
        {
          field: 'expire_at',
          headerName: 'EXPIRE AT',
          width: 150,
          valueGetter: (row) => {
              const colorText = Date.parse(row.expire_at) > Date.now() && "red";
              <div style={{color: colorText}}>
                  {row.expire_at}
              </div>
          }
        },
        {
          field: "statut",
          headerName: "STATUS",
          width: 150,
          valueGetter: (params) => {
              <div>
                  {params.row.statut}
              </div>
          }
        },
        {
          field: "workers",
          headerName: "WORKERS",
          width: 150,
        },
        {
          field: 'actions',
          headerName: 'ACTIONS',
          width: 180,
          renderCell: ({ row, row: { id } }) => {
              return (
                <Box
                  width="100%"
                  p="5px"
                  display="flex"
                  justifyContent="left"
                  gap={1}
                >
                  <Button
                    variant="outlined"
                    color="success"
                    width="10px"
                  >
                    <EditIcon color="success" />
                  </Button>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => openDeletePopup(row)}
                  >
                     <DeleteIcon color="warning" />
                  </Button>
                </Box>
              );
            },
        }
      ];
      

  return (
    <Box sx={{ height: 400, marginLeft:"100px", marginRight:"100px", marginTop:"50px" }}>
        {
            deletePopup && (
                <DeletePopup open={openDeletePopup} close={handleClose} rowData={rowData} allData={serverData} />
            )
        }
      <DataGrid
      
        rows={serverData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}