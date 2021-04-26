import React from 'react'
import * as MUI from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import RightMenu from './RightMenu'
class NavBar extends React.Component{
    render(){
        const {classes}=this.props
        return(
            <MUI.AppBar position="fixed" className={classes.root}>
                 <MUI.Toolbar className={classes.right}>
                     <div >
                       <RightMenu/>
                       </div>
                 </MUI.Toolbar>
            </MUI.AppBar>
        )
    }
}

const style=theme=>({
    root:{
        width:'100%',
        backgroundColor:'#1a237e',
        [theme.breakpoints.up('md')]:{
            width:'calc(100% - 19.2rem)'
        }
      

    },
    right:{
        display:'flex',
        justifyContent:'flex-end'
    }

})
export default withStyles(style)(NavBar);