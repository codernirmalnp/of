import React from 'react'
import {withStyles} from '@material-ui/core'
import * as MUI from '@material-ui/core'
import Controls from './../rform/Controls'
import Form from './../rform/Form'
import background from './../../svg/background.jpg'
const initalValue={
    email:''
}
class ForgetPassword extends React.Component{
    render(){
        const {classes}=this.props
        return(
            <div className={classes.root}>
                <MUI.Paper elevation={5} className={classes.paper} >
                 
                   <Form initialValues={initalValue} >

                       <Controls.InputText name="email" label="Email"/>
                           
                       <Controls.SubmitButton color="secondary">Reset Password</Controls.SubmitButton>

                   </Form>
                       
                 
                </MUI.Paper>
                   
            </div>
        )
    }

}
const style=(theme)=>({
    root:{
        backgroundImage:`url(${background})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
     

    },
    paper:{

        zIndex:200,
        height:'200px',
        width:'500px',
        padding:'2rem',
    
    },
  

})
export default  withStyles(style)(ForgetPassword);
