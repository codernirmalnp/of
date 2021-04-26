import React from 'react';
import * as MUI from '@material-ui/core'
import {useField} from 'formik'
const InputText=({label,variant,...props})=>{ 
 
    const [field,,{setValue}]=useField(props);
    return(
        <MUI.TextField variant={"outlined" || variant} name={field.name}  onChange={(option)=>setValue(option.target.value)}  label={label} margin="normal" fullWidth/> 
    )
}
export default InputText;