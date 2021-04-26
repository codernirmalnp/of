import React from 'react'
import * as MUI from '@material-ui/core'
import {withStyles} from '@material-ui/core'
class MPaper extends React.Component{

    render(){
     const {children,classes,elevation}=this.props
        return(
            <MUI.Paper  className={classes.root} elevation={elevation} >
                {children}
            </MUI.Paper>
        )
    }

}
const styles={
    root:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:'5rem',
        padding:'2rem',
     
       
    }
}
export default withStyles(styles) (MPaper)