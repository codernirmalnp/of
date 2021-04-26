import React from 'react'
import {Route} from 'react-router-dom'
import * as MUI from '@material-ui/core'
import Navbar from './navbar'
import SideBar from './sidebar'
import Main from './main'            
const AdminLayout=({children,...rest})=>{
  
    return(
        <React.Fragment>
            <Navbar/>
            <MUI.Grid container >
                  <MUI.Grid item xs={2}>
                       <SideBar/>
                  </MUI.Grid>
                  <MUI.Grid item xs={10} >
                        <Main {...rest} >
                           {children}
                        </Main>
                  </MUI.Grid>


            </MUI.Grid>
          
        </React.Fragment>
    )

}
const AdminLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (
          <AdminLayout>
            <Component {...props} />
          </AdminLayout>
        )}
      />
    );
  };
export default AdminLayoutRoute;