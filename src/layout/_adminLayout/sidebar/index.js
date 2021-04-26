import React from 'react'
import * as MUI from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import SideMenuList from './../sidebar/SIdeMenuList'
import CategoryIcon from '@material-ui/icons/Category';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ClassIcon from '@material-ui/icons/Class';
const items=[
    {
        id:1,
        name:'Dashboard',
        icon:<CategoryIcon/>
      
    },
    {
        id:2,
        name:'Category',
        icon:<FileCopyIcon/>
      
    },
    {
        id:3,
        name:'Posts',
        icon:<ClassIcon/>
      
    }
]

class SideBar extends React.Component{
    render(){
        const {classes}=this.props
        return(
            <MUI.Paper elevation={6} className={classes.root}>
                <MUI.Typography variant="h5" style={{textAlign:'center'}}>
                            Admin Panel    
                </MUI.Typography>
                 <SideMenuList items={items}/>
            </MUI.Paper>
        )
    }

}
const style=theme=>({
    root:{
        height:'100vh',
        width:'100%',
    
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }

})

export default withStyles(style)(SideBar);