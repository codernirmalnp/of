import React from 'react'
import {withStyles} from '@material-ui/core/styles'
class Main extends React.Component{
    render(){
        const {classes}=this.props
        return(
            <div className={classes.root}>
              {this.props.children}
            </div>
        )
    }
}
const style=theme=>({
    root:{
       marginTop:'5rem',
       marginLeft:'2rem'
    }

})

export default withStyles(style)(Main);