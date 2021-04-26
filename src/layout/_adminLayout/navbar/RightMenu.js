import React from 'react'
import * as MUI from '@material-ui/core'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
const StyledMenu = MUI.withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <MUI.Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = MUI.withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MUI.MenuItem);
  
class RightMenu extends React.Component{
    state={
        anchorEl:false
    }

     handleClick = (event) => {
      this.setState({anchorEl:event.currentTarget});
    };
  
    handleClose = () => {
     this.setState({anchorEl:null});
    };
    render(){
       const {anchorEl}=this.state
        return(
            <div>
            <MUI.IconButton onClick={this.handleClick} style={{color:'white'}} >
                   <ArrowDropDownCircleIcon/>
            </MUI.IconButton> 
            <StyledMenu
        id="customized-menu"
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
        style={{marginTop:'3rem'}}
      >
        <StyledMenuItem>
          <MUI.ListItemIcon>
            <DraftsIcon fontSize="small" />
          </MUI.ListItemIcon>
          <MUI.ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <MUI.ListItemIcon>
            <InboxIcon fontSize="small" />
          </MUI.ListItemIcon>
          <MUI.ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
           
        )
    }

}

export default (RightMenu);