import React from 'react'

import * as MUI from '@material-ui/core'
import {withStyles} from '@material-ui/core'

class SideMenu extends React.Component{
    render(){
        const {items,classes}=this.props
        return(
            <>
            {
                items.map(item=>(
                  <MUI.MenuList
                  key={item.id}
                  open={true}>
                   <MUI.MenuItem className={classes.item} >
                      {item.icon}
                      <MUI.Typography>{item.name}</MUI.Typography>
                  </MUI.MenuItem> 
                </MUI.MenuList>
      
                ))
            } 
            </>
        )
    }


}
const style=theme=>({
  item:{
      marginTop:'0.5rem',
      padding:'0.2rem',
      display:'flex',
      justifyContent:'flex-start'
   
  }

})
export default withStyles(style)(SideMenu);