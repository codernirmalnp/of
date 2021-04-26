import React from 'react'
import * as MUI from '@material-ui/core'
class CardList extends React.Component{
    render(){
        const {items}=this.props
        return(
        
            <MUI.Grid container spacing={5}>
            {items.map((item)=>(
               <MUI.Grid item xs={4}>
              <MUI.Card>
                <MUI.CardContent>
                    <MUI.Typography variant="h4" component="h4">
                         {item.name.toUpperCase()}
                    </MUI.Typography>
                    <MUI.Typography variant="h6" component="h6">
                         {item.description}
                    </MUI.Typography>
                </MUI.CardContent>
            
              </MUI.Card>
            </MUI.Grid>
           ))
           }
           
            </MUI.Grid>
        )
    }

}
export default CardList;