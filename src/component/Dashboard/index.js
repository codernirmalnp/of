import React from 'react'
import CardList from './CardList'
const items=[
    {
        id:1,
        name:'Category',
        description:'258 of Category Available'
    },
    {
        id:2,
        name:'Users',
        description:'1002 of Users SignedIn'
    },
    {
        id:3,
        name:'Products',
        description:'50000 of Category Added'
    }
]
class Dashboard extends React.Component{
    render(){
        return(
           <>
           <CardList items={items}/>


           </>
        )
    }
}
export default Dashboard;