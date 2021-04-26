import React from 'react'
import * as MUI from '@material-ui/core'
import Form from '../rform/Form'
import Controls from '../rform/Controls'
import Paper from '../rform/Paper'
import MAvatar from '../rform/Avatar'
import {ReactComponent as LoginIcon }from './../../svg/login.svg'

const initialValues={
    email:'',
    password:''
}
class Login extends React.Component{
    state={
        loading:false
    }
    handelClick=()=>{
        this.setState({loading:true})
    }

    render(){
        const {loading}=this.state
        return(
            <MUI.Container maxWidth="xs" >
            <Paper elevation={5}>
                <MAvatar>
                    <LoginIcon/>
                </MAvatar>
                    <Form initialValues={initialValues}>
                      <Controls.InputText name='email' label="Email" />
                      <Controls.PasswordText name='password' label="Password" />
                      <Controls.SubmitButton  color="primary" onClick={this.handelClick} disable={loading}>Submit </Controls.SubmitButton>
                    </Form>
                    
            </Paper>
            </MUI.Container>
           
          
        )
    }
}

export default (Login);