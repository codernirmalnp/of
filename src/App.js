import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
//layouts route
import AdminLayoutRoute from './layout/_adminLayout'
import CssBaseline from '@material-ui/core/CssBaseline';
//components
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import ForgetPassword from './component/forgetPassword';
class App extends React.Component{
  render(){
    return(
      <Router>
        <CssBaseline/>
          <Switch>
               <Route exact path='/' component={Login}/>
               <Route exact path="/forget-password" component={ForgetPassword}/>
               <AdminLayoutRoute exact path='/admin' component={Dashboard}/>

           </Switch>
      </Router>

    )
  }
}
 
 
export default App;