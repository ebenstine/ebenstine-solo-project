import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';


import QueueMusic from '@material-ui/icons/QueueMusic';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import Info from '@material-ui/icons/Info';
import Menu from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    heading: {
        color: '#2a4f64',
        background: '#f7ffbd',
        '&:hover': {
            background:'#f4ffa1',
            } 
        
    }

}))


const NavMenu = ({user}) => {
    const {heading} = useStyles();
    const [open, setOpen] = useState(false);
   
  
    const handleClickOpen = () => {
      if (user === null){
        setOpen(false)
      } else
      setOpen(true);
    };
    const handleCancel = () => {
      setOpen(false);
    }

  
    return (
      <div>
        <IconButton>
          <Menu 

            aria-controls="simple-menu" 
            aria-haspopup="true"
            fontSize={'inherit'} 
            style={{ color: '#233d4d' }}
            onClick={handleClickOpen}>

        </Menu>
      </IconButton>
        <MenuItem onClick={handleClickOpen}></MenuItem>
          <Dialog 
                
                open={open}
                PaperProps={{
                    style: { border: "1.5px solid #3b95ac",
                             position: "fixed", top: 0, right: 0, m: 0, 
                             
                            }
            
                  }}
                onClose={handleCancel}

                >
          <DialogTitle className={heading}></DialogTitle>
          <MenuItem
          className={heading}
          
          >
          
          <Link to="/songsList"
          style = {{
            color: '#233d4d',
            display:'flex',
            flexWrap: 'wrap'
            }}
          >
            
            <QueueMusic/>See All Songs
            </Link>
          </MenuItem>

          <MenuItem className={heading}>
           
            <Link  to="/addSong"
            style = {{
                color: '#233d4d',
                display:'flex',
                flexWrap: 'wrap',
                
                
                 }}
            >
            <PlaylistAdd/>  
            Add a New Song
            </Link>

          </MenuItem>
          <MenuItem className={heading}>
            
            <Link to="/user"
            style = {{
                color: '#233d4d',
                display:'flex',
                flexWrap: 'wrap'
                 }}
            > 
            
            <AccountCircle/> Account Info
            </Link>
        
          </MenuItem>
        
        </Dialog>
        
      </div>
    );
  }
  
  export default NavMenu;