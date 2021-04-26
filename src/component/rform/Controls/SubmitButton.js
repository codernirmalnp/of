import {Button} from '@material-ui/core'
const SubmitButton=({variant,color,disable,children,onClick})=>{
    return(
        <Button variant={"contained" || variant} type="submit" color={color} disabled={disable} onClick={onClick} style={{marginTop:'2rem'}} fullWidth>
            {children}
        </Button>
        
    )
}
export default SubmitButton;


