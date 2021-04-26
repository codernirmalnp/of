import React from 'react'
import * as MUI from '@material-ui/core'

const MAvatar=(props)=>{
    
    return(
        <MUI.IconButton style={{width:'5rem'}}>
           {props.children}   
        </MUI.IconButton>
        
    )
}

export default MAvatar;